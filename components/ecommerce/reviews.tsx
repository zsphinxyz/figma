import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Review({name}: {name:string}) {
    return(
        <div className="w-auto flex items-center justify-center py-2">
            <div className="border border-esec/50 p-3 rounded-xl mx-auto shrink-0 w-[300px] ">
                <p>⭐⭐⭐⭐⭐</p>
                <h2 className="font-bold text-xl my-2 inline">{name}</h2> <IoCheckmarkCircle className="inline mb-1 text-xl text-green-500" />
                <p className="text-esec">
                    &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I ve bought has exceeded my expectations.&quot;
                </p>
            </div>
        </div>
    )
}


function Reviews() {
  return (
    <section className="max-w-monitor mx-auto py-5 px-2">
        <h1 className="eheader mt-5">Our Happy Customers</h1>
        <div className='w-auto flex overflow-x-scroll'>
            <div className="flex gap-3  py-2">
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