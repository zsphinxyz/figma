
import Header from "@/components/school/header";

import blog1 from '@/assets/school/blog_1.jpg'
import blog2 from '@/assets/school/blog_2.jpg'
import blog3 from '@/assets/school/blog_3.jpg'

import BlogCard from '@/components/school/blogCard'

export default function Blogs() {
  return (
    <section className="bg-foreground/10 px-1 sm:px-2 md:px-3 lg:px-5 py-10">
      <Header text1="Latest" text2="Blog" />
      <div className="flex flex-col md:flex-row gap-5 justify-evenly">
        <BlogCard img={blog1} />
        <BlogCard img={blog2} />
        <BlogCard img={blog3} />
      </div>
      <button className="school_btn">More Articles {'-->'}</button>
    </section>
  )
}
