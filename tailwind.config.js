/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moka' : '#776B5D',
        'beige' : '#B0A695',
        'sand' : '#EBE3D5',
        'white' : '#F3EEEA',
      },
    },
  },
  // eslint-disable-next-line no-undef
}