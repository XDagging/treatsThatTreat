/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
      mytheme:{
          
        "primary": "#EAE2B7",
          
        "secondary": "#FFAFCC",
        
        "accent": "#BDEFE",
                 
        "neutral": "#0c070f",
                 
        "base-100": "#fff8ff",
                 
        "info": "#0088ae",
                 
        "success": "#7ef879",
                 
        "warning": "#b96a00",
                 
        "error": "#ff3279",
      }
    }
    ]
  },
  plugins: [require('daisyui')],
}