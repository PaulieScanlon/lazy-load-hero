module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          default: '#663399',
          primary: '#7026b9',
          secondary: '#ff0d6a',
          tertiary: '#159BF3',
          lowlight: '#004ca3',
          highlight: '#bc027f',
          background: '#12071F'
        }
      },
      gridTemplateColumns: {
        ['auto-1fr']: 'auto 1fr'
      }
    }
  },
  plugins: []
};
