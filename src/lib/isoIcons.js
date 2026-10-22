// Isometric icons for the services and the "How we work" steps. Each object is a
// stack of layers so its row/column can pull it apart on hover. Fills and strokes
// read CSS vars (--top, --left, --right, --line, --screen, --shadow, --label), so
// the container swaps palettes on hover.

const C = Math.cos(Math.PI / 6)
const R2 = Math.SQRT2
const R12 = Math.SQRT1_2
const LIFT = 11 // px each layer rises when exploded
const SCALE = 1.75 // default rendered px per drawing unit, shared so a set matches
const LABEL_PX = 11.5 // callout font size on screen, the same for every icon

const P = (x, y, z) => [(x - y) * C, (x + y) * 0.5 - z]
const pts = (a) => a.map((p) => P(...p).map((v) => v.toFixed(2)).join(',')).join(' ')

const S = (f, w = 1.1) => `style="fill:var(--${f});stroke:var(--line);stroke-width:${w};stroke-linejoin:round"`
const poly = (a, f, w) => `<polygon points="${pts(a)}" ${S(f, w)}/>`
const box = (x, y, z, w, d, h, t = 'top') =>
  poly([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]], 'left') +
  poly([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]], 'right') +
  poly([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], t)
// draw flat artwork onto the top face / front face of a box, in local units
const onTop = (x, y, z, inner) => {
  const [a, b] = P(x, y, z)
  return `<g transform="matrix(${C},0.5,${-C},0.5,${a},${b})">${inner}</g>`
}
const onFront = (x, y, z, inner) => {
  const [a, b] = P(x, y, z)
  return `<g transform="matrix(${C},0.5,0,1,${a},${b})">${inner}</g>`
}
const ln = (d, w = 1.1, extra = '') =>
  `<path d="${d}" style="fill:none;stroke:var(--line);stroke-width:${w};stroke-linecap:round;stroke-linejoin:round" vector-effect="non-scaling-stroke" ${extra}/>`
const dot = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:var(--line)"/>`
const shape = (d, f, w = 1) =>
  `<path d="${d}" style="fill:var(--${f});stroke:var(--line);stroke-width:${w};stroke-linejoin:round" vector-effect="non-scaling-stroke"/>`
const cyl = (cx0, cy0, r, z, h, t, s) => {
  const rx = r * R2 * C
  const ry = r * R12
  const [cx, cyT] = P(cx0, cy0, z + h)
  const cyB = cyT + h
  return (
    `<path d="M${cx - rx},${cyT} L${cx - rx},${cyB} A${rx},${ry} 0 0 0 ${cx + rx},${cyB} L${cx + rx},${cyT} Z" ${S(s)}/>` +
    `<ellipse cx="${cx}" cy="${cyT}" rx="${rx}" ry="${ry}" ${S(t)}/>`
  )
}
const star = (cx, cy, r) => {
  const q = r * 0.13
  return `<path d="M${cx} ${cy - r}C${cx + q} ${cy - q} ${cx + q} ${cy - q} ${cx + r} ${cy}C${cx + q} ${cy + q} ${cx + q} ${cy + q} ${cx} ${cy + r}C${cx - q} ${cy + q} ${cx - q} ${cy + q} ${cx - r} ${cy}C${cx - q} ${cy - q} ${cx - q} ${cy - q} ${cx} ${cy - r}Z" ${S('top', 1)}/>`
}
const footShadow = ([x, y, w, d]) =>
  `<polygon points="${pts([[x + 2, y + 2, 0], [x + w + 2.5, y + 2, 0], [x + w + 2.5, y + d + 2.5, 0], [x + 2, y + d + 2.5, 0]])}" style="fill:var(--shadow)"/>`

