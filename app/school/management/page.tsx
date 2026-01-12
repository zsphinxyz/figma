import Cover from "@/components/school/cover";
import Image from "next/image";

import team1 from '@/assets/school/team1.jpg'
import team2 from '@/assets/school/team2.jpg'
import team3 from '@/assets/school/team3.jpg'
import SocialLinks from "@/components/school/socialLinks";
import Header from "@/components/school/header";
import Footer from "@/components/school/footer";
import TeamCard from "@/components/school/teamCard";


export default function Page() {
  return (
    <section className="max-w-7xl mx-auto">
      <Cover text="Management" />

      <div className=" my-5 flex flex-col md:flex-row-reverse p-2 lg:p-4">
        <div className="md:basis-1/2 relative">
          <Image src={team1} alt="team" width={team1.width} height={team1.height} className="max-w-96 md:max-w-lg w-full mx-auto h-full object-cover object-center" />
          <p className="text-center text-background/80 text-sm absolute bottom-0 left-1/2 -translate-x-1/2 select-none font-medium w-full">Mr. Heisenberg teaching Chemistry at MIT. (Oct-2020)</p>
        </div>

        <div className="md:basis-1/2 p-2">
          <h1 className="uppercase text-2xl font-bold text-red-500 text-center md:text-left md:text-3xl">The Founder</h1>
          <h2 className="uppercase text-lg font-medium text-center md:text-left md:text-xl">Mr. Heisenberg</h2>
          <p className="py-2 text-foreground/80 sm:text-lg md:leading-7 lg:text-xl lg:leading-9">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, voluptatem eum pariatur provident nobis sapiente placeat, at aspernatur vitae dolorum rerum eligendi aliquid porro fugit similique commodi sunt nam vel amet. Ut, ea, sit cupiditate inventore dicta provident non, quis commodi amet vitae officiis tempore atque. Asperiores temporibus tenetur aspernatur!
          </p>
            <SocialLinks />
        </div>
      </div>

      <div className="bg-foreground/5 p-5 md:py-10 rounded-lg lg:w-[calc(100%-60px)] lg:mx-auto">

        <Header text1="Meet Our" text2="Team" />

        <div className="flex flex-wrap gap-y-5 md:gap-y-10 lg:gap-y-12 justify-evenly items-center">

          <TeamCard img={team3} position='Headmaster' name='Mr. Hawking' />
          <TeamCard img={team2} position='Headmistress' name='Mr. Hawking' />
          <TeamCard img={team3} position='Teacher' name='Mr. Hawking' />
          <TeamCard img={team2} position='Teacher' name='Mr. Hawking' />
          <TeamCard img={team3} position='Teacher' name='Mr. Hawking' />
          <TeamCard img={team2} position='Teacher' name='Mr. Hawking' />
          <TeamCard img={team3} position='Assistance' name='Mr. Hawking' />
          <TeamCard img={team2} position='Assistance' name='Mr. Hawking' />
          <TeamCard img={team3} position='Assistance' name='Mr. Hawking' />

        </div>

      </div>

    </section>
  )
}
