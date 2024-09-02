
import Header from "@/components/school/header";
import Image, { StaticImageData } from "next/image";
import banner from '@/assets/school/banner2.jpg'
import Link from "next/link";
import { Fade } from "./ani";

import blog1 from '@/assets/school/blog_1.jpg'
import blog2 from '@/assets/school/blog_2.jpg'
import blog3 from '@/assets/school/blog_3.jpg'
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";


function BlogCard({img}:{img:StaticImageData}) {
  return (
    <Fade>
      <Link href='' className="link group w-full p-3 shadow-sm bg-background shadow-black/50 rounded-[10px] flex md:flex-col gap-2">
        <div className="overflow-hidden">
          <Image
            src={img}
            width={480}
            height={480}
            alt="blog"
            className="aspect-square w-1/3 md:w-full origin-center object-cover rounded-[5px] group-hover:scale-105 transition"
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

export default function Blogs() {
  return (
    <section className="bg-foreground/10 px-1 sm:px-2 md:px-3 lg:px-5 py-10">
      <Header text1="Latest" text2="Blog" />
      <div className="flex flex-col md:flex-row gap-5">
        <BlogCard img={blog1} />
        <BlogCard img={blog2} />
        <BlogCard img={blog3} />
      </div>
      <button className="school_btn">More Articles {'-->'}</button>
    </section>
  )
}
