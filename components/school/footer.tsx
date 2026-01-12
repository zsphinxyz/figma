import cover from '@/assets/school/banner2.jpg'
import Link from 'next/link'
import { CgAtlasian } from 'react-icons/cg'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaPhoneVolume, FaXTwitter } from 'react-icons/fa6'
import { IoLocation } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-teal-300/30 dark:bg-teal-900/30 mt-7 max-w-7xl mx-auto">

      <div className="w-full px-3 aspect-video max-h-64 md:max-h-80 bg-cover bg-center flex flex-col gap-10 items-center justify-center bg-blend-overlay bg-black/70" style={{backgroundImage: `url(${cover.src})`}}>
        <p className="text-center text-2xl sm:text-3xl md:text-4xl md:leading-relaxed w-full sm:w-5/6 max-w-xl mx-auto text-white">A wonderful <span className="text-red-500 font-medium">FIRST</span> out of home learning <span className="text-red-500 font-medium">EXPERIENCE</span> For your Child</p>
        
        <div className="flex items-center w-full sm:w-2/3 justify-center max-w-lg rounded-md ring-1 ring-white overflow-hidden">
          <input type="email" autoComplete='off' placeholder='Enter email to receive news letter' className='w-full py-2 pl-2 bg-black/20 md:py-3' />
          <button className="bg-red-500 px-3 py-2 md:py-3 text-white">Send</button>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap *:basis-1/2 md:*:basis-1/4 gap-8 sm:gap-0 py-8 px-2 sm:px-3 md:px-5">

        <div className="min-w-full sm:min-w-min">
          <CgAtlasian className="text-3xl scale-150 ml-2 " />
          <p className="pl-2 text-foreground/80 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil accusantium excepturi autem fugit delectus dicta maiores fuga rem ipsam.</p>
          <div className="flex gap-2 text-lg pl-2 ">
            <p className="cursor-pointer hover:scale-105 text-foreground/80 hover:text-foreground size-8 grid place-items-center"><FaFacebookF /></p>
            <p className="cursor-pointer hover:scale-105 text-foreground/80 hover:text-foreground size-8 grid place-items-center"><FaInstagram /></p>
            <p className="cursor-pointer hover:scale-105 text-foreground/80 hover:text-foreground size-8 grid place-items-center"><FaXTwitter /></p>
            <p className="cursor-pointer hover:scale-105 text-foreground/80 hover:text-foreground size-8 grid place-items-center"><SiGmail /></p>
           </div>
        </div>

        <div className="min-w-full sm:min-w-min md:max-w-52">
          <h1 className="text-red-500 font-bold text-2xl mb-2">Links</h1>
          <ul className='pl-2 *:block hover:*:underline text-foreground/80'>
            <Link href='/school'>Home</Link>
            <Link href='/school/about'>About us</Link>
            <Link href='/school/management'>Management</Link>
            <Link href='/school/news'>News & Event</Link>
            <Link href='/school/gallery'>Gallery</Link>
            <Link href='/school/contact'>Contact us</Link>
          </ul>
        </div>

        <div className="min-w-full sm:min-w-min sm:mt-7 md:mt-0">
        <h1 className="text-red-500 font-bold text-2xl mb-2">Find Us</h1>
          <ul className='pl-2 text-foreground/80'>
            <li className="flex items-center mt-2 gap-1.5"><IoLocation /> Location, Street, Township, Country,</li>
            <li className="flex items-center mt-2 gap-1.5"><IoMdMail /> info@gmail.com</li>
            <li className="flex items-center mt-2 gap-1.5"><FaPhoneVolume /> +95 999 999 999 9</li>
            <li className="pl-6">+95 999 999 999 9</li>
          </ul>
        </div>

        <div className="sm:mt-7 md:mt-0 flex-grow">
          <h1 className="text-red-500 font-bold text-2xl mb-2">Contact Us</h1>
          <form className="*:block *:py-1 *:px-3 flex flex-col gap-2 pr-2 text-background">
            <input type="text" placeholder='Name' className="bg-foreground placeholder-background/50 rounded-md block" />
            <input type="email" placeholder='Email' className="bg-foreground placeholder-background/50 rounded-md" />
            <textarea className='bg-foreground placeholder-background/50 rounded-md' placeholder='Type your message here...'></textarea>
            <button className="bg-red-500 py-5 px-3 text-white">Send Message</button>
          </form>
        </div>

      </div>

    </footer>
  )
}

