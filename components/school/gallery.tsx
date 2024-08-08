import Header from '@/components/school/header'
import img from '@/assets/school/banner3.jpg'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div className='py-8'>
      <Header text1='Our' text2='Gallery' />

      <div className="p-3 flex gap-10 *:rounded-md">
        <Image src={img} alt='img' width={img.width} height={img.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
        <Image src={img} alt='img' width={img.width} height={img.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
        <Image src={img} alt='img' width={img.width} height={img.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
      </div>
    </div>
  )
}
