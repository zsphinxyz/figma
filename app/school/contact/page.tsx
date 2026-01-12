'use client'

import Cover from "@/components/school/cover";
import Header from "@/components/school/header";
import { Suspense, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import dynamic from "next/dynamic";

export default function Page() {

  const Map = useMemo(() => dynamic(
    () => import('@/components/school/map'),
    {
      loading: () => <p className="">Map is Loading...</p>,
      ssr: false
    }
  ), [])


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

          <div className="md:basis-2/3 min-h-96 bg-blue-500/20 ">
            {/* <Suspense fallback={'Loading...'}> */}
              <Map />
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
