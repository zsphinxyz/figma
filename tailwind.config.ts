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
        body: '#070606',
        pop: '#2B892E',
        PrimColor: '#e5e5e5',
        SecColor: '#989898',
        BgGrey: '#131313'
      }
    },
  },
  plugins: [],
}
export default config