const magnifier = (cx, cy, r, z) => {
  const [gx, gy] = P(cx, cy, z + 1.4)
  return (
    cyl(cx, cy, r, z, 1.4, 'top', 'left') +
    `<ellipse cx="${gx}" cy="${gy}" rx="${r * 0.72 * R2 * C}" ry="${r * 0.72 * R12}" style="fill:var(--screen);stroke:var(--line);stroke-width:.9"/>` +
    box(cx + r * 0.85, cy - 0.9, z, r * 1.5, 1.8, 1.4)
  )
}
const rocket = (x, y, z, r = 3.2, len = 12) => {
  const rx = r * R2 * C
  const ry = r * R12
  const [cx, cyT] = P(x, y, z + len)
  const cyB = cyT + len
  const [wx, wy] = P(x + r * R12, y + r * R12, z + len * 0.66)
  const [ex, ey] = P(x, y, z - 1.6)
  const f = r * 0.75
  const fl = r * 1.25
  return (
    `<circle cx="${ex - r * 0.75}" cy="${ey}" r="${r * 0.5}" ${S('top', 0.8)}/><circle cx="${ex + r * 0.7}" cy="${ey + r * 0.2}" r="${r * 0.4}" ${S('top', 0.8)}/><circle cx="${ex}" cy="${ey + r * 0.45}" r="${r * 0.62}" ${S('top', 0.8)}/>` +
    box(x - r - f * 0.5, y - 0.5, z, fl, 1, len * 0.33) + box(x - 0.5, y - r - f * 0.5, z, 1, fl, len * 0.33) +
    `<path d="M${cx - rx},${cyT} L${cx - rx},${cyB} A${rx},${ry} 0 0 0 ${cx + rx},${cyB} L${cx + rx},${cyT} Z" ${S('left')}/>` +
    `<path d="M${cx - rx},${cyT} L${cx},${cyT - r * 2} L${cx + rx},${cyT} A${rx},${ry} 0 0 1 ${cx - rx},${cyT} Z" ${S('top')}/>` +
    `<circle cx="${wx}" cy="${wy}" r="${r * 0.4}" ${S('screen', 0.9)}/>` +
    box(x + r - fl + f * 0.5 + 0.3, y - 0.5, z, fl, 1, len * 0.33) + box(x - 0.5, y + r - fl + f * 0.5 + 0.3, z, 1, fl, len * 0.33)
  )
}
const cursor = (x, y, z) => {
  const [px, py] = P(x, y, z)
  return `<path d="M${px} ${py}l0 9l2.4 -2.3l2 4.1l1.6 -.8l-2 -3.9l3.4 -.2z" ${S('top', 0.9)}/>`
}

const SHIELD = 'M12 0L24 4.5V13.5C24 21.5 18.8 27.6 12 30.8C5.2 27.6 0 21.5 0 13.5V4.5Z'

