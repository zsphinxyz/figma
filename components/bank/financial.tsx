
import Image from 'next/image';
import contentImg from '@/assets/bank/content_img.png'
import money1 from '@/assets/bank/money-send.svg'
import money2 from '@/assets/bank/money-recive_2.svg'
import Section from './section';

type info = {
  h: string,
  p: string
}

const Info = ({h, p}:info) => {
  return(
    <div className=" flex-1">
      <h1 className='text-PrimColor text-2xl mb-2'>{h}</h1>
      <p className='text-SecColor'>{p}</p>
    </div>
  )
}

const Finalcial = () => {
  return (
    <Section style="my-20" left={false}>
        <div className="px-3 max-w-[680px] mx-auto">
            <h1 className="text-PrimColor text-3xl text-center md:text-6xl">Your Financial Fredom, Your Way</h1>
            <p className="text-SecColor text-center my-8 md:text-xl">We believe that managing your finances should be effortless and cost-effective. That&apos;s why we offer you the freedom you deserve</p>
        </div>

        <div>
          <div className="py-10 w-full xl:w-[1200px] relative mx-auto h-[300px] sm:h-[400px] md:h-auto px-5">
            <Image src={contentImg} alt="content" className='h-full bg-cover w-full object-cover rounded-xl' />

            <div className=" p-1 md:p-3 absolute left-[20%] top-10 md:top-24 bg-white rounded-lg"> 
              <Image src={money1} alt='seng' className='w-5 md:w-10 mb-5 mx-auto' />
              <div className="">
                <p className="text-[11px] text-SecColor">Sent</p>
                <p className="text-sm sm:text-md font-bold">$250.12</p>
              </div>
            </div>

            <div className=" p-1 md:p-3 absolute right-[20%] bottom-10 md:bottom-24 bg-white rounded-lg"> 
              <Image src={money2} alt='seng' className='w-5 md:w-10 mb-5 mx-auto' />
              <div className="">
                <p className="text-[11px] text-SecColor">received</p>
                <p className="text-sm sm:text-md font-bold">$250.12</p>
              </div>
            </div>

          </div>

          <div className="px-5 flex gap-10 flex-col lg:flex-row lg:max-w-[1200px] mx-auto">
            <Info 
              h='No Minimun balance fees' 
              p="Say goodbye to minimum balance fees. Your account, your balance no hidden charges"
            />
            <Info 
              h='No monthly fees' 
              p="Bank with us without worrying about monthly fees. Keep more of your money where it belongs in your account"
            />
            <Info 
              h='No bank transfer fees' 
              p="Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees."
            />

          </div>
        </div>
    </Section>
  )
}

export default Finalcial