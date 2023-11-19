import Image from 'next/image'
import money from '@/assets/bank/money-send.svg'
import wallet from '@/assets/bank/wallet-minus.png'
import grid from '@/assets/bank/Grid.png'
import content from '@/assets/bank/content_img2.png'

const Confident = () => {
  return (
    <section className='max-w-[1200px] mx-auto'>
        <div className="px-3 max-w-[740px] my-10">
            <h1 className="text-PrimColor text-2xl sm:text-4xl md:text-6xl">Confidently Shape Your Financial Future</h1>
            <p className="text-SecColor my-8 text-sm sm:text-lg md:text-xl"> At RAFT, we empower you to confidently shape your financial future.Our modern approach simplifies saving and investing, making it easier than ever.</p>
        </div>

        <div className="flex flex-col px-5 gap-5 md:flex-row items-center justify-center">

            <div className=" [border:solid_1px_gray] bg-BgGrey rounded-lg p-5 max-w-[340px] md:max-w-[500px] mx-auto">
                <div className="">
                    <h1 className="text-PrimColor text-2xl mb-3">Spend better</h1>
                    <p className="text-SecColor text-md">Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress</p>
                </div>
                <div className="grid select-none place-items-center relative h-[250px] md:h-[320px]">
                    <Image src={money} alt='money' draggable={false} className='w-[100px] z-[2]' />
                    <Image src={grid} alt='grid' draggable={false} className='absolute inset-0 isolate z-[1] w-full h-full bg-cover' />
                </div>
            </div>

            <div className="  [border:solid_1px_gray] bg-BgGrey rounded-lg p-5 max-w-[340px] md:max-w-[500px] mx-auto">
                <div className="">
                    <h1 className="text-PrimColor text-2xl mb-3">Invest better</h1>
                    <p className="text-SecColor text-md">Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress</p>
                </div>
                <div className="grid select-none place-items-center relative h-[250px] md:h-[320px]">
                    <Image src={wallet} alt='money' draggable={false} className='w-[100px] z-[2]' />
                    <Image src={grid} alt='grid' draggable={false} className='absolute inset-0 isolate z-[1] w-full h-full bg-cover' />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-4 gap-y-3 text-PrimColor place-items-center my-10 max-w-[1200px] mx-auto">
            <h1 className="md:text-4xl sm:text-3xl font-bold">50+</h1>
            <h1 className="md:text-4xl sm:text-3xl font-bold">50,000+</h1>
            <h1 className="md:text-4xl sm:text-3xl font-bold">3M+</h1>
            <h1 className="md:text-4xl sm:text-3xl font-bold">5</h1>

            <p className="text-SecColor text-[11px] sm:text-sm md:text-md lg:text-lg">CITIES</p>
            <p className="text-SecColor text-[11px] sm:text-sm md:text-md lg:text-lg">TRANSITIONS</p>
            <p className="text-SecColor text-[11px] sm:text-sm md:text-md lg:text-lg">USERS</p>
            <p className="text-SecColor text-[11px] sm:text-sm md:text-md lg:text-lg">USER RATINGS</p>
        </div>

        <div className='py-10 w-full xl:w-[1200px] mx-auto h-[500px] md:h-auto px-5'>
        <Image src={content} priority alt='banner' className='h-full bg-cover w-full object-cover rounded-xl' />
      </div>

    </section>
  )
}

export default Confident