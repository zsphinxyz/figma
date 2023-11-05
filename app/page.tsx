import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link href="/bank" className='text-white bg-pink-300 px-10 py-2 rounded-lg'>Bank</Link>
    </main>
  )
}
