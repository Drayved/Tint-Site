/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'orang-lambo': "url('../public/images/header-img.jpg')",
        'truck-img': "url('../public/images/truck.jpg')",
        'garage': "url('../public/images/garage.jpg')",
        'peach-header': "url('../public/images/peach-header.jpg')"
      },
    },
  },
  plugins: []
}
