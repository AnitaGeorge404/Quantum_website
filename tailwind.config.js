/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6fbff',
          100: '#e8f3ff',
          200: '#cfe4ff',
          300: '#a9ccf8',
          400: '#7cb0ec',
          500: '#578fdc',
          600: '#3f73c9',
          700: '#315dac',
          800: '#294d8e',
          900: '#172554',
        },
        secondary: {
          50: '#fff6fb',
          100: '#fdeaf4',
          200: '#f9d5e9',
          300: '#f4b9db',
          400: '#eb98c7',
          500: '#db76b2',
          600: '#c65e9e',
          700: '#a24782',
          800: '#7f3566',
          900: '#5f1f74',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow': '0 10px 40px -10px rgba(236, 72, 153, 0.25)',
        'lift': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      }
    },
  },
  plugins: [],
}

