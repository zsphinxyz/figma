'use client'

import Cover from "@/components/school/cover";
import Header from "@/components/school/header";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto">

      <Cover text="Contact us" />

      <section className="py-5">
        <Header text1="Contact" text2="& Find us" />

        <div className="flex flex-col md:flex-row">
          <div className="md:basis-1/3 px-5">
            <div className="p-5 bg-red-500 rounded-lg">
              <h1 className="uppercase text-3xl font-bold text-background">Contact Info</h1>
              <p className="mt-2 py-4 text-lg mb-3">You can always reach us via following contact details. We will give our best to reach you as possible.</p>

              <div className="grid grid-cols-[70px,100%] gap-y-5">
                <div className="font-medium">Phone:</div>
                <div className=" text-primary/90">+95 555 555 555 <br /> +95 555 555 555</div>

                <div className="font-medium">Email:</div>
                <div className=" text-primary/90">info20@gmail.com <br /> info21@gmail.com</div>

                <div className="font-medium">Address:</div>
                <div className="text-wrap w-9/12 md:w-[70%] text-primary/90">4 law castle agbole aro opp. fidelity bank omida, abeokuta.</div>
              </div>
            </div>

          </div>

          <div className="w-fit min-h-96 p-2">
            {/* <Suspense fallback={'Loading...'}> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1390.0721328993743!2d96.16820286468842!3d16.787151146522817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1768189800924!5m2!1sen!2smm" width="720" height="450" allowFullScreen style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* <Map /> */}
            {/* </Suspense> */}
          </div>
        </div>

        <div className="py-10">
          <Header text1="Get In" text2="Touch" />

          <form action="#" className="flex flex-col gap-2 md:gap-4 lg:gap-6 px-4 mx-auto max-w-[720px] mt-5 border-[0.5px] rounded-md border-foreground/5 py-4">
            <input type="text" className="px-2 py-3 text-lg md:py-4 md:px-3" placeholder="Name" />
            <input type="email" className="px-2 py-3 text-lg md:py-4 md:px-3" placeholder="Email" />
            <input type="text" className="px-2 py-3 text-lg md:py-4 md:px-3" placeholder="Subject" />
            <textarea placeholder="Message here..." rows={5} className="px-2 py-3 text-lg md:py-4 md:px-3 max-h-52"></textarea>
            <button className="bg-blue-300 px-5 py-3 text-lg">Send Message</button>
          </form>

        </div>
      </section>


    </section>
  )
}
