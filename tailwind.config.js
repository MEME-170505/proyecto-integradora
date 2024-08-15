/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'color-1':"FFC15E",
      'color-2':"F7B05B",
      'color-3':"F7934C",
      'color-4':"CC5803",
      'color-5':"1F1300",
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    
  ],
}
