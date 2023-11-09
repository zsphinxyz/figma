 import visa from '@/assets/bank/visa.svg'
 import Image from 'next/image'

const Visa = () => {
  return (
    <section className='mx-auto max-w-[1200px]'>

        <div className="px-3 max-w-[680px] my-10 mx-auto">
            <p className='uppercase text-pop mb-3 text-center md:text-xl'>introduction</p>
            <h1 className="text-PrimColor text-3xl sm:text-4xl text-center md:text-6xl">Introducing RAFT's Next-Gen Cards</h1>
            <p className="text-SecColor my-8 text-sm sm:text-lg text-center md:text-xl"> Discover RAFT's latest innovation our new cards. Elevate your banking experience with cutting-edge features, security, and unprecedented convenience.</p>
        </div>

        <div className="flex relative h-[450px] group">
            <div className='w-[800px] relative mx-auto'>
                <Image src={visa} alt='visa' className='absolute transition group-hover:rotate-[15deg] group-hover:-translate-y-5 inset-0 saturate-0 origin-bottom rotate-12'/>
                <Image src={visa} alt='visa' className='absolute transition group-hover:rotate-[-15deg] group-hover:-translate-y-5 inset-0 hue-rotate-60 origin-bottom -rotate-12'/>
                <Image src={visa} alt='visa' className='absolute transition group-hover:-translate-y-5 inset-0 rotate-0'/>
            </div>
        </div>

    </section>
  )
}

export default Visa