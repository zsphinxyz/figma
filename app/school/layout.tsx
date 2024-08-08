import type { Metadata } from 'next'
import { Roboto, Playpen_Sans } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/school/themeProvider'

const roboto = Roboto({subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']})
const playpen = Playpen_Sans({ subsets: ['latin'], weight: ['100', '300', '400', '500', '800'] , variable: '--playpen'})

export const metadata: Metadata = {
  title: 'School',
  description: 'Made by zsphinx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <main className={roboto.className + ' bg-background overflow-hidden '+ playpen.variable}>
        {children}
      </main>
    </ThemeProvider>
  )
}