// bounds of the assembled drawing, measured once in the browser: [x, y, w, h]
const ICONS = {
  web: {
    labels: [['Framework', [30, 0, 1.5]], ['Layout', [28, 2, 5.6]], ['Code', [22, 6, 10.3]]],
    bounds: [-21.22, -4.2, 47.63, 33.7],
    shadow: () => footShadow([0, 0, 30, 24]),
    layers: [
      () => box(0, 0, 0, 30, 24, 3) + onTop(0, 0, 3, ln('M6 0V24M12 0V24M18 0V24M24 0V24M0 8H30M0 16H30', 0.6, 'opacity=".35"')),
      () => box(2, 2, 5, 26, 20, 1.2) + onTop(2, 2, 6.2, ln('M0 4H26') + dot(2, 2, 0.8) + dot(4.4, 2, 0.8) + ln('M3 8H12V16H3Z', 0.9) + ln('M15 9H23M15 12H23M15 15H19', 0.9)),
      () => box(8, 6, 9.5, 14, 10, 1.6) + onTop(8, 6, 11.1, ln('M5 2.5L2.5 5L5 7.5M9 2.5L11.5 5L9 7.5M7.8 2L6.2 8', 1.4)),
    ],
  },
  ai: {
    labels: [['Board', [28, 0, 1]], ['Model', [21, 7, 5.5]], ['Automation', [21.07, 6.93, 15]]],
    bounds: [-29.01, -13.5, 58.02, 46.5],
    shadow: () => footShadow([-2.5, -2.5, 33, 33]),
    layers: [
      () => {
        let s = ''
        for (let i = 0; i < 5; i++) s += box(3 + i * 5, -2.5, 0.4, 2, 2.5, 1.2) + box(-2.5, 3 + i * 5, 0.4, 2.5, 2, 1.2)
        s += box(0, 0, 0, 28, 28, 2) + onTop(0, 0, 2, ln('M3 6H9L11 8M3 22H8L10 20M25 6H19L17 8M25 22H20L18 20M14 2V7M14 26V21', 0.8, 'opacity=".6"'))
        for (let i = 0; i < 5; i++) s += box(3 + i * 5, 28, 0.4, 2, 2.5, 1.2) + box(28, 3 + i * 5, 0.4, 2.5, 2, 1.2)
        return s
      },
      () =>
        box(7, 7, 4, 14, 14, 3) +
        onTop(7, 7, 7, ln('M2.5 2.5H11.5V11.5H2.5Z', 0.8) + '<path d="M7 3.6c.3 2.2 1.2 3.1 3.4 3.4-2.2.3-3.1 1.2-3.4 3.4-.3-2.2-1.2-3.1-3.4-3.4 2.2-.3 3.1-1.2 3.4-3.4z" style="fill:var(--line)"/>'),
      () => {
        const [cx, cy] = P(14, 14, 15)
        return (
          `<ellipse cx="${cx}" cy="${cy}" rx="${10 * R2 * C}" ry="${10 * R12}" style="fill:none;stroke:var(--line);stroke-width:.8;stroke-dasharray:1.6 1.8"/>` +
          star(cx, cy - 6, 6.5) +
          dot(cx + 10 * R2 * C, cy, 1.3)
        )
      },
    ],
  },
  app: {
    labels: [['Device', [17, 0, 1.2]], ['Screen', [15.8, 1.2, 3.9]], ['Features', [13, 17.6, 8.5]]],
    bounds: [-26.41, -3, 41.57, 29],
    shadow: () => footShadow([0, 0, 17, 30]),
    layers: [
      () => box(0, 0, 0, 17, 30, 2.4),
      () => {
        let t = ln('M5.3 2H9.3') + ln('M5.3 25.4H9.3')
        for (let c = 0; c < 2; c++) {
          for (let r = 0; r < 3; r++) {
            const x = 2.4 + c * 5.2
            const y = 6 + r * 5.2
            // the empty slot is where the floating tile came from
            t += c === 1 && r === 2
              ? ln(`M${x} ${y}h4.2v4.2h-4.2z`, 0.8, 'stroke-dasharray="1 1"')
              : `<rect x="${x}" y="${y}" width="4.2" height="4.2" rx="1" style="fill:none;stroke:var(--line);stroke-width:.9" vector-effect="non-scaling-stroke"/>`
          }
        }
        return box(1.2, 1.2, 3.6, 14.6, 27.6, 0.6, 'screen') + onTop(1.2, 1.2, 4.2, t)
      },
      () => box(8.8, 17.6, 7, 4.2, 4.2, 3) + onTop(8.8, 17.6, 10, dot(2.1, 2.1, 0.9)),
    ],
  },
  software: {
    labels: [['Data', [28, 0, 1.2]], ['Logic', [28, 0, 8.2]], ['Dashboard', [28, 0, 15.2]]],
    bounds: [-24.68, -16.4, 49.36, 46.9],
    shadow: () => footShadow([0, 0, 28, 28]),
    layers: [
      () => box(0, 0, 0, 28, 28, 2.4) + onTop(0, 0, 2.4, ln('M5 5H23V23H5Z M11 5V23M17 5V23M5 11H23M5 17H23', 0.7, 'opacity=".7"')),
      () => box(0, 0, 7, 28, 28, 2.4) + onTop(0, 0, 9.4, ln('M5 7H20M5 12H23M5 17H15M5 22H19', 1) + dot(22.5, 7, 1) + dot(18, 17, 1)),
      () =>
        box(0, 0, 14, 28, 28, 2.4) +
        onTop(0, 0, 16.4, ln('M5 5H12M5 9H9', 1.1)) +
        box(5, 17, 16.4, 3.5, 3.5, 4) +
        box(11, 17, 16.4, 3.5, 3.5, 9) +
        box(17, 17, 16.4, 3.5, 3.5, 6.5),
    ],
  },
  marketing: {
    labels: [['Reach', [15 * R12, -15 * R12, 1.5]], ['Traffic', [10.5 * R12, -10.5 * R12, 4.5]], ['Leads', [6 * R12, -6 * R12, 7.5]]],
    bounds: [-18.37, -38.5, 45.89, 51.11],
    shadow: () => {
      const [cx, cy] = P(2, 2, 0)
      return `<ellipse cx="${cx}" cy="${cy}" rx="${15 * R2 * C}" ry="${15 * R12}" style="fill:var(--shadow)"/>`
    },
    layers: [
      () => cyl(0, 0, 15, 0, 3, 'top', 'left'),
      () => cyl(0, 0, 10.5, 3, 3, 'line', 'right'),
      () => {
        const [ax, ay] = P(0, 0, 11)
        const [bx, by] = P(4, -22, 24)
        return (
          cyl(0, 0, 6, 6, 3, 'top', 'left') +
          cyl(0, 0, 2.4, 9, 2, 'line', 'right') +
          `<path d="M${ax} ${ay}L${bx} ${by}" style="stroke:var(--line);stroke-width:1.6;stroke-linecap:round"/>` +
          `<path d="M${bx} ${by}l1 -5.5l4 3.2z M${bx - 2.2} ${by + 2.4}l1 -5.5l4 3.2z" ${S('top', 1)}/>`
        )
      },
    ],
  },
  support: {
    labels: [['Backups', [26, 0, 1.1]], ['Security', [25, 14.5, 20]], ['Updates', [33.8, 13.2, 25]]],
    bounds: [-22.95, -28.5, 45.9, 57],
    shadow: () => footShadow([0, 0, 26, 26]),
    layers: [
      () => box(0, 0, 0, 26, 26, 2.2) + onTop(0, 0, 2.2, ln('M4 4H11M4 7H11M4 10H8', 0.8) + dot(20, 5, 0.9) + dot(22.5, 5, 0.9)),
      () => {
        let s = ''
        for (let d = 10; d <= 14; d += 0.5) s += onFront(1, d, 34, shape(SHIELD, 'right', d === 10 ? 1.1 : 0))
        return (
          s +
          onFront(
            1,
            14.5,
            34,
            shape(SHIELD, 'top', 1.15) +
              '<path d="M12 3.6L21 7V13.6C21 19.6 17.2 24.3 12 27C6.8 24.3 3 19.6 3 13.6V7Z" style="fill:none;stroke:var(--line);stroke-width:.8;opacity:.55" vector-effect="non-scaling-stroke"/>' +
              ln('M7 14.5L10.6 18L17.4 10.8', 1.8),
          )
        )
      },
      () => cyl(31, 16, 4, 24, 2, 'top', 'left') + onTop(27, 12, 26, ln('M2.6 4.3L3.8 5.5L5.8 3.2', 1.3)),
    ],
  },
  // ---- How we work: the tools of each step ----
  analyze: {
    scale: 3,
    labelPx: 13,
    labels: [['Market', [24, 0, 0.7]], ['Data', [22, 6, 6.3]], ['Insight', [16 + 5 * R12, 18 - 5 * R12, 12]]],
    bounds: [-26.41, -7.4, 47.63, 36.9],
    shadow: () => footShadow([0, 0, 24, 30]),
    layers: [
      // clipboard with a report
      () =>
        box(0, 0, 0, 24, 30, 1.4) + box(8, -1.5, 1.4, 8, 4, 1.6) +
        onTop(2, 4, 1.4, '<rect width="20" height="24" style="fill:var(--screen);stroke:var(--line);stroke-width:.8" vector-effect="non-scaling-stroke"/>' + ln('M3 4H13M3 7H17M3 10H11', 0.8) + ln('M4 21V17M8 21V14M12 21V16M16 21V12', 1.4)),
      // data sheet with a pie chart
      () =>
        box(4, 6, 6, 18, 20, 0.5) +
        onTop(4, 6, 6.5, '<circle cx="9" cy="8" r="5" style="fill:none;stroke:var(--line);stroke-width:.9" vector-effect="non-scaling-stroke"/><path d="M9 8V3A5 5 0 0 1 13.5 10.3Z" style="fill:var(--line)"/>' + ln('M3 15.5H15M3 18H11', 0.8)),
      () => {
        const [sx, sy] = P(16, 18, 21)
        return magnifier(16, 18, 5, 11) + star(sx, sy, 3.4)
      },
    ],
  },
  design: {
    scale: 3,
    labelPx: 13,
    labels: [['Wireframe', [32, 0, 0.8]], ['Type & color', [26, 4, 7.5]], ['Interface', [27, 13, 16]]],
    bounds: [-19.49, -9.25, 47.64, 38.75],
    shadow: () => footShadow([0, 0, 32, 22]),
    layers: [
      // drawing tablet with a bezier curve
      () =>
        box(0, 0, 0, 32, 22, 1.6) +
        onTop(0, 0, 1.6, '<rect x="2" y="2" width="28" height="18" rx="1" style="fill:var(--screen);stroke:var(--line);stroke-width:.8" vector-effect="non-scaling-stroke"/>' +
          ln('M5 15C10 4 18 18 26 6', 1.1) + ln('M5 15L9 9M26 6L22 12', 0.6, 'opacity=".7"') +
          [[5, 15], [26, 6], [9, 9], [22, 12]].map(([x, y], i) => `<rect x="${x - 1}" y="${y - 1}" width="2" height="2" style="fill:var(--${i < 2 ? 'top' : 'line'});stroke:var(--line);stroke-width:.6" vector-effect="non-scaling-stroke"/>`).join('')),
      // paint palette
      () => {
        const pal = 'M10 0C16 0 20 3 20 7C20 11 16 14 11 14C9 14 9 11 7 11C4 11 0 12 0 7C0 3 4 0 10 0Z'
        return (
          [0, 0.4, 0.8].map((d) => onTop(6, 4, 6 + d, shape(pal, d < 0.8 ? 'right' : 'top', d < 0.8 ? 0 : 1))).join('') +
          onTop(6, 4, 6.8, '<circle cx="5" cy="7.5" r="1.6" style="fill:var(--right);stroke:var(--line);stroke-width:.8" vector-effect="non-scaling-stroke"/>' +
            [[9, 3.5, 'line'], [14, 4, 'left'], [16.5, 8, 'right'], [12, 10.5, 'screen']].map(([x, y, f]) => `<circle cx="${x}" cy="${y}" r="1.8" style="fill:var(--${f});stroke:var(--line);stroke-width:.8" vector-effect="non-scaling-stroke"/>`).join(''))
        )
      },
      // stylus and cursor
      () =>
        box(4, 11.5, 14, 23, 3, 3) +
        poly([[27, 11.5, 17], [31.5, 13, 15.5], [27, 14.5, 17]], 'top', 1) +
        poly([[27, 14.5, 14], [31.5, 13, 15.5], [27, 14.5, 17]], 'left', 1) +
        box(8, 11.5, 14, 2.4, 3, 3, 'line') +
        cursor(14, 6, 15),
    ],
  },
  implement: {
    scale: 3,
    labelPx: 13,
    labels: [['Code', [30, 0, 0.8]], ['Testing', [30, -1.4, 12]], ['Launch', [26 + 2.4 * R12, 4 - 2.4 * R12, 30]]],
    bounds: [-17.75, -21.9, 44.94, 49.4],
    shadow: () => footShadow([0, 0, 30, 20]),
    layers: [
      // laptop base and keyboard
      () => {
        let k = ''
        for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) k += `<rect x="${3 + c * 2.45}" y="${2.5 + r * 2.4}" width="1.9" height="1.8" rx=".3" style="fill:none;stroke:var(--line);stroke-width:.5" vector-effect="non-scaling-stroke"/>`
        return box(0, 0, 0, 30, 20, 1.6) + onTop(0, 0, 1.6, k + '<rect x="10" y="13.2" width="10" height="5" rx=".6" style="fill:none;stroke:var(--line);stroke-width:.7" vector-effect="non-scaling-stroke"/>')
      },
      // screen with code and passing tests
      () =>
        box(0, -1.4, 2.2, 30, 1.4, 19) +
        onFront(0, 0, 21.2, '<rect x="1.4" y="1.4" width="27.2" height="16.2" rx=".6" style="fill:var(--screen);stroke:var(--line);stroke-width:.8" vector-effect="non-scaling-stroke"/>' +
          ln('M4 4H11M5.5 6.5H15M5.5 9H12M4 11.5H9', 0.8) +
          [0, 1, 2].map((r) => ln(`M18 ${4 + r * 3}L19.1 ${5.1 + r * 3}L21 ${2.9 + r * 3}`, 1.1) + ln(`M22.5 ${4 + r * 3}H26`, 0.7)).join('')),
      () => rocket(26, 4, 22, 2.4, 8),
    ],
  },
  // ---- Our values ----
  honesty: {
    scale: 3,
    labelPx: 12,
    labels: [['Clear scope', [26, 0, 1]], ['Fair pricing', [24, 13, 18.6]], ['Straight talk', [24, 12, 32]]],
    bounds: [-22.95, -26, 45.9, 54.5],
    shadow: () => footShadow([0, 0, 26, 26]),
    layers: [
      // the agreed scope, written down
      () => box(0, 0, 0, 26, 26, 2) + onTop(3, 3, 2, ln('M2 2H12M2 5H16M2 8H10M2 11H14', 0.8) + ln('M14 16L16 18L20 13', 1.2)),
      // a level balance
      () => {
        const pan = (x) => {
          const [a, b] = P(x, 13, 18.6)
          const [c, d] = P(x, 13, 12.4)
          return `<path d="M${a} ${b}L${c - 3.2} ${d}M${a} ${b}L${c + 3.2} ${d}" style="fill:none;stroke:var(--line);stroke-width:.7"/>` + cyl(x, 13, 4, 11.4, 1, 'top', 'left')
        }
        return box(11, 11, 2, 4, 4, 1.6) + box(12.2, 12.2, 3.6, 1.6, 1.6, 14.6) + box(2, 12.4, 18.2, 22, 1.2, 1.2) + cyl(13, 13, 1.5, 18.2, 1.6, 'top', 'right') + pan(3) + pan(23)
      },
      // a speech bubble, said plainly
      () => onFront(8, 12, 36, shape('M1 0H15Q16 0 16 1V8Q16 9 15 9H6L3 12V9H1Q0 9 0 8V1Q0 0 1 0Z', 'top', 1) + ln('M3 3H13M3 6H10', 0.8)),
    ],
  },
  // time taken on purpose
  quality: {
    scale: 3,
    labelPx: 12,
    labels: [['Craft', [26, 0, 1]], ['Patience', [13 + 6.5 * R12, 13 - 6.5 * R12, 6]], ['Exceptional', [13 + 8 * R12, 13 - 8 * R12, 28]]],
    bounds: [-22.95, -20.07, 45.9, 48.57],
    shadow: () => footShadow([0, 0, 26, 26]),
    layers: [
      () => box(0, 0, 0, 26, 26, 2) + onTop(0, 0, 2, ln('M3 3H23V23H3Z', 0.6, 'stroke-dasharray="1 1.4"')),
      // lower bulb on its cap, with the sand that has already fallen
      () => {
        const [x0, yb] = P(13, 13, 4.5)
        const [, yn] = P(13, 13, 15.5)
        const w = 6.5 * R2 * C
        const k = 0.9
        return (
          cyl(13, 13, 8, 2, 2.5, 'top', 'left') +
          `<path d="M${x0 - w} ${yb}C${x0 - w} ${yn + 2} ${x0 - k} ${yn + 2.6} ${x0 - k} ${yn}H${x0 + k}C${x0 + k} ${yn + 2.6} ${x0 + w} ${yn + 2} ${x0 + w} ${yb}Z" ${S('screen', 0.9)}/>` +
          `<path d="M${x0 - w + 0.5} ${yb}C${x0 - w + 0.8} ${yb - 3.4} ${x0 - 2} ${yb - 5.6} ${x0} ${yb - 5.8}C${x0 + 2} ${yb - 5.6} ${x0 + w - 0.8} ${yb - 3.4} ${x0 + w - 0.5} ${yb}Z" style="fill:var(--right);stroke:var(--line);stroke-width:.7"/>` +
          `<path d="M${x0} ${yn}V${yb - 5.8}" style="fill:none;stroke:var(--line);stroke-width:.7;stroke-dasharray:.7 .9"/>` +
          `<path d="M${x0 - w + 1.6} ${yb - 7}Q${x0 - w + 2} ${yb - 9.5} ${x0 - 2.8} ${yn + 2.4}" style="fill:none;stroke:var(--line);stroke-width:.5;opacity:.5"/>`
        )
      },
      // upper bulb with the sand still to fall, under its cap
      () => {
        const [x0, yt] = P(13, 13, 26.5)
        const [, yn] = P(13, 13, 15.5)
        const w = 6.5 * R2 * C
        const k = 0.9
        return (
          `<path d="M${x0 - w} ${yt}C${x0 - w} ${yn - 2} ${x0 - k} ${yn - 2.6} ${x0 - k} ${yn}H${x0 + k}C${x0 + k} ${yn - 2.6} ${x0 + w} ${yn - 2} ${x0 + w} ${yt}Z" ${S('screen', 0.9)}/>` +
          `<path d="M${x0 - 4.6} ${yn - 4.4}Q${x0} ${yn - 5.6} ${x0 + 4.6} ${yn - 4.4}C${x0 + 2.4} ${yn - 2.2} ${x0 + k} ${yn - 1.2} ${x0 + k * 0.6} ${yn}H${x0 - k * 0.6}C${x0 - k} ${yn - 1.2} ${x0 - 2.4} ${yn - 2.2} ${x0 - 4.6} ${yn - 4.4}Z" style="fill:var(--right);stroke:var(--line);stroke-width:.7"/>` +
          cyl(13, 13, 8, 26.5, 2.5, 'top', 'left')
        )
      },
    ],
  },
  local: {
    scale: 3,
    labelPx: 12,
    labels: [['Georgia', [26, 0, 1]], ['Main Street', [23, 5, 9]], ['Your business', [13, 13, 24]]],
    bounds: [-22.95, -16.5, 45.9, 45],
    shadow: () => footShadow([0, 0, 26, 26]),
    layers: [
      // the town grid
      () => box(0, 0, 0, 26, 26, 2) + onTop(0, 0, 2, ln('M0 10H26M0 18H26M9 0V26M17 0V26', 0.6, 'stroke-dasharray="1.6 1.2"')),
      // a row of houses and a tree
      () => {
        const house = (x, y, w, d, h, rh) =>
          box(x, y, 2, w, d, h) +
          poly([[x, y, 2 + h], [x + w, y, 2 + h], [x + w, y + d / 2, 2 + h + rh], [x, y + d / 2, 2 + h + rh]], 'left', 1) +
          poly([[x, y + d, 2 + h], [x + w, y + d, 2 + h], [x + w, y + d / 2, 2 + h + rh], [x, y + d / 2, 2 + h + rh]], 'top', 1) +
          poly([[x + w, y, 2 + h], [x + w, y + d, 2 + h], [x + w, y + d / 2, 2 + h + rh]], 'right', 1) +
          onFront(x, y + d, 2 + h, `<rect x="${w / 2 - 1}" y="${h - 3}" width="2" height="3" style="fill:var(--line)"/>`)
        const [tx, ty] = P(22, 22, 9)
        return house(1, 1, 6, 6, 5, 3) + house(10, 1, 6, 6, 7, 3) + house(19, 1, 6, 6, 4, 3) + house(1, 11, 6, 6, 4, 2.6) +
          box(21.4, 21.4, 2, 1.2, 1.2, 4) + `<ellipse cx="${tx}" cy="${ty}" rx="3.2" ry="3.6" ${S('left', 1)}/>`
      },
      // the pin on your business
      () => {
        const [x, y] = P(13, 13, 14)
        const pin = (dx, f) => `<path d="M${x + dx} ${y}C${x + dx - 2} ${y - 4} ${x + dx - 5.5} ${y - 6} ${x + dx - 5.5} ${y - 10}A5.5 5.5 0 0 1 ${x + dx + 5.5} ${y - 10}C${x + dx + 5.5} ${y - 6} ${x + dx + 2} ${y - 4} ${x + dx} ${y}Z" ${S(f, 1)}/>`
        return pin(1.2, 'right') + pin(0, 'top') + `<circle cx="${x}" cy="${y - 10}" r="2.2" ${S('screen', 0.9)}/>`
      },
    ],
  },
  purpose: {
    scale: 3,
    labelPx: 12,
    labels: [['Real problems', [26, 0, 1]], ['Right tech', [20, 7, 4.4]], ['Measurable', [13 + 6 * R12, 13 - 6 * R12, 13]]],
    bounds: [-22.95, -11.6, 45.9, 40.1],
    shadow: () => footShadow([0, 0, 26, 26]),
    layers: [
      // circuit board
      () => box(0, 0, 0, 26, 26, 2) + onTop(0, 0, 2, ln('M2 6H7L9 8M2 20H6L8 18M24 6H19L17 8M24 20H19L17 18M13 2V6M13 24V20', 0.8) + dot(2, 6, 0.8) + dot(2, 20, 0.8) + dot(24, 6, 0.8) + dot(24, 20, 0.8) + dot(13, 2, 0.8) + dot(13, 24, 0.8)),
      // the chip
      () => box(7, 7, 2, 12, 12, 2.4) + onFront(7, 19, 4.4, [...Array(5)].map((_, i) => `<rect x="${1.4 + i * 2.2}" y="0.6" width="1" height="1.6" style="fill:var(--line)"/>`).join('')) + onTop(7, 7, 4.4, ln('M3 3H9V9H3Z', 0.8) + dot(4.4, 4.4, 0.7)),
      // a target, hit
      () => {
        const [cx, cy] = P(13, 13, 12.2)
        const [ax, ay] = P(19, 7, 22)
        return cyl(13, 13, 6, 11, 1.2, 'top', 'left') +
          onTop(13, 13, 12.2, '<circle r="4" style="fill:none;stroke:var(--line);stroke-width:.8" vector-effect="non-scaling-stroke"/><circle r="2" style="fill:var(--line)"/>') +
          `<path d="M${cx} ${cy}L${ax} ${ay}" style="fill:none;stroke:var(--line);stroke-width:1.1;stroke-linecap:round"/>` +
          `<path d="M${ax} ${ay}l-2.6 -.4l1.4 -2.2z M${ax - 1.6} ${ay + 1.4}l-2.6 -.4l1.4 -2.2z" ${S('top', 0.8)}/>`
      },
    ],
  },
  partnership: {
    scale: 3,
    labelPx: 12,
    labels: [['Foundation', [28, 0, 1]], ['You & us', [28, 8, 14]], ['Built to last', [17, 9, 26]]],
    bounds: [-17.75, -15.6, 42.43, 42.1],
    shadow: () => footShadow([0, 0, 28, 20]),
    layers: [
      () => box(0, 0, 0, 28, 20, 2) + onTop(0, 0, 2, ln('M3 3H25V17H3Z', 0.6, 'stroke-dasharray="1 1.4"')),
      // two towers, side by side
      () => box(2, 6, 2, 8, 8, 12) + box(18, 6, 2, 8, 8, 12) + onFront(2, 14, 14, ln('M2 3H6M2 6H6M2 9H6', 0.8)) + onFront(18, 14, 14, ln('M2 3H6M2 6H6M2 9H6', 0.8)),
      // the bridge between them
      () => {
        const [sx, sy] = P(14, 10, 25)
        return box(4, 8, 16, 20, 4, 1.6) + onFront(4, 12, 17.6, ln('M2 0.8V-3M6 0.8V-4.4M10 0.8V-5M14 0.8V-4.4M18 0.8V-3', 0.7) + ln('M0 -2C5 -6 15 -6 20 -2', 0.9)) + star(sx, sy, 2.6)
      },
    ],
  },
  results: {
    scale: 3,
    labelPx: 12,
    labels: [['Baseline', [26, 0, 1]], ['Growth', [24, 14, 16]], ['Results', [26, 12, 28]]],
    bounds: [-19.49, -21.5, 42.44, 48],
    shadow: () => footShadow([0, 0, 26, 22]),
    layers: [
      () => box(0, 0, 0, 26, 22, 2) + onTop(0, 0, 2, ln('M0 7H26M0 14H26', 0.5, 'opacity=".5"') + ln('M3 19H23', 0.9)),
      // bars, rising
      () => [0, 1, 2, 3].map((i) => box(2 + i * 6, 10, 2, 4, 4, 3 + i * 3.6)).join('') + onTop(20, 10, 15.8, ln('M1 1H3V3H1Z', 0.6)),
      // the trend, up and to the right
      () => onFront(1, 12, 30, shape('M0 14.6L8 7.6L13 10L19.6 3.9L17.6 2H25V9.4L23 7.4L13.6 15.6L8.6 13.2L2.4 17.6Z', 'top', 1)),
    ],
  },
}

