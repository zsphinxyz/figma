import type { Config } from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'

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
        esec: '#7a7a7a',

        //school config
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      fontFamily: {
        playpen: ['var(--playpen)', ...fontFamily.sans]
      },
      maxWidth: {
        monitor: '1600px'
      },
    },
  },
  plugins: [],
}
export default config
