'use client'
import Image from 'next/image'
import {delay, motion} from 'framer-motion'

import Button from '@/components/bank/button'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import grid from '@/assets/bank/Grid.png'
import banner from '@/assets/bank/banner.png'


const Hero = () => {
  const variant = {
  }

  return (
    <section className='w-auto pt-20 pb-10 lg:py-12 mx-auto cursor-default'>
      <div className="flex flex-col justify-center mx-auto sm:w-[580px] lg:w-[1000px] items-center gap-5 lg:gap-10 relative">
          <Image src={grid} priority alt='grid' className=' absolute inset-0 object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'  />
          <motion.p 
            className=" text-SecColor bg-stone-700 px-5 py-1 w-fit rounded-full text-xl cursor-pointer hover:text-PrimColor"
            initial = {{opacity: 0, scale: 0}}
            animate = {{opacity: 1, scale: 1}}
            transition={{delay: 0.4}}
          >
            Introduction Raft Cards <MdOutlineKeyboardArrowRight className="inline"/>
          </motion.p>
          <motion.h1
            className="text-4xl lg:text-7xl text-PrimColor text-center max-w-[500px] lg:max-w-[750px] mx-auto"
            initial = {{opacity:0, x: -100}}
            animate = {{opacity:1, x: 0}}
          >
            Building the future of banking.
          </motion.h1>
          <motion.h2 
            className="text-SecColor text-md sm:text-xl text-center max-w-[700px] mx-auto px-10 md:px-0"
            initial = {{opacity: 0, x: -100}}
            animate = {{opacity: 1, x: 0}}
            transition={{delay: 0.2}}
          >
            Experience the future of banking with RAFT. We are here to empower your financial journey.
          </motion.h2>
          <Button text='Get Started' style='text-2xl md:py-4 py-2 md:px-7' />
      </div>

      <motion.div 
        className='py-10 w-full xl:w-[1200px] mx-auto h-[500px] md:h-auto px-5'
        initial={{opacity: 0, y: 100}}
        animate = {{opacity: 1, y: 0}}
        transition={{type: 'spring', stiffness: 300, damping: 50}}
      >
        <Image src={banner} priority alt='banner' className='h-full bg-cover w-full object-cover rounded-xl' />
      </motion.div>
    </section>
  )
}

export default Hero