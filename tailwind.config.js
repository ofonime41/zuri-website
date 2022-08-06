/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/img/hero-bg.svg')",
        'left-dot': "url('../public/img/left_bvmv7q.png')",
        'right-dot': "url('../public/img/right_yz6hn3.png')",
        
      }
    },
  },
  plugins: [],
}
