/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'orang-lambo': "url('/images/header-img.jpg')",
        'truck-img': "url('/images/truck.jpg')",
        'garage': "url('/images/garage.jpg')",
        'peach-header': "url('/images/peach-header.jpg')"
      },
    },
  },
  plugins: []
}
