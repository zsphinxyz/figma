import Link from 'next/link'

import Button from '@/components/bank/button'

const Nav = () => {
  return (
    <>
    <div className=' text-PrimColor flex justify-between py-6 items-center max-w-[1440px] mx-auto'>

      <div className='ml-10 flex flex-row gap-2 items-center'>
        <svg fill="#000000" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='p-1 bg-white rounded-full -rotate-90'>
          <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,1,0,1-1.414,0Z"/>
        </svg>
        <h1 className='text-3xl'>Raft</h1>
      </div>

        {/* Humbueger Menu  */}
      <div className='mr-10 lg:hidden'>
      <svg width="25" height="20" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.164246 1.25C0.164246 0.835786 0.500032 0.5 0.914246 0.5H17.4142C17.8285 0.5 18.1642 0.835786 18.1642 1.25C18.1642 1.66421 17.8285 2 17.4142 2H0.914246C0.500032 2 0.164246 1.66421 0.164246 1.25ZM0.164246 6.5C0.164246 6.08579 0.500032 5.75 0.914246 5.75H17.4142C17.8285 5.75 18.1642 6.08579 18.1642 6.5C18.1642 6.91421 17.8285 7.25 17.4142 7.25H0.914246C0.500032 7.25 0.164246 6.91421 0.164246 6.5ZM0.164246 11.75C0.164246 11.3358 0.500032 11 0.914246 11H17.4142C17.8285 11 18.1642 11.3358 18.1642 11.75C18.1642 12.1642 17.8285 12.5 17.4142 12.5H0.914246C0.500032 12.5 0.164246 12.1642 0.164246 11.75Z" fill="white"/>
      </svg>
      </div>

      <div className="hidden lg:block">
        <ul className='flex flex-row gap-10 text-SecColor'>
          <li>Solutions</li>
          <li>Learn</li>
          <li>About</li>
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-10 mr-10">
        <Link href="/">Login</Link>
        <Button text="Get Started" />
      </div>

    </div>
    <div className='w-full h-[1px] bg-SecColor ' />


    </>
  )
}

export default Nav