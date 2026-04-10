/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#05050A', // Even deeper black
          800: '#0F101A',
          700: '#1A1C29',
        },
        primary: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // Cyan
          600: '#0891b2',
        },
        secondary: {
          400: '#c084fc',
          500: '#a855f7', // Purple/Violet
          600: '#9333ea',
        },
        accent: {
          500: '#f43f5e', // Rose
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
