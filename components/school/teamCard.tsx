import Image, { StaticImageData } from "next/image";
import { Fade } from "./ani";
import SocialLinks from "./socialLinks";



export default function TeamCard({ img, position, name }: { img: StaticImageData, position: string, name: string }) {
  return (
    <Fade>
      <div className="link md:max-w-[360px] rounded-lg overflow-hidden flex shadow-md shadow-black/50 md:flex-col gap-2 cursor-default bg-background">
        <Image src={img} alt='img' width={420} height={420} className='min-w-12 md:h-72 lg:h-80 md:w-full aspect-square object-cover object-center' />

        <div className="flex flex-col sm:gap-1 p-1 md:px-2">
          <p className="text-red-500 font-medium">{position}</p>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-foreground/80 text-sm sm:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae alias aspernatur aut quo porro est animi</p>
          <SocialLinks />
        </div>
      </div>
    </Fade>
  )
}