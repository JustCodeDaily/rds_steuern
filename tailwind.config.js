/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef1f7',
          100: '#d5dcea',
          200: '#aab9d5',
          300: '#7e96bf',
          400: '#5373aa',
          500: '#3a5a94',
          600: '#2c4778',
          700: '#1e3260',
          800: '#14213d',
          900: '#0d1628',
        },
        gold: {
          50:  '#fdf8ec',
          100: '#f9eecf',
          200: '#f3dc9f',
          300: '#edca6f',
          400: '#e7b83f',
          500: '#d4a84a',
          600: '#b88c30',
          700: '#9a7022',
          800: '#7c5516',
          900: '#5e3d0d',
        },
        cream: '#fafaf8',
        'warm-gray': '#e8e6e0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0d1628 0%, #14213d 50%, #0d1628 100%)',
        'gold-gradient': 'linear-gradient(90deg, #d4a84a 0%, #e7b83f 100%)',
      },
    },
  },
  plugins: [],
}
