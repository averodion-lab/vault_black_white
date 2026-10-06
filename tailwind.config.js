/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#07070c',
        'base-glow': '#16182b',
        'glass-border1': '#7c9cff',
        'glass-border2': '#ff8ce0',
        'glass-border3': '#7cf5ff',
        ink: '#eef0ff',
        muted: '#d6dbf5',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
