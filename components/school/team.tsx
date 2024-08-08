import Header from '@/components/school/header'
import Image from 'next/image'
import img from '@/assets/school/banner.png'

function MemberCard() {
  return(
    <div className="rounded-lg overflow-hidden flex md:w-80 shadow-md shadow-black/50 md:flex-col gap-2 cursor-default bg-background">
      <Image src={img} alt='img' width={img.width} height={img.height} className='shrink-0 w-1/3 md:w-full aspect-square object-cover object-center' />
    
      <div className="flex flex-col sm:gap-1 p-1 md:px-2">
        <p className="text-red-500">Headmaster</p>
        <h2 className="text-2xl font-bold">U Han Aye</h2>
        <p className="text-foreground/80 text-sm sm:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae alias aspernatur aut quo porro est animi</p>
        
        <div className="flex gap-2 text-lg">
          <p className="">🪵</p>
          <p className="">🐈</p>
          <p className="">💀</p>
          <p className="">⛄</p>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div className='bg-foreground/10 px-1 sm:px-3 py-10 mt-[1px]'>
      <Header text1='Meet Our' text2='Team' />
      <div className="flex flex-col gap-3 md:px-10 md:flex-row md:justify-around">
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  )
}
