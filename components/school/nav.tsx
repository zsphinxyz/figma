'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from "next-themes";

const Lists = () => {
  const navList = ['Home', 'About us', 'Management', 'News & Events', 'Gallery', 'Contact Us'];
  return (
    <>
      {
        navList.map((i, j) => (
          <motion.li
            className="group"
            key={j}
            initial={{opacity:0, x: 20}}
            animate={{opacity:1, x: 0}}
            exit={{opacity: 0, x: 20}}
            transition={{delay: (j+5)/24}}
          >
            <Link href='' className="w-full pl-1 md:inline-block group-hover:translate-x-1 transition h-20 flex items-center md:h-auto ">{i}</Link>
          </motion.li>
        ))
      }
    </>
  )
}

export default function Nav() {

  const {theme, setTheme} = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    open ? 
      document.body.style.overflowY = 'hidden' :
      document.body.style.overflowY = 'initial' 

  }, [open])

  return (

    <nav className="flex px-2 bg-white dark:bg-background py-5 relative z-50 isolate">
      <div className="font-extrabold text-xl px-5">LOGO</div>

      <div className="flex ml-auto flex-row-reverse md:flex-row font-playpen">

        {/* Desktop */}
        <ul className="hidden md:flex gap-5 ">
          <Lists/>
        </ul>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>🍔</button>

            
          {/* Backdrop */}
          <AnimatePresence>
            {open && <motion.div initial={{opacity:0}} animate={{opacity:0.3}} exit={{opacity:0}} onClick={()=>setOpen(false)} className="absolute bg-black left-0 w-full top-[68px] h-dvh" />}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {
              open &&
              <motion.ul
                className="flex overflow-hidden text-lg flex-col absolute origin-top top-[68px] bg-background text-foreground divide-foreground/20 divide-y-2 right-0 min-w-72 *:p-4 hover:*:bg-foreground/10 shadow-md shadow-black/20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1}}
                exit={{ scaleY: [1,1,0]}}
              >
                <Lists />
              </motion.ul>
            }
          </AnimatePresence>


        </div>

        <div className="mx-5">
          <button className="w-fit h-fit bg-foreground/10 " onClick={() => setTheme(() => theme == 'light' ? 'dark' : 'light')}>{theme == 'light' ? '☀️' : '🌙'}</button>
        </div>

      </div>
    </nav>

  )
}
