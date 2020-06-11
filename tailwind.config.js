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
    minWidth: {
      'sm': '410px'
    },
    extend: {
        colors: {
          cc_magenta: '#ff5c4b',
          cc_gray: {
            dark: 'rgba(255, 255, 255, 0.05)',
            light: '#717480'
          }
        },
        height: {
            80: '80vh',
            100: '100vh'
        },
        inset: {
          70: '70%',
        },
        zIndex: {
            '-1': '-1',
        },
      },
    },
    variants: {},
    plugins: [],
};

