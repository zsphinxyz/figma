import Browser from "@/components/ecommerce/browse";
import Hero from "@/components/ecommerce/hero";
import Nav from "@/components/ecommerce/nav";
import New from "@/components/ecommerce/newarrival";
import Reviews from "@/components/ecommerce/reviews";
import { Suspense } from "react";
import Loading from "../loading";
import NewsLetter from "@/components/ecommerce/newsletter";
import Footer from "@/components/ecommerce/footer";

function Page() {
  
  // https://www.figma.com/file/Oej5SBUXHdh6DHBwFkmUAC/E-commerce-Website-Template-(Freebie)-(Community)?type=design&node-id=20-2&mode=design&t=JTtD27HalDfe108k-0

  return (
   
    <div className="cursor-default">
        <Nav />
        <Hero />
        <New />
        <Browser />
        <Reviews />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Page