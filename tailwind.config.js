/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver' : '#F5F7FA',
        'neutralDGrey' : '#4D4D4D',
        'brandPrimary' : '#4CAF4F',
        'neutralGrey' : '#717171',
        'gray900' : '#18191F'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

