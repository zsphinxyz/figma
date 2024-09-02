'use client'

import { animate, motion, transform, useAnimate, useMotionValue, useTransform } from "framer-motion"
import banner1 from '@/assets/school/banner.png'
import banner2 from '@/assets/school/banner2.jpg'
import banner3 from '@/assets/school/banner3.jpg'
import { StaticImageData } from "next/image"
import { useEffect, useState } from "react"

function Slide({ banner, idx, headerLine, p }: { banner: StaticImageData, idx:number, headerLine:string, p:string }) {
  return (
    <motion.div
      animate={{x: -idx*100+'%'}}
      className='shrink-0 relative w-screen max-w-monitor' style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <div className="absolute pointer-events-none w-full h-full bg-black/40 dark:bg-black/60 inset-0" /> 

      <div className="absolute inset-0 left-0 md:left-10 rounded-lg top-1/2 -translate-y-1/2 z-10 w-full text-center md:text-left md:w-[420px] h-fit bg-none md:bg-slate-500 md:dark:bg-slate-700 p-2 md:p-5 lg:p-7 flex justify-between items-center md:items-start flex-col">
        <h1 className="text-4xl font-sans text-white leading-[1.3] font-medium" dangerouslySetInnerHTML={{__html: headerLine}} />
        <p className="text-lg md:text-xl mt-5 w-full sm:w-2/3 md:w-full md:mx-0 mx-auto text-white md:leading-9">
          {p}
        </p>
        <button className="bg-white px-5 py-3 mt-5 text-black rounded-lg w-fit hover:bg-white/70">More info ▶</button>
      </div>
    </motion.div>
  )
}

export default function Banner() {

  const imgs = [banner1, banner2, banner3];
  const [idx, setIdx] = useState(0)

  const headers = [
    'We play and Learn who said <span class="highlight">Education</span> is <span class="highlight">boring</span>',
    'Discover the <span class="highlight">Joy</span> of learning where every day is an adventure in <span class="highlight">knowledge and play</span>',
    'Where curiosity meets <span class="highlight">creativity</span>, education becomes an exciting <span class="highlight">journey</span>.'
  ]
  const paragraphs = [
    'Lilly is an outstanding Nursery & Primary school targeting educational System, helping Kids to read and write.',
    'Our school is a premier institution dedicated to nurturing young minds and fostering a love for reading and writing.',
    'At our school, we lay the foundation for lifelong learning by focusing on early literacy and essential skills.'
  ]

  const DRAG_BUFFER = 25
  const SLIDE_MILISEC = 5000

  const v = useMotionValue(0)

  let limitDrag = imgs.length-1

  function dragEnd() {

    if(v.get() > DRAG_BUFFER) {
      setIdx(idx-1)

      if(idx == 0) {
        setIdx(0)
      }
    }

    else if(v.get() < -DRAG_BUFFER) {
      setIdx(idx+1)

      if(idx >= limitDrag) {
        setIdx(limitDrag)
      }
    }

  }

  useEffect(()=>{
    const time = setInterval(()=>{ 
      if(idx >= limitDrag) {
        setIdx(0)
      }
      else{
        setIdx(idx + 1)
      }
    }, SLIDE_MILISEC);

    return () => clearInterval(time);
  }, [idx])


  return (
    <div className="overflow-auto relative">
      <section className="w-full aspect-video active:cursor-grabbing min-h-[400px] bg-background flex items-center justify-center mx-auto overflow-hidden">
        <motion.div 
          className="flex w-full max-w-monitor h-full"
          drag='x'
          onDragEnd={dragEnd}
          dragElastic={0.2}
          dragTransition={{bounceDamping: 300, bounceStiffness:5000}}
          dragConstraints={{left:0, right:0}}
          style={{
            x: v
          }}
          transition={{duration: 0.2, ease: 'easeIn'}}
        >
          {
          imgs.map((img, i) => (
            <Slide idx={idx} key={i} banner={img} headerLine={headers[i]} p={paragraphs[i]} />
          ))
        }
        </motion.div>
      </section>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
      {
        imgs.map((_, i) => (
          <button key={i} onClick={()=>setIdx(i)} className="size-3 rounded-full bg-white " style={{opacity: idx == i ? 1 : 0.3}} />
        )) 
      }
      </div>
    </div>
  )
}