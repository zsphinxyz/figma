import Browser from "@/components/ecommerce/browse";
import Hero from "@/components/ecommerce/hero";
import Nav from "@/components/ecommerce/nav";
import New from "@/components/ecommerce/newarrival";
import Reviews from "@/components/ecommerce/reviews";
import NewsLetter from "@/components/ecommerce/newsletter";
import Footer from "@/components/ecommerce/footer";

function Page() {
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