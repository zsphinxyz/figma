import Header from "@/components/school/header";
import Image from "next/image";
import banner from '@/assets/school/banner2.jpg'
import Link from "next/link";

function BlogCard() {
  return(
    <Link href='' className="w-full p-3 shadow-sm bg-background shadow-black/50 rounded-[10px] flex md:flex-col gap-2">
      <Image 
        src={banner} 
        width={banner.width/10} 
        height={banner.height/10} 
        alt="blog" 
        className="aspect-square w-1/3 md:w-full origin-center object-cover rounded-[5px]"
      />
      <div className="text-sm sm:text-lg md:text-inherit">
        <p className="text-ellipsis hyphens-auto text-pretty md:mt-2 text-foreground/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio ducimus, est in nam illum. Ipsum ab ut debitis exercitationem eum perspiciatis delectus impedit asperiores..</p>
        
        <div className="my-1 sm:my-2 flex items-center justify-between px-1">
          <p className="font-medium">Headmaster</p>
          <div className="flex gap-2 text-sm text-foreground/80">
            <p className="">👁️ 29</p>
            <p className="">✉️ 10</p>
          </div>
        </div>

        <p className="text-foreground/70 text-sm">September 12, 2021</p>
      </div>
    </Link>
  )
}

export default function Blogs() {
  return (
    <section className="bg-foreground/10 px-1 sm:px-2 md:px-3 lg:px-5 py-10">
      <Header text1="Latest" text2="Blog" />
      <div className="flex flex-col md:flex-row gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <button className="bg-red-500 mx-auto py-3 px-5 block mt-5 text-white">More Articles {'-->'}</button>
    </section>
  )
}
