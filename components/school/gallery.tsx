'use client'

import Header from '@/components/school/header'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

import gly1 from '@/assets/school/gallery1.jpg'
import gly2 from '@/assets/school/gallery2.jpg'
import gly3 from '@/assets/school/gallery3.jpg'
import gly4 from '@/assets/school/gallery4.jpg'
import gly5 from '@/assets/school/gallery5.jpg'
import gly6 from '@/assets/school/gallery6.jpg'


export default function Gallery() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target:ref,
  })
  const value = useTransform(scrollYProgress, [0.1, 0.9], [-850, 0])
  const v = useSpring(value, {damping: 10, stiffness: 100, restDelta: 0.1})
  return (
    <div className='py-8 overflow-hidden'>
      <Header text1='Our' text2='Gallery' />

      <motion.div className="p-3 flex gap-10 *:rounded-md transition" style={{x: v}} ref={ref}>
        <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
        <Image src={gly2} alt='img' width={gly2.width} height={gly2.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
        <Image src={gly3} alt='img' width={gly3.width} height={gly3.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
        <Image src={gly4} alt='img' width={gly4.width} height={gly4.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
        <Image src={gly5} alt='img' width={gly5.width} height={gly5.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
        <Image src={gly6} alt='img' width={gly6.width} height={gly6.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
      </motion.div>
      <button className="school_btn">More Pictures {'-->'}</button>
    </div>
  )
}
