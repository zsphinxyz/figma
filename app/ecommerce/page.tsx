import Hero from "@/components/ecommerce/hero";
import Nav from "@/components/ecommerce/nav";
import New from "@/components/ecommerce/newarrival";

function Page() {
  
  // https://www.figma.com/file/Oej5SBUXHdh6DHBwFkmUAC/E-commerce-Website-Template-(Freebie)-(Community)?type=design&node-id=20-2&mode=design&t=JTtD27HalDfe108k-0

  return (
   
    <div className="cursor-default">
        <Nav />
        <Hero />
        <New />
    </div>
  )
}

export default Page