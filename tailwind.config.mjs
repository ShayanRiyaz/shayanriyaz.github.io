/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['PT Serif', 'serif'],
        heading: ['PT Sans Narrow', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace']
      },
      colors: {
        primary: '#343434',
        body: '#fff',
        text: '#333332'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
