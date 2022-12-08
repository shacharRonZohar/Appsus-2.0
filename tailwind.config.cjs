/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': {
          100: '#f6f8fc',
          200: 'f2f6fc',
          300: '#eaf1fb',
          400: '#d3e3fd',
        },
        gray: '#dadce0',
      },
      gridTemplateColumns: {
        'main-layout': '68px 1fr',
        'main-rtl': '1fr 68px',
      },
      gridTemplateRows: {
        'main-layout': '62px 1fr',
      },
    },
  },
  plugins: [],
}

// colors:
// main-nav:
//    background - #eaf1fb
//    font - #444746
//    hovers:
//        main menu btn - #dadce0
//        nav link - #dadce0
//     active:
//        main menu btn - #3c40431f
//        nav link - #d3e3fd

