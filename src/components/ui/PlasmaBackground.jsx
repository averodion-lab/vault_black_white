import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const VERTEX_SRC = `
  attribute vec2 a_position;
  void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`

const FRAGMENT_SRC = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a, b, u.x) + (c - a)*u.y*(1.0-u.x) + (d - b)*u.x*u.y;
  }
  float fbm(vec2 st) {
    float value = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amp * noise(st);
      st *= 2.0;
      amp *= 0.5;
    }
    return value;
  }
  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;
    vec2 q = vec2(fbm(st + u_time*0.05), fbm(st + vec2(5.2,1.3) + u_time*0.035));
    vec2 r = vec2(fbm(st + q + vec2(1.7,9.2) + u_time*0.025), fbm(st + q + vec2(8.3,2.8) + u_time*0.018));
    float f = fbm(st + r);

    vec3 base = vec3(0.027, 0.027, 0.047);
    vec3 c1 = vec3(0.486, 0.612, 1.0);
    vec3 c2 = vec3(1.0, 0.549, 0.878);
    vec3 c3 = vec3(0.486, 0.961, 1.0);

    vec3 color = mix(base, c1, clamp(f*1.4,0.0,1.0));
    color = mix(color, c2, clamp(pow(r.x,2.0),0.0,1.0)*0.6);
    color = mix(color, c3, clamp(pow(r.y,3.0),0.0,1.0)*0.5);
    color = mix(base, color, 0.74);

    gl_FragColor = vec4(color, 1.0);
  }
`

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function compileShader(gl, type, src) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

/**
 * A real GPU fragment shader — domain-warped fractal noise flowing in the
 * brand palette. Raw WebGL, no libraries. Skips setup entirely (renders
 * nothing, transparent) when WebGL is unavailable or the user prefers
 * reduced motion. Pauses its render loop via IntersectionObserver whenever
 * scrolled out of view, and via the Page Visibility API whenever the tab
 * itself is hidden (background tab, minimized window) — matters most when
 * this is rendered `fixed` behind an entire page, since a fixed element
 * never leaves the viewport on its own.
 */
export function PlasmaBackground({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || prefersReducedMotion()) return

    const gl = canvas.getContext('webgl')
    if (!gl) return

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC)
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC)
    if (!vs || !fs) return

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const posLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, 'u_resolution')
    const uTime = gl.getUniformLocation(program, 'u_time')

    let raf = null
    let running = true

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.round(rect.width * dpr))
      canvas.height = Math.max(1, Math.round(rect.height * dpr))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    function frame(ts) {
      if (!running) return
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform1f(uTime, ts * 0.0015)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(frame)
    }

    let isIntersecting = true

    function syncRunning() {
      running = isIntersecting && document.visibilityState === 'visible'
      if (running && raf === null) raf = requestAnimationFrame(frame)
    }

    const observer =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver(
            ([entry]) => {
              isIntersecting = entry.isIntersecting
              syncRunning()
            },
            { threshold: 0 }
          )
    observer?.observe(canvas)

    document.addEventListener('visibilitychange', syncRunning)

    raf = requestAnimationFrame(frame)

    return () => {
      running = false
      if (raf !== null) cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', syncRunning)
      observer?.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={cn('block', className)} />
}
