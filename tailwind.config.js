/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        pos_color: 'hsl(193, 81%, 41%)',
        pos_black: 'hsl(193, 1%, 07%)',
        pos_white: 'hsl(193, 1%, 100%)',
        placed: 'hsl(213, 91%, 51%)',
        pending: 'hsl(267, 81%, 53%)',
        canceled: 'hsl(217, 13%, 67%)',
        ready: 'hsl(33, 93%, 47%)',
        transit: 'hsl(51, 83%, 49%)',
        delivered: 'hsl(141, 81%, 37%)',
        denied: 'hsl(1, 95%, 53%)',
      },
    },
  },
  plugins: [],
}
