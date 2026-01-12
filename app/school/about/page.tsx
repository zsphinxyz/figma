import Image from "next/image";
import img from '@/assets/school/gallery1.jpg'
import img2 from '@/assets/school/gallery2.jpg'
import Header from "@/components/school/header";
import Cover from "@/components/school/cover";

export default function About() {
  return (
    <section className="w-full min-h-dvh max-w-screen-2xl mx-auto">

      <Cover text="About Us" />

      <div className="p-2 mt-5">
        <p className="text-sm sm:text-base sm:text-center md:text-xl leading-relaxed md:leading-8">
        One of the most important, yet underrated, pages on an entire website is the About Us page, particularly for small- and medium-sized business owners (SMBs). The About Us page is one of your best chances to create a meaningful connection with a site visitor that builds confidence in the potential customer and lays the foundation of a solid business relationship. 
        In this blog post, we’ll outline what an About Us page is, a few of the most important elements of an About Us page, show off some awesome About Us page examples, and highlight a few of the beautiful About Us page templates that are available to Duda customers and partners.
        </p>
      </div>

      <div className="flex w-full flex-col md:flex-row px-2 md:px-4 py-5 gap-2 md:gap-4 my-10">
        <div className="size-full md:basis-1/2">
          <Image src={img} width={img.width} height={img.height} alt="our mission" className="h-full max-w-96 md:max-w-full md:h-96 mx-auto object-cover"/>
        </div>
        
        <div className="size-full basis-1/2 flex flex-col">
          <Header text1="Our" text2="Mission" />
          <p className="link p sm:text-lg lg:text-xl md:leading-7 xl:text-2xl text-balance text-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut reprehenderit labore voluptas minima, sapiente porro nisi ipsum ipsam quo nam ullam dignissimos voluptatem dolorem veniam saepe at vel, hic deserunt accusamus, explicabo cum. Sunt illum quod molestias provident Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, laudantium. tenetur quibusdam consequuntur. Itaque quod beatae dolores, earum ut explicabo minima!
          </p>
        </div>
      </div>


      <div className="flex w-full flex-col md:flex-row-reverse px-2 md:px-4 py-5 gap-2 md:gap-4 my-10">
        <div className="size-full md:basis-1/2">
          <Image src={img2} width={img.width} height={img.height} alt="our mission" className="h-full max-w-96 md:max-w-full md:h-96 mx-auto object-cover"/>
        </div>

        <div className="size-full basis-1/2 flex flex-col link">
          <Header text1="Our" text2="Vision" />
          <p className="p sm:text-lg lg:text-xl md:leading-7 xl:text-2xl text-balance text-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut reprehenderit labore voluptas minima, sapiente porro nisi ipsum ipsam quo nam ullam dignissimos voluptatem dolorem veniam saepe at vel, hic deserunt accusamus, explicabo cum. Sunt illum quod molestias provident Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, laudantium. tenetur quibusdam consequuntur. Itaque quod beatae dolores, earum ut explicabo minima!
          </p>
        </div>
      </div>

    </section>
  )
}