export const ICON_IDS = Object.keys(ICONS)

// Returns { markup, viewBox, width, height, labels } for an icon, with headroom above the
// assembled drawing and room on the right for callouts, so exploding never clips.
export function isoIcon(id, { labels = true } = {}) {
  const icon = ICONS[id]
  if (!icon) return null
  const n = icon.layers.length
  const head = (n - 1) * LIFT + 3
  const pad = 2
  const scale = icon.scale || SCALE
  const [bx, by, bw, bh] = icon.bounds
  const right = bx + bw
  const size = (icon.labelPx || LABEL_PX) / scale // in drawing units, so text renders at the same px
  const char = size * 0.667 // approx. mono advance incl. tracking
  // callouts sit to the right of the drawing and travel with their layer
  const callout = ([text, a], i) => {
    const [ax, ay] = P(...a)
    return (
      `<g class="iso-label"><path d="M${ax.toFixed(2)} ${ay.toFixed(2)}H${(right + 5).toFixed(2)}" style="fill:none;stroke:var(--label, var(--line));stroke-width:.55;stroke-dasharray:1 1.4"/>` +
      `<circle cx="${ax.toFixed(2)}" cy="${ay.toFixed(2)}" r=".9" style="fill:var(--label, var(--line))"/>` +
      `<text x="${(right + 7).toFixed(2)}" y="${(ay + size * 0.36).toFixed(2)}" style="fill:var(--label, var(--line));font-size:${size.toFixed(2)}px">0${i + 1} ${text}</text></g>`
    )
  }
  const longest = Math.max(...icon.labels.map(([t]) => t.length + 3))
  const x = bx - pad
  const y = by - pad - head
  const w = (labels ? right + 7 + longest * char : right) + pad - x
  const h = bh + pad * 2 + head
  const layers = icon.layers
    .map((draw, i) => `<g class="iso-layer" style="--i:${i}"><g${i === n - 1 ? ' class="iso-float"' : ''}>${draw()}${labels ? callout(icon.labels[i], i) : ''}</g></g>`)
    .join('')
  return {
    markup: `<g>${icon.shadow()}${layers}</g>`,
    viewBox: `${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}`,
    width: Math.round(w * scale),
    height: Math.round(h * scale),
    labels: icon.labels.map(([t]) => t),
  }
}
