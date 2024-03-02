import Image from 'next/image'
import hero from '@/assets/ecommerce/hero.png'
import Sparkle from '@/assets/ecommerce/sparkle.svg'

import logo1 from '@/assets/ecommerce/logo (1).png'
import logo2 from '@/assets/ecommerce/logo (2).png'
import logo3 from '@/assets/ecommerce/logo (3).png'
import logo4 from '@/assets/ecommerce/logo (4).png'
import logo5 from '@/assets/ecommerce/logo (5).png'

function Hero() {
    const logos = [logo1, logo2, logo3, logo4, logo5]
  return (
    <>
    <section className="flex flex-col md:flex-row gap-3 max-w-monitor mx-auto md:h-[calc(100vh-100px)] md:max-h-[1024px]">
        <div className="p-5 flex flex-col gap-5 md:pl-10 md:pr-2 md:justify-center lg:py-16 lg:space-y-16 basis-full cursor-default">
            <h1 className='text-4xl text-center md:text-left font-extrabold uppercase sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl md:leading-snug xl:leading-relaxed'>find clothes that matches your style</h1>
            <p className="text-esec md:text-lg lg:text-xl xl:text-2xl">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="group w-full md:w-[200px] bg-gradient-to-b from-black via-black/75 to-black/80 text-white py-2 text-lg lg:text-xl xl:text-2xl ring-2 ring-black rounded-full transition-all">
                <span className='group-hover:scale-110 block transition group-active:scale-95'>Shop Now</span>
            </button>
            
            <div className="flex flex-col items-center w-full gap-5 sm:gap-0 sm:flex-row sm:divide-x-2 sm:divide-esec">
                <div className="flex justify-between divide-x-2 divide-esec">
                    <Count num='200+' text='International Brands' />
                    <Count num='2,000+' text='High-Quality Products' />
                </div>
                <Count num='30,000+' text='Happy Customers' />
            </div>

        </div>

        <div className="basis-full w-full min-h-full relative flex justify-end select-none">
            <Image src={hero} alt='hero' priority className='w-full h-full object-cover' />

            <Image src={Sparkle} draggable={false} alt='sparkle' width={40} height={40} className='absolute top-32 left-16 md:left-20 md:top-72 scale-[0.5] md:scale-[1]' />
            <Image src={Sparkle} draggable={false} alt='sparkle' width={40} height={40} className='absolute top-20 right-10 md:right-20 md:top-24 scale-[1.2] md:scale-[2]' />
        </div>
    </section>

    <div className="py-10 bg-black w-full max-w-monitor mx-auto flex flex-wrap justify-around gap-5">
        {
            logos.map( (i,j) => (
                <Image key={j} src={i} alt='Feature Company' className='basis-1 w-40 object-contain'   />
            ))
        }
    </div>

    </>
  )
}

function Count({num, text}: {num:string, text:string}) {
    return(
        <div className="px-5">
            <p className="text-2xl lg:text-3xl font-medium leading-tight">{num}</p>
            <p className="text-esec text-sm lg:text-lg">{text}</p>
        </div>
    )
}


export default Hero