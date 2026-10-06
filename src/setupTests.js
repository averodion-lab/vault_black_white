import '@testing-library/jest-dom'

// jsdom does not implement matchMedia. Provide a default mock (no reduced-motion
// preference) so components that check `prefers-reduced-motion` don't crash;
// individual tests can override `window.matchMedia` to exercise the other branch.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

// jsdom does not implement canvas rendering contexts and logs a noisy
// "Not implemented" warning for every getContext() call. Components that
// try WebGL and gracefully no-op when it's unavailable (e.g. PlasmaBackground)
// rely on getContext() returning null quietly, not throwing or spamming
// the console — stub it so test output stays pristine.
if (typeof HTMLCanvasElement !== 'undefined') {
  HTMLCanvasElement.prototype.getContext = () => null
}
