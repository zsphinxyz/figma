import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'Made by zsphinx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='bg-ebg min-h-screen'>
        {children}
    </main>
  )
}
