import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#B3472E',
        burntOrange: '#D97706',
        golden: '#F4B400',
        cream: '#FFF8F0',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config