export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#64748b',
        accent: '#3b82f6',
        gradient: {
          from: '#0f172a',
          to: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        typing: 'typing 2s steps(20, end)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      boxShadow: {
        lg: '0 10px 30px rgba(0, 0, 0, 0.3)',
        xl: '0 20px 50px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-hot': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
        'gradient-cool': 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
      },
    },
  },
  plugins: [],
}
