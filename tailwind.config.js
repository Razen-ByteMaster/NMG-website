/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#E5C558',
          dark: '#8C6F1B',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          panel: '#131313',
          soft: '#1C1C1C',
        },
        cream: '#F5F1E8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Oswald', 'Arial Narrow', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 30px -6px rgba(0, 0, 0, 0.6)',
        cardHover: '0 16px 48px -8px rgba(201, 162, 39, 0.25)',
        goldGlow: '0 0 40px -8px rgba(201, 162, 39, 0.45)',
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