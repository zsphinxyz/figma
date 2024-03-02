import Link from 'next/link'
import Menu from './menu'

const Nav = () => {
  
  return (
    <>
    <div className='text-PrimColor relative flex justify-between py-6 items-center max-w-[1440px] mx-auto'>

      <div className='ml-10 flex flex-row gap-2 items-center'>
        <svg fill="#000000" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='p-1 bg-white rounded-full -rotate-90'>
          <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,1,0,1-1.414,0Z"/>
        </svg>
        <h1 className='text-3xl'>Raft</h1>
      </div>

      {/* On large screen  */}
      <div className="hidden lg:block">
        <ul className='flex flex-row gap-10 text-SecColor'>
          <li className='hover:text-PrimColor'> <Link href="#">Solutions</Link></li>
          <li className='hover:text-PrimColor'> <Link href="#">Learn</Link> </li>
          <li className='hover:text-PrimColor'> <Link  href="#">About</Link> </li>
        </ul>
      </div>

      <Menu />
      
    </div>
    <div className='w-full h-[1px] bg-SecColor ' />

    </>
  )
}

export default Nav