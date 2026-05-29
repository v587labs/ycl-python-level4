/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          50: '#FFF3E6',
          100: '#FFE0CC',
          200: '#FFC2A3',
          300: '#FFA47A',
          400: '#FF8851',
          500: '#FF6B35',
          600: '#E55A25',
          700: '#CC4A1A',
          800: '#B33A10',
          900: '#992A06'
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          50: '#E8FDF9',
          100: '#C7F5EF',
          200: '#A3E9E2',
          300: '#7FDDD5',
          400: '#5BD1C8',
          500: '#4ECDC4',
          600: '#3DB8AE',
          700: '#2CA398',
          800: '#1B8E82',
          900: '#0A796C'
        },
        teacher: {
          DEFAULT: '#6C5CE7',
          50: '#F0EEFF',
          100: '#D9D5F9',
          200: '#C2BBF3',
          300: '#ABA1ED',
          400: '#9487E7',
          500: '#6C5CE7',
          600: '#5A4ACF',
          700: '#4839B7',
          800: '#36289F',
          900: '#241787'
        },
        student: {
          DEFAULT: '#00B894',
          50: '#E8F8F2',
          100: '#C7F5EF',
          200: '#A3E9E2',
          300: '#7FDDD5',
          400: '#5BD1C8',
          500: '#00B894',
          600: '#00A383',
          700: '#008E72',
          800: '#007961',
          900: '#006450'
        },
        surface: {
          DEFAULT: '#FFFBF5',
          50: '#FFFFFF',
          100: '#FFF9F0',
          200: '#FFF3E6',
          300: '#FFEEDD',
          400: '#FFE7D4',
          500: '#FFFBF5'
        },
        muted: '#636E72',
        dark: '#2D3436',
        success: '#00B894',
        warning: '#FDCB6E',
        danger: '#E74C3C',
        border: {
          DEFAULT: '#DFE6E9',
          light: '#F7F9FA'
        }
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace']
      },
      borderRadius: {
        'card': '16px',
        'btn': '12px',
        'badge': '8px',
        'input': '10px',
        'circle': '9999px'
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'btn': '0 2px 8px rgba(255, 107, 53, 0.3)',
        'btn-hover': '0 4px 16px rgba(255, 107, 53, 0.4)'
      },
      animation: {
        'fade-up': 'fadeUp 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
}