/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  // theme: {
  //   extend: {},
  // },
  theme: {
    container: {
        center: true,
        padding: '2rem',
    },
    screens: {
      // change breakpoints here
        sm: '600px',
        md: '960px',
        lg: '1280px',
        // xl: '1920px',
        xl: '2400px',
    },
    extend: {
        colors: {
            primary: 'var(--primary)',
            'primary-text': 'var(--primary-text)',
        },
        transform: ['top'],
    },
},
  plugins: [],
}

