'use client'

import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Review({name}: {name:string}) {
    return(
        <div className="border border-esec/50 p-3 rounded-xl w-full max-w-[420px] mx-auto">
            <p>⭐⭐⭐⭐⭐</p>
            <h2 className="font-bold text-xl my-2 inline">{name}</h2> <IoCheckmarkCircle className="inline mb-1 text-xl text-green-500" />
            <p className="text-esec">
            &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I ve bought has exceeded my expectations.&quot;
            </p>
        </div>
    )
}


function Reviews() {
    const TOTALREVIEWS = 7
    const [view, setView] = useState(0)
  return (
    <section className="max-w-monitor mx-auto px-3 overflow-hidden">
        <h1 className="eheader mt-5">Our Happy Customers</h1>
        <div className="flex gap-3 md:gap-7 justify-end pr-5 md:pr-32 mt-5 mb-2 text-xl md:text-2xl">
            <button onClick={()=> setView(view == 0 ? view : view - 1)}><FaArrowLeft /></button>
            <button onClick={()=> setView(view == TOTALREVIEWS ? view : view + 1)}> <FaArrowRight /></button>
        </div>
        <div className={`w-[${(TOTALREVIEWS+1)*100}vw] lg:w-[300vw] xl:w-fit translate-x-[0vw]`} style={{translate: `${view*100 * -1}vw`, transition: 'all 200ms ease'}}>
            <div className="w-full xl:w-full flex gap-3">
                <Review name="0" />
                <Review name="1" />
                <Review name="2" />
                <Review name="3" />
                <Review name="4" />
                <Review name="5" />
                <Review name="6" />
                <Review name="7" />
            </div>
        </div>
    </section>
  )
}

export default Reviews