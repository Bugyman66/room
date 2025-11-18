/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aptos-dark': '#07111A',
        'aptos-black': '#000000',
        'aptos-cyan': '#00E5FF',
        'aptos-aqua': '#0AD9FF',
        'aptos-aqua-light': '#11F3FF',
        'aptos-aqua-pale': '#66F2FF',
        'aptos-white': '#FFFFFF',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-up': 'floatUp 8s linear infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
        'sweep': 'sweep 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(100vh)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(-100px)', opacity: 0 },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 229, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.8)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}