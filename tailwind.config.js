module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7026b9',
          secondary: '#FF0D6A',
          tertiary: '#159BF3',
          lowlight: '#004CA3',
          highlight: '#BC027F',
          background: '#12071F'
        }
      },
      maxWidth: {
        section: '750px'
      }
    }
  },
  plugins: []
};
