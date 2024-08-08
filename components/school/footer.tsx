import cover from '@/assets/school/banner2.jpg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-teal-300/30 dark:bg-teal-900 mt-7">

      <div className="w-full px-3 aspect-video max-h-64 md:max-h-80 bg-cover bg-center flex flex-col gap-10 items-center justify-center bg-blend-overlay bg-black/70" style={{backgroundImage: `url(${cover.src})`}}>
        <p className="text-center text-2xl sm:text-3xl md:text-4xl md:leading-relaxed w-full sm:w-5/6 max-w-xl mx-auto text-white">A wonderfun <span className="text-red-500 font-medium">FIRST</span> out of home learning <span className="text-red-500 font-medium">EXPERIENCE</span> For your Child</p>
        
        <div className="flex items-center w-full sm:w-2/3 justify-center max-w-lg rounded-md ring-1 ring-white overflow-hidden">
          <input type="email" autoComplete='off' placeholder='Enter email to receive news letter' className='w-full py-2 pl-2 bg-black/20 md:py-3' />
          <button className="bg-red-500 px-3 py-2 md:py-3 text-white">Send</button>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap *:basis-1/2 md:*:basis-1/4 gap-8 sm:gap-0 py-8 px-2 sm:px-3 md:px-5">

        <div className="min-w-full sm:min-w-min">
          <h1 className="text-2xl font-bold mb-2">LOGO</h1>
          <p className="pl-2 text-foreground/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil accusantium excepturi autem fugit delectus dicta maiores fuga rem ipsam.</p>
          <div className="flex gap-2 text-lg pl-2">
            <p className="">🪵</p>
            <p className="">🐈</p>
            <p className="">💀</p>
            <p className="">⛄</p>
           </div>
        </div>

        <div className="min-w-full sm:min-w-min md:max-w-52">
          <h1 className="text-red-500 font-bold text-2xl mb-2">Links</h1>
          <ul className='pl-2 *:block hover:*:underline'>
            <Link href=''>Home</Link>
            <Link href=''>About us</Link>
            <Link href=''>Management</Link>
            <Link href=''>News & Event</Link>
            <Link href=''>Gallery</Link>
            <Link href=''>Contact us</Link>
          </ul>
        </div>

        <div className="min-w-full sm:min-w-min sm:mt-7 md:mt-0">
        <h1 className="text-red-500 font-bold text-2xl mb-2">Find Us</h1>
          <ul className='pl-2'>
            <li className="">🧭 Location, Street, Township, Country,</li>
            <li className="">✉️ info@gmail.com</li>
            <li className="">📞 +95 999 999 999 9</li>
            <li className="">+95 999 999 999 9</li>
          </ul>
        </div>

        <div className="sm:mt-7 md:mt-0">
          <h1 className="text-red-500 font-bold text-2xl mb-2">Contact Us</h1>
          <form className="*:block *:p-1  flex flex-col gap-2 pr-2 ">
            <input type="text" placeholder='Name' className="bg-foreground placeholder-background rounded-md" />
            <input type="email" placeholder='Email' className="bg-foreground placeholder-background rounded-md" />
            <textarea className='bg-foreground placeholder-background rounded-md' placeholder='Type your message here...'></textarea>
            <button className="bg-red-500 py-5 px-3 text-white">Send Message</button>
          </form>
        </div>

      </div>

    </footer>
  )
}

