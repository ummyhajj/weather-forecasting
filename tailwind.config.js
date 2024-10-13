/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: { backgroundImage: {
        'weather-bg': "url('/build/images/bg-image.jpg')",},
  },
  plugins: [],
}

}