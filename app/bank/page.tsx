import Hero from '@/components/bank/hero'
import Feature from '@/components/bank/feature'
import Nav from '@/components/bank/nav'
import Card from '@/components/bank/card'
import Financial from '@/components/bank/financial'
import Green from '@/components/bank/green'
import Confident from '@/components/bank/confident'
import Visa from '@/components/bank/visa'
import Members from '@/components/bank/members'
import Faq from '@/components/bank/faq'
import Footer from '@/components/bank/footer'

import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Bank',
  description: 'Bank Application on Figma',
}


const page = () => {
  return (
    <Suspense fallback={'...'}>
      <Nav />
      <main className='overflow-hidden'>
        <Hero />
        <Feature />
        <Card />
        <Financial />
        <Green />
        <Confident />
        <Visa />
        <Members />
        <Faq />
        <Footer />
      </main>
      </Suspense>
  )
}

export default page