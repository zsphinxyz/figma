import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

function Product({img, desc, review, price, discountValue=undefined}:
    {img:string | StaticImport, desc:string, review:number, price:string, discountValue?:{price:string, percent:string}}
    ) {
  return (
    <div className="basis-56 sm:basis-60 md:basis-72 py-2 px-1 lg:basis-1/4 lg:shrink shrink-0 space-y-1 group">
        <Image src={img} alt='product' className='rounded-xl md:rounded-2xl w-full select-none group-hover:ring-1 group-hover:ring-esec transition-all' draggable={false} />
        <p className="font-medium text-lg md:text-xl xl:text-2xl">{desc}</p>
        <div className="w-fit flex items-center">
            <span className={`overflow-hidden block select-none`} style={{maxWidth:`${(review/5 * 100)-23}%`}}>⭐⭐⭐⭐⭐</span>
            <span className="block text-sm md:text-lg">{review}/5</span>
        </div>
        <p className="text-lg md:text-xl">
            <span className="text-xl font-bold">${price}</span>
            {
                discountValue !== undefined && (
                    <> 
                        <span className="text-esec line-through px-1 text-xl font-bold select-none">${discountValue?.price}</span>
                        <span className="bg-red-500/20 text-sm px-2 py-1 rounded-full text-red-500 font-medium select-none">{discountValue?.percent}%</span>
                    </>
                )
            }
        </p>
    </div>
  )
}

export default Product