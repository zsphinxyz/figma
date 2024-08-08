import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center flex-col gap-5 items-center h-screen">
      <Link href="/bank" className='min-w-[200px] text-center text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>Bank</Link>
      <Link href="/ecommerce" className='min-w-[200px] text-center text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>E-Commerce</Link>
      <Link href="/school" className='min-w-[200px] text-center text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>School</Link>
    </main>
  )
}
