module.exports = {
  purge: [
      './src/*.jsx',
      './src/**/*.jsx'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    height: {
      80: '80vh'
    },
    minWidth: {
      'sm': '310px'
    },
    extend: {
        colors: {
          cc_magenta: '#ff5c4b',
          cc_gray: {
            dark: 'rgba(255, 255, 255, 0.05)',
            light: '#717480'
          }
        },
      },
    },
    variants: {},
    plugins: [],
};

