import Image from 'next/image'
import profile1 from '@/assets/bank/profile 1.png'
import profile2 from '@/assets/bank/profile 2.png'
import profile3 from '@/assets/bank/profile 3.png'
import {StaticImageData} from 'next/image'

type UserT = {
    border: boolean,
    img: StaticImageData
}

const User = ({border, img}:UserT)=> {
    return(
        <div className={`w-full flex-shrink-0 md:flex-shrink ${border && 'border-r-[1px] border-SecColor'}`}>
            <p className="px-5 mt-10 text-sm md:text-lg">RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.</p>
            
            <div className="flex justify-between items-center px-5 my-5">
                <div>
                    <h3 className="text-xl font-bold">Robert Fox</h3>
                    <h4 className="text-[12px]">Happy RAFT User</h4>
                </div>

                <div className="">
                    <Image src={img} alt="profile" className="w-full rounded-full" />
                </div>
            </div>
        </div>
    )
}

const Members = () => {
  return (
    <section className="bg-pop py-10 max-w-[1200px] mx-auto my-10">
        <h1 className="text-3xl text-center block md:text-5xl">Join over 3 million <br />members</h1>
        <div className="flex overflow-auto ">
            <User img={profile1} border={true} />
            <User img={profile2} border={true} />
            <User img={profile3} border={false} />
        </div>
    </section>
  )
}

export default Members