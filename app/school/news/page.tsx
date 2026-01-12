import BlogCard from "@/components/school/blogCard";
import Cover from "@/components/school/cover";
import Footer from "@/components/school/footer";
import Header from "@/components/school/header";

import blog1 from '@/assets/school/blog_1.jpg'
import blog2 from '@/assets/school/blog_2.jpg'
import blog3 from '@/assets/school/blog_3.jpg'

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto">
      <Cover text="News & Event" />

      <section className="py-5">
        <Header  text1="News &" text2="Event" />

        <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly gap-y-5">
          <BlogCard img={blog2} />
          <BlogCard img={blog3} />
          <BlogCard img={blog1} />
          <BlogCard img={blog3} />
          <BlogCard img={blog1} />
          <BlogCard img={blog2} />
          <BlogCard img={blog1} />
          <BlogCard img={blog3} />
          <BlogCard img={blog2} />
        </div>
      
        <button className="school_btn"> Load More {'-->'}</button>

      </section>

    </section>
  )
}
