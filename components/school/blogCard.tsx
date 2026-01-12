import Image, { StaticImageData } from "next/image";
import { Fade } from "./ani";
import Link from "next/link";

import { IoEyeSharp } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";

export default function BlogCard({img}:{img:StaticImageData}) {
  return (
    <Fade>
      <Link href='' className="link md:max-w-[360px] group w-full p-3 shadow-sm bg-background shadow-black/50 rounded-[10px] flex md:flex-col gap-2">
        <div className="overflow-hidden">
          <Image
            src={img}
            width={480}
            height={480}
            alt="blog"
            className="aspect-square h-full w-full md:w-full origin-center object-cover rounded-[5px] group-hover:scale-105 transition"
          />
        </div>
        <div className="text-sm sm:text-lg md:text-inherit">
          <p className="text-ellipsis hyphens-auto text-pretty md:mt-2 text-foreground/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ducimus, est in nam illum. Ipsum ab ut debitis exercitationem.</p>

          <div className="my-1 sm:my-2 flex items-center justify-between px-1">
            <p className="font-medium">Headmaster</p>
            <div className="flex gap-3 text-sm text-foreground/70">
              <p className="flex gap-1.5 items-center "><IoEyeSharp /> 29</p>
              <p className="flex gap-1.5 items-center"><BiSolidMessage /> 10</p>
            </div>
          </div>

          <p className="text-foreground/70 text-sm">September 12, 2021</p>
        </div>
      </Link>
    </Fade>
  )
}
