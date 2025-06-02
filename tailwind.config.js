/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffce6',
          100: '#fff9cc',
          200: '#fff599',
          300: '#ffec66',
          400: '#ffdf33',
          500: '#ffd700', // Main primary yellow
          600: '#cca800',
          700: '#997e00',
          800: '#665400',
          900: '#332a00',
        },
        secondary: {
          900: '#000000', // Main secondary black
          800: '#1a1a1a',
          700: '#333333',
          600: '#4d4d4d',
          500: '#666666',
          400: '#808080',
          300: '#999999',
          200: '#b3b3b3',
          100: '#cccccc',
          50: '#e6e6e6',
        },
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 6px -1px rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};