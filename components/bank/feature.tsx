import Image from 'next/image'
import Section from './section'

import logo1 from '@/assets/bank/forbes.png'
import logo2 from '@/assets/bank/cnbc.png'
import logo3 from '@/assets/bank/bloomberg.png'
import logo4 from '@/assets/bank/reuters.png'
import logo5 from '@/assets/bank/cnn.png'

import { getServerSession } from 'next-auth';
import { authOptions } from '@/Auth';

const Feature = async() => {
  const session = await getServerSession(authOptions)
  console.log(session)

  const logos = [logo1, logo2, logo3, logo4, logo5]
  return (
    <Section style='w-full mb-10'>
        <h1 className='uppercase text-SecColor text-2xl md:text-3xl text-center mb-10'>Featured and seen in</h1>
        <div className=' overflow-x-scroll lg:overflow-auto pb-5 flex items-center justify-center'>
          <div className="flex justify-center items-center w-[700px] lg:w-[900px] gap-5 md:gap-10 lg:gap-16 px-5">
            {
              logos.map((logo, index) => (
                <Image src={logo} key={index} alt='logo' className='object-contain' />
                ))
              }
          </div>
        </div>
        {
          session && (
            <>
              <p className='text-green-500 text-3xl text-center'>Login</p>
            </> 
            )
        }
    </Section>
  )
}

export default Feature