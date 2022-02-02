module.exports = {  
  content: [   
        "./pages/**/*.{js,ts,jsx,tsx}",   
        "./components/**/*.{js,ts,jsx,tsx}",  
        "./section/**/*.{js,ts,jsx,tsx}", 
         ],
  theme: {   
         extend: {},
         }, 
         fontFamily: {
          'headfont': ['stratoslcweb'],
          'font-weight': '600',
           'paragraph' : ['Aldrich'],       
          
         },
         fontSize: {
          xl: ['28px', {
            lineHeight: '28px',
          }],
        },

         rotate: {
              '22': '22deg',
            },
            screens: {
              'sm': '525px',
              // => @media (min-width: 640px) { ... }
        
              'md': '768px',
              // => @media (min-width: 768px) { ... }
        
              'lg': '1024px',
              // => @media (min-width: 1024px) { ... }
        
              'xl': '1280px',
              // => @media (min-width: 1280px) { ... }
        
              '2xl': '1536px',
              // => @media (min-width: 1536px) { ... }
            },
            colors: {
              transparent: 'transparent',
              current: 'currentColor',
              'white': '#ffffff',
              'backgroundblue': '#7b61ff',
              'midnight': '#121063',
              'indigo-900': '#7b61ff',
              'tahiti': '#3ab7bf',
              'silver': '#ecebff',
              'bubble-gum': '#ff77e9',
              'bermuda': '#78dcca',
            }, 
  plugins: [],
}