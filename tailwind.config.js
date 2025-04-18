const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',
        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
      // Add these new utilities
      inset: {
        'arrow-right': '1.5rem', // matches your right-6
      },
    },
  },
  variants: {
    extend: { 
      opacity: ['disabled'],
      // Enable group-hover if needed
      scale: ['group-hover'],
    },
  },
  plugins: ['@tailwindcss/forms'],
};