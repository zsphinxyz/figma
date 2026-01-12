import type { Metadata } from 'next'
import { Roboto, Playpen_Sans } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/school/themeProvider'
import Nav from '@/components/school/nav'
import Footer from '@/components/school/footer'

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
      <main className={roboto.className + ' bg-background overflow-hidden scroll-smooth'+ playpen.variable}>
        <Nav />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  )
}
