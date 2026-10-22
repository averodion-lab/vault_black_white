import { isoIcon, ICON_IDS } from './isoIcons'
import { SERVICES, STEPS, VALUES } from '@/data/site'

it('has an isometric icon for every service, step and value', () => {
  for (const s of [...SERVICES, ...STEPS, ...VALUES]) expect(ICON_IDS).toContain(s.icon)
})

it('builds each icon as three explodable, labelled layers with a finite viewBox', () => {
  for (const id of ICON_IDS) {
    const icon = isoIcon(id)
    expect(icon.markup.match(/class="iso-layer"/g)).toHaveLength(3)
    expect(icon.markup.match(/class="iso-label"/g)).toHaveLength(3)
    expect(icon.markup).not.toMatch(/NaN|undefined/)
    expect(icon.viewBox.split(' ').map(Number).every(Number.isFinite)).toBe(true)
  }
})

it('returns null for an unknown icon', () => {
  expect(isoIcon('nope')).toBeNull()
})

it('can leave out the callouts, cropping the viewBox to the drawing', () => {
  const full = isoIcon('quality')
  const bare = isoIcon('quality', { labels: false })
  expect(bare.markup).not.toMatch(/iso-label/)
  expect(bare.width).toBeLessThan(full.width)
  expect(full.labels).toEqual(['Craft', 'Patience', 'Exceptional'])
})
