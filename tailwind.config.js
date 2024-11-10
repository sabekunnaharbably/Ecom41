/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // google font Start
        fontFamily: {
          'dm': ['DM Sans'],
                    
        },
        // google font End  
        // colors Start
        colors: {
          hdBg: '#160C6D',
          hbColor: '#FDBB57',
         
          },
        
       // colors End 
      //  container Start
      maxWidth: {
        'headerContainer': '1320px',
        'banerContainer': '962px',
     
      },

      //  container End

        //  Image Part Start

        backgroundImage: {

          bannerimage: "url('.')",
  
          gallarybanner: "url('./images/logo7.png')",
  
          choosebanner: "url('./images/logo8.png')",
          createbanner: "url('./images/img8.png')",
  
        },
  
        //  Image Part End

         // Witdh Part
         width: {
          logo: '20%',
          menu:'80%',
          catW:'20%',
          searchW:'60%',
          
        },

        // Witdh Part End
     

    },
  },
  plugins: [],
}

