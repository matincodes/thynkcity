/** @type {import('tailwindcss').Config} */

import tailwindcssAnimate from "tailwindcss-animate";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	fontFamily: {
  		mont: ["Montserrat", "sans-serif"],
  		inter: ["Inter", "sans-serif"]
  	},
  	extend: {
  		colors: {
  			darkGray: '#121212',
        textGray: '#C7C7C7',
        buttonBrown: '#AE752C',
        dark:'#000000',
        semiWhite:'#F5E8D8',
        white:'#FFFFFF',
		borderGray:'#717171',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate , tailwindScrollbar],
  
}