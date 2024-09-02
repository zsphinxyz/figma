import Header from '@/components/school/header'
import Image, { StaticImageData } from 'next/image'

import team1 from '@/assets/school/team1.jpg'
import team2 from '@/assets/school/team2.jpg'
import team3 from '@/assets/school/team3.jpg'


import { Fade } from './ani'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

function MemberCard({ img, position, name }: { img: StaticImageData, position: string, name: string }) {
  return (
    <Fade>
      <div className="link rounded-lg overflow-hidden flex shadow-md shadow-black/50 md:flex-col gap-2 cursor-default bg-background">
        <Image src={img} alt='img' width={420} height={420} className='min-w-12 md:h-72 lg:h-80 md:w-full aspect-square object-cover object-center' />

        <div className="flex flex-col sm:gap-1 p-1 md:px-2">
          <p className="text-red-500 font-medium">{position}</p>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-foreground/80 text-sm sm:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae alias aspernatur aut quo porro est animi</p>

          <div className="flex gap-2 text-lg my-2">
            <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><FaFacebookF /></p>
            <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><FaInstagram /></p>
            <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><FaXTwitter /></p>
            <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><SiGmail /></p>
          </div>
        </div>
      </div>
      </Fade>
  )
}

export default function Team() {
  return (
    <div className='bg-foreground/10 px-1 sm:px-3 py-10 mt-[1px]'>
      <Header text1='Meet Our' text2='Team' />
      <div className="w-full flex flex-col gap-3 md:px-10 md:flex-row md:justify-around">
        <MemberCard img={team1} position='Headmaster' name='Mr. White' />
        <MemberCard img={team2} position='Headmistress' name='Profs McGonagall' />
        <MemberCard img={team3} position='Teacher' name='Mr. Hawking' />
      </div>
    </div>
  )
}
