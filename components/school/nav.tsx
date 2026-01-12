'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { CgAtlasian } from "react-icons/cg";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Lists = () => {
  const navList = [
    {id: 1, href: '/school', name:'Home'},
    {id: 2, href: '/school/about', name:'About us'}, 
    {id: 3, href: '/school/management', name:'Management'}, 
    {id: 4, href: '/school/news', name:'News & Events'}, 
    {id: 5, href: '/school/gallery', name:'Gallery'}, 
    {id: 6, href: '/school/contact', name:'Contact Us'}
  ];
  const path = usePathname();
  
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
            <Link 
              href={i.href} 
              className="w-full pl-1 md:inline-block group-hover:translate-x-1 transition flex items-center md:h-auto "
              style={{color: path == i.href ? 'rgb(239 68 68)' : ''}}
            >
              {i.name}
            </Link>
          </motion.li>
        ))
      }
    </>
  )
}

export default function Nav() {

  const {theme, setTheme} = useTheme();
  const [open, setOpen] = useState(false);
  const [cli, isCli] = useState(false)

  useEffect(()=>{
    isCli(true)
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme')
      cli && setTheme(localTheme || 'dark')
    }
  }, [])

  useEffect(()=>{
    open ? 
      document.body.style.overflowY = 'hidden' :
      document.body.style.overflowY = 'initial' 

  }, [open])

  return (

    <nav className="flex px-2 bg-white dark:bg-background py-5 relative z-50 isolate">
      <div className="font-extrabold text-xl px-5 flex items-center gap-2 text-slate-800 dark:text-slate-200 cursor-default select-none">
        <CgAtlasian className="text-3xl scale-150 inline-block" /><span className="font-playpen inline-block text-2xl">Rapkhen</span>
      </div>

      <div className="flex ml-auto flex-row-reverse items-center md:flex-row font-playpen">

        {/* Desktop */}
        <ul className="hidden md:flex gap-5 ">
          <Lists/>
        </ul>

        {/* Mobile */}
        <div className="md:hidden">
          <button className="text-xl pr-1 flex items-center" onClick={() => setOpen(!open)}>{ open ? <FaTimes /> : <FaBars /> }</button>

            
          {/* Backdrop */}
          <AnimatePresence>
            {open && <motion.div initial={{opacity:0}} animate={{opacity:0.3}} exit={{opacity:0}} onClick={()=>setOpen(false)} className="absolute bg-black left-0 w-full top-[68px] h-dvh" />}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {
              open &&
              <motion.ul
                className="h-dvh flex overflow-hidden text-lg flex-col absolute origin-top top-[68px] bg-background text-foreground divide-foreground/20 divide-y-2 right-0 min-w-72 *:p-4 hover:*:bg-foreground/10 shadow-md shadow-black/20"
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
          {
            theme == 'light' ?
            <button className="w-fit h-fit block bg-foreground/10 hover:bg-foreground/15 p-1 rounded-md" onClick={() => cli && setTheme('dark')}> <FaMoon /> </button>:
            <button className="w-fit h-fit block bg-foreground/10 hover:bg-foreground/15 p-1 rounded-md" onClick={() => cli && setTheme('light')}> <FaSun /> </button>

          }
        </div>

      </div>
    </nav>

  )
}
