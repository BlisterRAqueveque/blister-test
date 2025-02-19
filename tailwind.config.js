/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        grenadier: {
          50: '#fff5ec',
          100: '#ffe9d2',
          200: '#ffcfa4',
          300: '#ffac6b',
          400: '#ff7e2f',
          500: '#ff5907',
          600: '#f93c00',
          700: '#dd2c00',
          800: '#a32209',
          900: '#831f0b',
          950: '#470c03',
        },
      },
    },
  },
  plugins: [],
};
