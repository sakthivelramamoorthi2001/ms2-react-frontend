/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Josefin Sans, sans-serif'],
        'flow': ['Josefin Sans, sans-serif']
      },
      colors: {
        'blue': '#eff2f9',
        'darkblue': '#002140',
        'white': '#FFFFFF',
        'skyblue': '#87CEEB',
        "yellow": '#fde047',
        'indigo': '#343ecc',
        'grey': '#cbd5e1'
      },
      letterSpacing: {
        normal: '1rem',
        wide: '.0.5 rem',

      }
    },
  },
  plugins: [],
}

// "./src/**/*.{js,jsx,ts,tsx}",