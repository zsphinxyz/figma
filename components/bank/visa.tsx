 import visa from '@/assets/bank/visa.svg'
 import Image from 'next/image'
 import i1 from '@/assets/bank/card4/gift.png'
 import i2 from '@/assets/bank/card4/ticket.png'
 import i3 from '@/assets/bank/card4/shopping-bag.png'
import Section from './section'

const Visa = () => {
  return (
    <Section style='mx-auto max-w-[1200px]'>

        <div className="px-3 max-w-[680px] my-10 mx-auto">
          <p className='uppercase text-pop mb-3 text-center md:text-xl'>introduction</p>
          <h1 className="text-PrimColor text-3xl sm:text-4xl text-center md:text-6xl">Introducing RAFT&apos;s Next-Gen Cards</h1>
          <p className="text-SecColor my-8 text-sm sm:text-lg text-center md:text-xl"> Discover RAFT&apos;s latest innovation our new cards. Elevate your banking experience with cutting-edge features, security, and unprecedented convenience.</p>
        </div>

        <div className="w-full overflow-hidden pt-10 select-none">
          <div className='w-full flex justify-center group items-center relative h-[300px] md:h-[460px]'>
            <Image src={visa} alt='visa' priority draggable={false} fill className=' transition group-hover:rotate-[15deg] group-hover:-translate-y-5 inset-0 saturate-0 origin-bottom rotate-12'/>
            <Image src={visa} alt='visa' priority draggable={false} fill className=' transition group-hover:rotate-[-15deg] group-hover:-translate-y-5 inset-0 hue-rotate-60 origin-bottom -rotate-12'/>
            <Image src={visa} alt='visa' priority draggable={false} fill className=' transition group-hover:-translate-y-5 inset-0 rotate-0 origin-bottom'/>
          </div>
        </div>

        <div className='flex flex-col px-5 md:flex-row gap-8 lg:gap-3'>

          <div className="">
            <div className="flex items-center mb-2">
              <Image src={i1} alt='gift' className='w-5 h-5 md:w-7 md:h-7 mr-1' />
              <h1 className="text-xl text-PrimColor lg:text-2xl">Contactless Technology</h1>
            </div>
            <p className="text-SecColor text-sm md:text-lg">Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap</p>
          </div>

          
          <div className="">
            <div className="flex items-center mb-2">
              <Image src={i2} alt='gift' className='w-5 h-5 md:w-7 md:h-7 mr-1' />
              <h1 className="text-xl text-PrimColor lg:text-2xl">Personalization</h1>
            </div>
            <p className="text-SecColor text-sm md:text-lg">Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.</p>
          </div>

          
          <div className="">
            <div className="flex items-center mb-2">
              <Image src={i3} alt='gift' className='w-5 h-5 md:w-7 md:h-7 mr-1' />
              <h1 className="text-xl text-PrimColor lg:text-2xl">Enhanced Security</h1>
            </div>
            <p className="text-SecColor text-sm md:text-lg">Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data</p>
          </div>

        </div>

    </Section>
  )
}

export default Visa