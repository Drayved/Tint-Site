/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/header-img.jpg')",
        'truck-img': "url('../public/images/truck.jpg')",
        'garage': "url('../public/images/garage.jpg')"
      },
    },
  },
  plugins: []
}
