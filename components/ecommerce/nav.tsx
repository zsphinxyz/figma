'use client'
import Link from "next/link"
import { useState } from "react"
import { BiCart, BiSolidDownArrow } from "react-icons/bi";
import { FaBars, FaMagnifyingGlass, FaPlus, FaUser } from "react-icons/fa6";

function Nav() {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    const [shop, setShop] = useState(false)
    const [ad, setAd] = useState(false)
    console.log('reRendered')

  return (
    <nav className="bg-white mx-auto w-full select-none ">

        <div className={`w-full bg-black text-white/75 text-center py-2 flex justify-between px-1 sm:px-5 text-[12px] sm:text-lg ${ad && 'hidden'}`}>
            <p className="w-full">Sign up and get 20% off to your first order. <Link href='#' className="text-white underline italic">Sign Up Now</Link></p>
            <button><FaPlus className="rotate-45 text-white" onClick={() => setAd(true)} /></button>
        </div>

        <section className="flex max-w-monitor py-5 bg-white px-5 gap-3 lg:gap-5 items-center mx-auto">
            <div className="flex gap-2 sm:gap-5 items-center">
                <div className="text-2xl font-bold md:hidden cursor-pointer" onClick={() =>setMenu(!menu)}>
                    {
                       menu ?  <FaPlus className="rotate-45" /> : <FaBars />
                    }
                </div>
                <Link href='/ecommerce' className="font-extrabold text-2xl sm:text-3xl">SHOP.CO</Link>
            </div>

            <ul 
            className={!menu ? `hidden md:flex gap-5 lg:gap-7 xl:gap-10 mx-auto flex-1 md:text-md xl:text-xl justify-center p-0 relative`
            : `${!menu ? 'hidden' : 'flex'} z-10 w-1/2 text-2xl absolute flex-col divide-y-2 left-0 top-20 bg-white`
            }
            >
                <li className="cursor-pointer group py-5 pl-5 hover:bg-ebg md:p-0 md:hover:bg-transparent md:text-stone-600 font-medium md:hover:text-black transition relative" onClick={()=>setShop(!shop)}>
                    Shop <BiSolidDownArrow className="inline" />
                    <ul className={'group-hover:flex group-hover:flex-col group-hover:divide-y group-hover:md:absolute md:group-hover:top-6 group-hover:md:left-0 group-hover:bg-white group-hover:shadow-md hidden'}>
                        <Link href="1" className="py-2 ml-3 md:py-3 md:hover:bg-ebg md:px-5 md:m-0 hover:bg-white">Latest</Link>
                        <Link href="1" className="py-2 ml-3 md:py-3 md:hover:bg-ebg md:px-5 md:m-0 hover:bg-white">Browse</Link>
                        <Link href="1" className="py-2 ml-3 md:py-3 md:hover:bg-ebg md:px-5 md:m-0 hover:bg-white">Info</Link>
                    </ul>
                </li> 
                <Link href="#" className="py-5 pl-5 hover:bg-ebg md:p-0 md:hover:bg-transparent md:text-stone-600 font-medium md:hover:text-black transition">On Sale</Link>
                <Link href="#" className="py-5 pl-5 hover:bg-ebg md:p-0 md:hover:bg-transparent md:text-stone-600 font-medium md:hover:text-black transition">New Arrivals</Link>
                <Link href="#" className="py-5 pl-5 hover:bg-ebg md:p-0 md:hover:bg-transparent md:text-stone-600 font-medium md:hover:text-black transition">Brands</Link>
            </ul>

            {/* Backdrop */}
            { 
                menu && <div onClick={()=>setMenu(false)} className="absolute w-screen h-[calc(100vh-80px)] left-0 top-20 bg-black/20 z-0" />
            }


            <div className="ml-auto flex:1 sm:flex-[0.7]">
                <ul className="flex gap-2 lg:gap-5 text-2xl justify-end">
                    <li className="group w-full flex bg-ebg relative rounded-full items-center">
                        <input placeholder="Search Products..." type="search" className={`w-full pl-10 origin-right block py-2 rounded-full transition-all bg-transparent h-full focus:ring-1 focus:ring-black px-3 text-sm outline-none `} /> 
                        <span className={`absolute top-1 left-1 cursor-pointer transition-all scale-75`} onClick={()=>setSearch(!search)}><FaMagnifyingGlass className="text-slate-500 ml-1 mt-0.5" /></span>
                    </li>
                    <li>
                        <BiCart />
                    </li>
                    <li>
                        <FaUser className="scale-75" />
                    </li>
                </ul>
            </div>
        </section>
    </nav>
  )
}

function Backdrop(bgclick:any) {
    return(
        <div onClick={bgclick} className="absolute w-screen h-screen left-0 top-0 bg-black/20 z-0" />
    )
}

export default Nav