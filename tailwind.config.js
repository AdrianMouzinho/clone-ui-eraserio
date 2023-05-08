/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    screens: {
      md: '750px',
      lg: '900px',
    },
    extend: {
      boxShadow: {
        '3xl': '0 54px 134px rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [],
}
