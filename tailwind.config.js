/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      pos_color: 'hsl(197, 71%, 43%)',
      pos_black: 'hsl(197, 1%, 07%)',
      pos_white: 'hsl(197, 1%, 100%)',
      placed: 'hsl(211, 91%, 51%)',
      pending: 'hsl(267, 81%, 53%)',
      canceled: 'hsl(217, 13%, 67%)',
      ready: 'hsl(33, 93%, 47%)',
      transit: 'hsl(51, 83%, 49%)',
      delivered: 'hsl(141, 81%, 37%)',
      denied: 'hsl(1, 95%, 53%)',
    },
  },
  plugins: [],
}
