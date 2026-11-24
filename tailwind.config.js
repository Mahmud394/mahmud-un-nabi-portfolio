/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          dark: '#0B0F14',
        },
        surface: {
          DEFAULT: '#F5F7FA',
          dark: '#111820',
        },
        accent: {
          DEFAULT: '#008DB5',
          dark: '#00D9FF',
        },
        ink: {
          DEFAULT: '#17202A',
          dark: '#F5F7FA',
        },
        muted: {
          DEFAULT: '#5D6875',
          dark: '#A0AAB5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
