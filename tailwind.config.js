/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'orang-lambo': "url('/images/header-img.jpg')",
        'banner': "url('/images/truck.jpg')",
        'banner1': "url('/images/truck.jpg')",
        'garage': "url('/images/garage.jpg')",
        'peach-header': "url('/images/peach-header.jpg')",
        'hero': "url('/images/hero.jpg')"
      },
    },
  },
  plugins: []
}
