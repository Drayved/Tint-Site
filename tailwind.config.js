/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        'orang-lambo': "url('/images/header-img.jpg')",
        'banner': "url('/images/banner.jpg')",
        'banner1': "url('/images/banner(1).jpg')",
        'garage': "url('/images/garage.jpg')",
        'peach-header': "url('/images/peach-header.jpg')",
        'hero': "url('/images/hero.jpg')"
      },
    },
  },
  plugins: []
}
