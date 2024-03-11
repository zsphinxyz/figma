import { PiFacebookLogo, PiGithubLogo, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi"
import { SiApplepay, SiGooglepay, SiMastercard, SiPaypal, SiVisa } from "react-icons/si"

function Footer() {
  return (
    <footer className="max-w-monitor mx-auto px-2 bg-ebg pt-20 -mt-14">
        <div className="flex flex-col lg:flex-row gap-3 p-2">

            <div className=" p-3 basis-1/3">
                <h1 className="text-4xl font-extrabold uppercase mb-2">shop.co</h1>
                <p className="">We have clothes that suits your style and which you&apos;re proud to wear. From wemen to men.</p>
                
                <div className="flex gap-3 my-3">
                  <PiTwitterLogo    className="text-3xl md:text-4xl border border-black/50 text-black/70 rounded-full p-1 shrink-0 hover:bg-black hover:text-white transition cursor-pointer"/>
                  <PiFacebookLogo   className="text-3xl md:text-4xl border border-black/50 text-black/70 rounded-full p-1 shrink-0 hover:bg-black hover:text-white transition cursor-pointer"/>
                  <PiInstagramLogo  className="text-3xl md:text-4xl border border-black/50 text-black/70 rounded-full p-1 shrink-0 hover:bg-black hover:text-white transition cursor-pointer"/>
                  <PiGithubLogo     className="text-3xl md:text-4xl border border-black/50 text-black/70 rounded-full p-1 shrink-0 hover:bg-black hover:text-white transition cursor-pointer"/>
                </div>
            </div>

            <div className="flex gap-5 flex-col md:flex-row basis-2/3">
              <div className="flex w-full">
                <ul className="basis-1/2 space-y-3">
                  <h1 className="text-2xl space-x-5">Company</h1>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">About</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Features</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Works</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Career</li>
                </ul>
                
                <ul className="basis-1/2 space-y-3">
                  <h1 className="text-2xl space-x-5">HELP</h1>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Customer Support</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Delivery Details</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Terms & Conditions</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Privacy Policy</li>
                </ul>
              </div>


              <div className="flex w-full">
                <ul className="basis-1/2 space-y-3">
                  <h1 className="text-2xl space-x-5">FAQ</h1>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Account</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Manage Deliveries</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Orders</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Payments</li>
                </ul>
                
                <ul className="basis-1/2 space-y-3">
                  <h1 className="text-2xl space-x-5">Resources</h1>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Free eBooks</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">How to - Blog</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Development Tutorial</li>
                  <li className="pl-2 text-black/70 hover:text-blue-500 cursor-pointer">Youtube Playlist</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="text-center mt-5 border-t border-esec py-5 flex flex-col gap-3 md:flex-row md:justify-between px-3 md:px-5">
            <p className="text-esec text-sm">Shop.co@2000-2023. All Rights Reserved</p>
            <div className="flex mx-auto mt-3 md:mt-0 md:ml-auto md:mr-0 gap-3">
              <SiVisa         className="text-3xl w-auto bg-white px-3 py-1 hover:bg-black hover:text-white rounded-sm" />
              <SiMastercard   className="text-3xl w-auto bg-white px-3 py-1 hover:bg-black hover:text-white rounded-sm" />
              <SiPaypal       className="text-3xl w-auto bg-white px-3 py-1 hover:bg-black hover:text-white rounded-sm" />
              <SiApplepay     className="text-3xl w-auto bg-white px-3 py-1 hover:bg-black hover:text-white rounded-sm" />
              <SiGooglepay    className="text-3xl w-auto bg-white px-3 py-1 hover:bg-black hover:text-white rounded-sm" />
            </div>
            <p className="text-sm">     
              Credit: <a className="text-blue-500 underline" href=" https://www.figma.com/community/file/1273571982885059508/e-commerce-website-template-freebie?searchSessionId=ltmce3zt-740clhvuuof" target="_blank" rel="noopener noreferrer">Figma Project </a>
              by <a className="text-blue-500 underline" href="https://www.figma.com/@hamzauix" target="_blank" rel="noopener noreferrer">Hamza Naeem</a>
            </p>
            
        </div>
    </footer>
  )
}

export default Footer