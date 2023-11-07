import Image from 'next/image';
import contentImg from '@/assets/bank/content_img.png'

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
    <section className="my-20">
        <div className="px-3 max-w-[680px] mx-auto">
            <h1 className="text-PrimColor text-3xl text-center md:text-6xl">Your Financial Fredom, Your Way</h1>
            <p className="text-SecColor text-center my-8 md:text-xl">We believe that managing your finances should be effortless and cost-effective. That's why we offer you the freedom you deserve</p>
        </div>

        <div>
          <div className="py-10 w-full xl:w-[1200px] mx-auto h-[500px] md:h-auto px-5">
            <Image src={contentImg} alt="content" className='h-full bg-cover w-full object-cover rounded-xl' />
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
              p="Seamlessly transfer funds without the extra cost.Send and receive money with zero bank transfer fees."
            />

          </div>
        </div>
    </section>
  )
}

export default Finalcial