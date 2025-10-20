/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f8',
          100: '#ffeaf1',
          200: '#ffd6e3',
          300: '#ffb8cf',
          400: '#ff94b8',
          500: '#f26d9b',
          600: '#e05486',
          700: '#c14273',
          800: '#a43662',
          900: '#872b52',
        },
        secondary: {
          50: '#f8f6ff',
          100: '#eeeaff',
          200: '#ddd5ff',
          300: '#c1b6ff',
          400: '#a493ff',
          500: '#8a77f5',
          600: '#735fe0',
          700: '#5e4dc3',
          800: '#4b3fa4',
          900: '#3c3386',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
