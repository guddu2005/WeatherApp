/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx ,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sunny-day': "url('https://gifdb.com/images/high/animated-sunny-day-sun-shining-blue-sky-pmmi9f63tshlbmxu.gif')",
        'cloudy-day': "url('https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif')",
        'cold-cloudy-day': "url('https://cdn.pixabay.com/animation/2023/01/30/00/43/00-43-04-563_512.gif')",
      },
    },
  },
  plugins: [],
}

