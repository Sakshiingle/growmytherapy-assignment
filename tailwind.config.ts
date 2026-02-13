import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1-responsive': ['clamp(1.8rem, 5vw, 3.5rem)', { lineHeight: '1.2' }],
        'h2-responsive': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.3' }],
        'p-responsive': ['clamp(1rem, 3vw, 1.2rem)', { lineHeight: '1.7' }],
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
}

export default config
