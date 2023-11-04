import Hero from '@/components/bank/hero'
import Feature from '@/components/bank/feature'
import Nav from '@/components/bank/nav'
import Card from '@/components/bank/card'

const page = () => {
  return (
    <>
    <Nav />
    <main>
        <Hero />
        <Feature />
        <Card />
        <p className='text-SecColor text-xl my-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis quia repellendus delectus nemo. Nihil expedita, saepe vitae excepturi neque exercitationem nesciunt provident, autem pariatur voluptates perferendis debitis quisquam veniam dolores rerum ipsa eos corporis accusamus perspiciatis rem consequuntur quam, non esse fuga. Sint veritatis, aut amet corrupti quos voluptates!
        </p>
    </main>
    </>
  )
}

export default page