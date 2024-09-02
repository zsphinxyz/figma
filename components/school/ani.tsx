'use client'

import { motion, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"


export function Fade({children}: {children: React.ReactNode}) {
  const [scope, ani] = useAnimate()
  const isView = useInView(scope, {amount: 'some', once: true})

  useEffect(()=>{
    ani('.link', {opacity: isView ? 1 : 0, y: isView ? 0 : -20}, {delay: 0.25})
    ani('p', {opacity: isView ? 1: 0}, {delay: 0.5})
  })

  return (
    <motion.div ref={scope}>
      {children}
    </motion.div>
  )
}
