/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          nmg: '#00BFB3',
          dark: '#008F86',
        },
        dark: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 30px -6px rgba(0, 0, 0, 0.12)',
        cardHover: '0 16px 48px -8px rgba(0, 191, 179, 0.28)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        fadeIn: 'fadeIn 0.9s ease-out both',
      },
    },
  },
  plugins: [],
}