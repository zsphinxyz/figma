import Image from 'next/image'

import logo from '@/assets/bank/logo.svg'
import grid from '@/assets/bank/Grid.png'
import coin from '@/assets/bank/coins.png'
import wallet from '@/assets/bank/wallet-minus.png'
import bar from '@/assets/bank/bars.png'
import profile from '@/assets/bank/profile 3.png'

import icon1 from '@/assets/bank/card4/document-chart-bar.png'
import icon2 from '@/assets/bank/card4/gift.png'
import icon3 from '@/assets/bank/card4/shopping-bag.png'
import icon4 from '@/assets/bank/card4/ticket.png'
import icon5 from '@/assets/bank/card4/Union.png'
import icon6 from '@/assets/bank/card4/wallet.png'


const Card1 = () => {
    return(
        <div className='flex flex-col text-sm items-center gap-3 text-PrimColor py-14 relative z-[1] overflow-hidden'>
            <div className="px-1 py-4 [border:solid_1px_#777] bg-[#222] text-center whitespace-break-spaces w-[85%] bg-stones-500 rounded-xl"> <Image src={logo} alt='logo' className='inline-block w-5 -rotate-90 bg-SecColor rounded-sm ' /> +$22.1 Received from Amy Jr</div>
            <div className="px-1 py-4 [border:solid_1px_#777] bg-[#222] text-center whitespace-break-spaces w-[95%] bg-stones-500 rounded-xl text-[16px]"><Image src={logo} alt='logo' className='inline-block w-5 -rotate-90 bg-SecColor rounded-sm ' /> +$300.1 Received from John Doe</div>
            <div className="px-1 py-4 [border:solid_1px_#777] bg-[#222] text-center whitespace-break-spaces w-[85%] bg-stones-500 rounded-xl"><Image src={logo} alt='logo' className='inline-block w-5 -rotate-90 bg-SecColor rounded-sm ' /> +$50.0 Received from John Kim</div>
            <Image src={grid} alt='grid' className='absolute inset-0 top-[-30px] isolate z-[-1] w-full h-full bg-cover' />
        </div>
    )
}

const Card2 = () => {
    return(
        <div className='flex flex-col text-sm items-end gap-3 text-PrimColor py-14 relative z-[1] overflow-hidden'>
            <div className="px-2 py-2 [border:solid_1px_#777] bg-[#222] whitespace-break-spaces w-[85%] bg-stones-500 translate-x-5 rounded-xl"><Image src={coin} alt='coin' className='inline-block bg-blue-600 w-9 p-2 rounded-md' /> Cryptocurrency</div>
            <div className="px-2 py-2 [border:solid_1px_#777] bg-[#222] whitespace-break-spaces w-[95%] bg-stones-500 translate-x-5 rounded-xl text-[16px]"> <Image src={wallet} alt='coin' className='inline-block bg-fuchsia-600 invert w-9 p-2 rounded-md' /> Smart Portfolio Investing</div>
            <div className="px-2 py-2 [border:solid_1px_#777] bg-[#222] whitespace-break-spaces w-[85%] bg-stones-500 translate-x-5 rounded-xl"> <Image src={bar} alt='coin' className='inline-block bg-orange-600 w-9 p-2 rounded-md' /> Sustainable Investing</div>
            <Image src={grid} alt='grid' className='absolute inset-0 top-[-30px] isolate z-[-1] w-full h-full bg-cover' />
        </div>
    )
}

const Card3 = () => {
    return(
        <div className='flex flex-col items-center gap-3  py-14 relative z-[1] overflow-hidden'>
            <div className="[border:solid_1px_#555] w-[90%] p-5 rounded-xl flex flex-wrap items-center gap-3 bg-[#1f1f1f]">
                <Image src={profile} alt='profile' className='rounded-full w-16' />
                <div>
                    <h4 className='text-2xl text-PrimColor font-bold'>Wade Warren</h4>
                    <p className='text-sm text-SecColor'>Private wealth manager</p>
                </div>
                <div className="text-SecColor mt-3">
                    <p className='text-base'>Send Message</p>
                </div>
            </div>
            <Image src={grid} alt='grid' className='absolute inset-0 top-[-30px] isolate z-[-1] w-full h-full bg-cover' />
        </div>
    )
}

const Card4 = () => {
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6]
    return(
        <div className='p-5 py-14 relative z-[1] overflow-hidden'>
            <div className="grid grid-cols-3 gap-5">
                {
                    icons.map((icon, index) => (
                            <Image key={index} src={icon} alt='icon' className='w-20 bg-[#1f1f1f] p-3 rounded-lg [border:solid_1px_#555]' />
                    ))
                }
            </div>
            <Image src={grid} alt='grid' className='absolute inset-0 top-[-30px] isolate z-[-1] w-full h-full bg-cover' />
        </div>
    )
}
 
const Card = () => {
  return (
    <section className='flex gap-5 flex-wrap max-w-[1200px] mx-auto'>
        <div className="bg-BgGrey w-[95%] max-w-[400px] mx-auto rounded-xl [border:solid_1px_#555]">
            <Card1 />
            <div className="px-5">
                <h3 className="text-2xl text-PrimColor font-bold">Seamless Payments</h3>
                <p className="text-SecColor py-5 text-md">Enjoy secure, seamless transactions that make managing your money a breeze.</p>
            </div>
        </div>
        
        <div className="bg-BgGrey w-[95%] max-w-[400px] mx-auto rounded-xl [border:solid_1px_#555]">
            <Card2 />
            <div className="px-5">
                <h3 className="text-2xl text-PrimColor font-bold">Smart Investing</h3>
                <p className="text-SecColor py-5 text-md">Grow your wealth confidently with our personalized investment solutions, tailored to your financial goals.</p>
            </div>
        </div>

        <div className="bg-BgGrey w-[95%] max-w-[400px] mx-auto rounded-xl [border:solid_1px_#555] ">
            <Card3 />
            <div className="px-5">
                <h3 className="text-2xl text-PrimColor font-bold">Wealth Management</h3>
                <p className="text-SecColor py-5 text-md">Make informed decisions for your financial future with our wealth management expertise.</p>
            </div>
        </div>

        <div className="bg-BgGrey w-[95%] max-w-[400px] mx-auto rounded-xl [border:solid_1px_#555] ">
            <Card4 />
            <div className="px-5">
                <h3 className="text-2xl text-PrimColor font-bold">Financial Planning</h3>
                <p className="text-SecColor py-5 text-md">Achieve your financial dreams with our comprehensive financial planning services, guiding you toward a secure future</p>
            </div>
        </div>

    </section>
  )
}



export default Card