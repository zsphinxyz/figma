import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
        BgGrey: '#131313',
        ebg: '#F2F0F1',
        esec: '#656565'
      },
      maxWidth: {
        monitor: '1600px'
      },
    },
  },
  plugins: [],
}
export default config
