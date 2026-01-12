
import gly1 from '@/assets/school/gallery1.jpg'
import gly2 from '@/assets/school/gallery2.jpg'
import gly3 from '@/assets/school/gallery3.jpg'
import gly4 from '@/assets/school/gallery4.jpg'
import gly5 from '@/assets/school/gallery5.jpg'
import gly6 from '@/assets/school/gallery6.jpg'

import Cover from '@/components/school/cover'
import Footer from '@/components/school/footer'
import Header from '@/components/school/header'
import Image from 'next/image'

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto">
      <Cover text='Gallery' />

      <section className="py-5">
        <Header text1='Our' text2='Gallery' />

        <div className="flex flex-wrap justify-around gap-y-10 *:rounded-md">
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />
          <Image src={gly1} alt='img' width={gly1.width} height={gly1.height} className='aspect-square w-full max-w-sm object-cover object-center mx-auto'  />

        </div>

      </section>

    </section>
  )
}
