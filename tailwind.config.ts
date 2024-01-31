/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      borderRadius: {
        none: '0',
        DEFAULT: '5px',
        md: '10px',
        lg: '100px'
      },
      colors: {
        transparent: 'transparent',
        primary: '#aa8df6',
        gray: {
          100: '#fffcf9',
          200: '#f5f5f5',
          300: '#d9d9d9',
          400: '#b2b4b6',
          500: '#9d9d9d'
        },
        white: '#fff',
        black: '#000',
        rde: '#e23939'
      },
      lineHeight: {
        DEFAULT: '150%'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        lg: '1.2rem',
        xl: '1.4rem',
        '2xl': '1.6rem',
        '3xl': '2.4rem',
        '4xl': '3.2rem',
        '5xl': '6.4rem'
      }
    }
  },
  plugins: []
};
