import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link href="/bank" className='text-white bg-zinc-700 hover:bg-zinc-800 transition px-10 py-2 rounded-lg'>Bank</Link>
    </main>
  )
}
