/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        ink:    '#0c0b0a',
        parch:  '#f5f0e8',
        muted:  '#9a9188',
        gold:   '#c9a96e',
        'gold-light': '#e2c99b',
        surface:'#161412',
        border: '#2a2520',
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'serif'],
        mono:   ['DM Mono', 'monospace'],
        sans:   ['Jost', 'sans-serif'],
      },
    }
  },
  plugins: [],
}