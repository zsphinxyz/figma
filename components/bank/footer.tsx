import Image from "next/image"
import qr from '@/assets/bank/QR.png'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-10 px-5">
        <div className='pl-10 pb-5 flex flex-row gap-2 items-center [border-bottom:solid_1px_#777] mb-10 max-w-[1200px] mx-auto'>
          <svg fill="#000000" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='p-1 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full -rotate-90'>
          <path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,1,0,1-1.414,0Z"/>
          </svg>
          <h1 className='text-5xl text-PrimColor md:pl-5'>Raft</h1>
        </div>

      <div className="flex flex-wrap gap-5 max-w-[1200px] mx-auto justify-between">

        <div className="w-full flex-grow flex-shrink-0 flex flex-row p-2 gap-1 [border:dashed_2px_#aaa] rounded-lg max-w-[340px]">
          <Image src={qr} alt='sthl qr' className="w-[70px] mx-auto bg-white p-1 object-contain aspect-square"/>
          <div className="space-y-2">
            <p className="text-PrimColor text-sm ">Scan to download App on the Playstore and Appstore.</p>
            <div className="flex gap-2">
              <BiLogoPlayStore className="text-white" />
              <FaApple className="text-white" />
            </div>
          </div>
        </div>

        <div className="text-PrimColor w-[calc(50%-20px)] md:w-auto">
          <h1 className="font-bold mb-3">About Us</h1>
          <ul className="text-sm space-y-3 text-SecColor">
            <li className="">Our Company</li>
            <li className="">Careers</li>
            <li className="">Press kits</li>
          </ul>
        </div>

        <div className="text-PrimColor w-[calc(50%-20px)] md:w-auto">
          <h1 className="font-bold mb-3">Legal</h1>
          <ul className="text-sm space-y-3 text-SecColor">
            <li className="">Terms of use</li>
            <li className="">Privacy policy</li>
            <li className="">About us</li>
          </ul>
        </div>

        <div className="text-PrimColor w-[calc(50%-20px)] md:w-auto">
          <h1 className="font-bold mb-3">Support</h1>
          <ul className="text-sm space-y-3 text-SecColor">
            <li className="">Contact us</li>
            <li className="">FAQ</li>
          </ul>
        </div>

      </div>

      <div className="flex flex-wrap justify-between my-5 max-w-[1200px] mx-auto gap-3 sm:gap-0">
        <select name="Country" className="bg-transparent text-PrimColor outline-none">
          <option className="text-slate-950 bg-transparent" value="English">English</option>
          <option className="text-slate-950 bg-transparent" value="Spanish">Spanish</option>
          <option className="text-slate-950 bg-transparent" value="French">French</option>
          <option className="text-slate-950 bg-transparent" value="Russia">Russia</option>
          <option className="text-slate-950 bg-transparent" value="Myanmar">Myanmar</option>
        </select>


        <div className="text-PrimColor text-sm ">
          &copy; Raft Corp,LLC.
        </div>
        
        <div className="text-PrimColor flex-grow sm:flex-grow-0 text-sm text-center">
          Credit to Original <a href="https://www.figma.com/community/file/1297717078279898502/raft-fintech-website" target="_blank" className="text-blue-500 underline"> Figma Project </a> by 
          <a href="https://www.figma.com/@adeolaadekoya" className="text-blue-500 underline" target="_blank"> adeola</a>
        </div>

      </div>

    </footer>
  )
}

export default Footer