'use client'
import {motion} from 'framer-motion'
import { useRef } from 'react'

export default function Header({text1, text2}: {text1:string, text2:string}) {

  const ref = useRef(null)

  return (
  <motion.header
    ref={ref}
    className="relative w-fit mx-auto px-3 pb-2 mb-8 cursor-default"
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{
      amount: 'all',
      margin: '100px 0px -20% 0px',
      once: true
    }}
  >
    <h1 className="text-3xl font-extrabold text-center"> 
      <span className="text-foreground">{text1} </span> 
      <span className="text-red-500">{text2}</span> 
    </h1>
    <motion.div className="absolute bottom-0 w-3/5 h-0.5 right-1/4 bg-foreground origin-left" initial={{scale:0}} whileInView={{scale: [0,1,1]}} viewport={{margin: '100px 0px -20% 0px',}} transition={{delay: 0.2}} />
    <motion.div className="absolute -bottom-2 w-3/5 h-0.5 left-1/4 bg-red-500 origin-right" initial={{scale:0}} whileInView={{scale: [0,0.9,1]}} viewport={{margin: '100px 0px -20% 0px',}} transition={{delay: 0.3}} />
  </motion.header>
  )
}
