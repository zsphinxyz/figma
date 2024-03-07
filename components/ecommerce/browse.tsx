import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import img1 from '@/assets/ecommerce/browse1.png'
import img2 from '@/assets/ecommerce/browse2.png'
import img3 from '@/assets/ecommerce/browse3.png'
import img4 from '@/assets/ecommerce/browse4.png'
import { HTMLAttributes } from "react"

function Browser() {
  return (
    <section className="mx-auto max-w-monitor p-5 flex mt-10">
        <div className="px-5 md:pt-10 md:pb-14 bg-ebg rounded-2xl lg:rounded-3xl w-full">
            <h1 className="eheader my-10">Browse by dress style</h1>

            <div className="flex flex-col gap-5 md:p-5 lg:px-10 xl:px-16 basis-full">
                <div className="flex flex-col md:flex-row gap-5">
                    <Box basis={['basis-[60%] active:basis-full transition-all']} img={img1} text="Casual" />
                    <Box basis={['basis-full']} img={img2} text="Formal" />
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <Box  basis={['basis-full']} img={img3} text="Party" />
                    <Box  basis={['basis-[60%] active:basis-full transition-all']} img={img4} text="Gym" />
                </div>
            </div>
        </div>
    </section>
  )
}

function Box({img, text, basis}: {img:StaticImport, text:string, basis:[string]}) {
    return(
        <div className={`relative ${basis}`}>
            <Image src={img} draggable={false} alt='img' className="w-full select-none h-44 sm:h-56 lg:h-72 xl:h-96 rounded-3xl object-cover" />
            <p className="text-3xl font-bold absolute left-10 top-7 select-none">{text}</p>
        </div>
    )
}

export default Browser