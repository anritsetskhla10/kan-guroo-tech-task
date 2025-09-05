/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',              
    './src/**/*.{js,jsx,ts,tsx}',   
    './components/**/*.{js,jsx}',  
  ],
  theme: {
     extend: {
      keyframes: {
        kangarooMove: {
          '0%': { transform: 'translateX(-100px) translateY(0%)', opacity: '1' },
          '20%': { transform: 'translateX(20vw) translateY(-10%)', opacity: '1' },
          '40%': { transform: 'translateX(40vw) translateY(30%)', opacity: '1' },
          '60%': { transform: 'translateX(60vw) translateY(10%)', opacity: '1' },
          '80%': { transform: 'translateX(80vw) translateY(40%)', opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(0%)', opacity: '0' },
        },
      },
      animation: {
        'kangarooMove': 'kangarooMove 8s linear infinite',
      },
      backgroundImage: {
        'header-gradient-light': 'linear-gradient(135deg, #a5b4ff 0%, #ffe44d 100%)',
        'header-gradient': 'linear-gradient(135deg, #4a6cf7 0%, #ffd700 100%)',
      },
      colors: {
        primary: {
          mintgreen: '#CFFFF9',
          lightest: '#a5b4ff', 
          light: '#6e8eff',   
          DEFAULT: '#4a6cf7', 
          dark: '#3a50c5',     
          darkest: '#2b3a67', 
        },
        secondary: '#2b3a67', 
        accent: '#f3a712',    
        
        'light-bg': '#f5f8ff', 
        'light-gray': '#f0f4f9',

        text: {
          light: '#f5f8ff',    
          main: '#000000',     
          secondary: '#666666',
          lightGray: '#f0f4f9',
          yellow: '#f3a712',
          lightYellow: '#fff8e1',
        },
        
        'border-color': '#e0e0e0',

        success: '#4caf50', 
        error: '#f44336',  
      },
    },
  },
  plugins: [],

}

