import Header from '@/components/school/header'
import banner from '@/assets/school/banner.png'
import Image from 'next/image'

function Activity() {
  return(
    <div className="flex gap-2 items-center md:flex-col p-1 sm:p-3 cursor-default">
      <Image src={banner} alt='test' width={banner.width} height={banner.width} draggable={false} className='select-none aspect-square w-32 md:w-48 lg:w-52 object-cover object-center md:rounded-full' />
      <div className="md:text-center">
        <h3 className="text-2xl lg:text-3xl font-medium text-foreground/90 my-2">Painting</h3>
        <p className="text-foreground/70 lg:text-lg">Painting is the expression or application of human creative skill and imagination, typically in a visual form.</p>
      </div>
     </div>
  )
}

function Activities() {
  return (
    <section className="pt-10 pb-16">
     <Header text1='Our' text2='Activities' />

      <div className="flex flex-col md:flex-row gap-10 md:gap-3">
        <Activity />
        <Activity />
        <Activity />
      </div>

    </section>
  )
}

export default Activities