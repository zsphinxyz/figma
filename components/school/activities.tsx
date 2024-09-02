'use client'

import Header from '@/components/school/header'
import Image, { StaticImageData } from 'next/image'
import { motion, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'
import painting from '@/assets/school/act_painting.jpg'
import sports from '@/assets/school/act_sports.jpg'
import entertainment from '@/assets/school/act_entertainment.jpg'

function Activity({header, para, imgSrc}: {header:string, para:string, imgSrc:StaticImageData}) {
  const [scope, ani] = useAnimate();
  const isInView = useInView(scope, {amount: 'all', once: true})

  useEffect(()=>{
    ani('.img', {scale: isInView ? 1 : 0, opacity: isInView ? [0, 0.5, 1] : 0})
    ani('h3', {x: isInView ? 0 : -20, opacity: isInView ? 1 : 0}, {delay: 0.25} )
    ani('p', {x: isInView ? 0 : -20, opacity: isInView ? 1 : 0}, {delay: 0.35})
  })

  return(
    <motion.div ref={scope} className="flex gap-2 items-center md:flex-col p-1 sm:p-3 cursor-default">
      <Image src={imgSrc} alt='test' width={imgSrc.width} height={imgSrc.width} draggable={false} className='img origin-top-left select-none aspect-square w-32 md:w-48 lg:w-52 object-cover object-center md:rounded-full' />
      <div className="md:text-center">
        <h3 className="text-2xl lg:text-3xl font-medium text-foreground/90 my-2">{header}</h3>
        <p className="text-foreground/70 lg:text-lg">{para}</p>
      </div>
     </motion.div>
  )
}

function Activities() {
  return (
    <section className="pt-10 pb-16">
     <Header text1='Our' text2='Activities' />

      <div className="flex flex-col md:flex-row gap-10 md:gap-3">
        <Activity imgSrc={painting} header='Painting' para='Painting is the expression or application of human creative skill and imagination, typically in a visual form.' />
        <Activity imgSrc={sports} header='Sports' para='Sports are gamexs such football and basketball and other competitive leisure activities which need physical effort and skill.' />
        <Activity imgSrc={entertainment} header='Entertainment' para='Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight.' />
      </div>

    </section>
  )
}

export default Activities