import Link from 'next/link'
import { LuLink } from 'react-icons/lu'

export default function Home() {
  return (
    <main className="flex justify-center flex-col gap-5 items-center h-screen">
      <Link href="/bank" target='_blank' className='min-w-[200px] text-center text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>Bank website</Link>
      <Link href="https://zkrist.vercel.app" target='_blank' className='min-w-[200px] text-center text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>E-Commerce website <LuLink className='inline' /> </Link>
      <Link href="/ecommerce" target='_blank' className='min-w-[200px] text-center text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>Online shop website</Link>
      <Link href="/school" target='_blank' className='min-w-[200px] text-center text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>School Website</Link>
    </main>
  )
}
