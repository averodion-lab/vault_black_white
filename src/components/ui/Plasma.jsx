import { useEffect, useRef, useState } from 'react'

const VERT = 'attribute vec2 a; void main(){ gl_Position = vec4(a, 0., 1.); }'

// Monochrome domain-warped plasma: white liquid on one side, black smoke on the
// other, split by a rippling edge. On narrow screens the split turns horizontal.
const FRAG = `
precision highp float;
uniform vec2 R; uniform float T; uniform vec2 MS; uniform float MOB; uniform float INTRO; uniform float EDGE;
float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
float n(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),u.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float v=0., a=.5; mat2 r=mat2(.8,.6,-.6,.8); for(int i=0;i<6;i++){ v+=a*n(p); p=r*p*2.02; a*=.5; } return v; }
float warp(vec2 p, float t, out vec2 q){
  q = vec2(fbm(p + vec2(0., t*.06)), fbm(p + vec2(5.2,1.3) - vec2(t*.05, 0.)));
  vec2 r = vec2(fbm(p + 3.*q + vec2(1.7,9.2) + t*.03), fbm(p + 3.*q + vec2(8.3,2.8) - t*.025));
  return fbm(p + 2.6*r);
}
vec3 whitePlasma(float f, vec2 q){
  float base = mix(.82, 1.0, smoothstep(.15, .8, f));
  float vein = smoothstep(.0, .06, abs(fract(f*7. + q.x*2.) - .5) - .38);
  base -= (1.-vein) * .05;
  base -= smoothstep(.6, .95, q.y) * .07;
  return vec3(base) * vec3(1., 1., 1.012);
}
vec3 blackPlasma(float f, vec2 q){
  float s = pow(smoothstep(.25, 1., f), 2.2) * .34 + pow(q.x, 4.) * .10;
  return vec3(.018 + s);
}
void main(){
  vec2 uv = gl_FragCoord.xy / R; float a = R.x / R.y;
  vec2 p = vec2(uv.x * a, uv.y);
  vec2 m = (MS - .5) * vec2(a, 1.);
  vec2 q;
  float f = warp(p * 1.6 + m * .25, T, q);
  vec3 W = whitePlasma(f, q), B = blackPlasma(f, q);
  float x = MOB > .5 ? uv.y : uv.x; float y = MOB > .5 ? uv.x : uv.y;
  float line = (MOB > .5 ? 1. - EDGE : EDGE) + .045 * sin(y * 3.4 + T * .45) + .03 * sin(y * 7.1 - T * .3) + (q.y - .5) * .12;
  float d = (x - line) * (MOB > .5 ? -1. : 1.);
  vec3 col = mix(W, B, smoothstep(-.002, .002, d));
  col = mix(vec3(.02), col, INTRO);
  gl_FragColor = vec4(col, 1.);
}`

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Full-bleed WebGL plasma background. Renders a static CSS gradient when WebGL
 * is unavailable (and in tests); renders a single still frame when the visitor
 * prefers reduced motion; pauses while scrolled out of view or in a hidden tab.
 */
export function Plasma({ edge = 0.46 }) {
  const canvasRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const c = canvasRef.current
    const gl = c && c.getContext('webgl', { antialias: false })
    if (!gl) return

    const reduce = prefersReducedMotion()
    const compile = (type, src) => {
      const s = gl.createShader(type)
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
    }
    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return
    const pr = gl.createProgram()
    gl.attachShader(pr, vs)
    gl.attachShader(pr, fs)
    gl.linkProgram(pr)
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return
    gl.useProgram(pr)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(pr, 'a')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    const U = (name) => gl.getUniformLocation(pr, name)
    const uR = U('R'), uT = U('T'), uMS = U('MS'), uMOB = U('MOB'), uI = U('INTRO'), uE = U('EDGE')

    let mx = 0.5, my = 0.5, sx = 0.5, sy = 0.5
    let visible = true
    let raf = 0
    const t0 = performance.now()

    function size() {
      const d = Math.min(window.devicePixelRatio || 1, 1.5)
      const r = c.getBoundingClientRect()
      c.width = Math.max(1, Math.round(r.width * d * 0.75))
      c.height = Math.max(1, Math.round(r.height * d * 0.75))
      gl.viewport(0, 0, c.width, c.height)
    }
    function draw(now) {
      sx += (mx - sx) * 0.03
      sy += (my - sy) * 0.03
      const intro = reduce ? 1 : Math.min(1, (now - t0) / 1400)
      gl.uniform2f(uR, c.width, c.height)
      gl.uniform1f(uT, reduce ? 12 : (now - t0) / 1000 + 12)
      gl.uniform2f(uMS, sx, sy)
      gl.uniform1f(uMOB, window.innerWidth <= 640 ? 1 : 0)
      gl.uniform1f(uI, 1 - Math.pow(1 - intro, 3))
      gl.uniform1f(uE, edge)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }
    function frame(now) {
      raf = requestAnimationFrame(frame)
      if (!visible || document.hidden) return
      draw(now)
    }
    function onMove(e) {
      const r = c.getBoundingClientRect()
      mx = (e.clientX - r.left) / r.width
      my = 1 - (e.clientY - r.top) / r.height
    }

    size()
    const ro = new ResizeObserver(() => {
      size()
      if (reduce) draw(performance.now())
    })
    ro.observe(c)
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(c)
    setReady(true)

    if (reduce) {
      draw(performance.now())
    } else {
      window.addEventListener('pointermove', onMove)
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      ro.disconnect()
      io.disconnect()
    }
  }, [edge])

  return (
    <div className="plasma" aria-hidden="true">
      {!ready && <div className="plasma-fallback" />}
      <canvas ref={canvasRef} />
      <div className="grain" />
    </div>
  )
}
