import { PiFacebookLogo, PiGithubLogo, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi"
import { SiApplepay, SiGooglepay, SiMastercard, SiPaypal, SiVisa } from "react-icons/si"

function Footer() {
  return (
    <footer className="max-w-monitor mx-auto px-2 bg-ebg pt-20 -mt-14">
        <div className="flex flex-col lg:flex-row gap-3 p-2">

            <div className=" p-3 basis-1/3">
                <h1 className="text-4xl font-extrabold uppercase mb-2">shop.co</h1>
                <p className="">We have clothes that suits your style and which you're proud to wear. From wemen to men.</p>
                
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
                  <li className="pl-2 text-black/70">About</li>
                  <li className="pl-2 text-black/70">Features</li>
                  <li className="pl-2 text-black/70">Works</li>
                  <li className="pl-2 text-black/70">Career</li>
                </ul>
                
                <ul className="basis-1/2 space-y-3">
                  <h1 className="text-2xl space-x-5">HELP</h1>
                  <li className="pl-2 text-black/70">Customer Support</li>
                  <li className="pl-2 text-black/70">Delivery Details</li>
                  <li className="pl-2 text-black/70">Terms & Conditions</li>
                  <li className="pl-2 text-black/70">Privacy Policy</li>
                </ul>
              </div>


              <div className="flex w-full">
                <ul className="basis-1/2 space-y-3">
                  <h1 className="text-2xl space-x-5">FAQ</h1>
                  <li className="pl-2 text-black/70">Account</li>
                  <li className="pl-2 text-black/70">Manage Deliveries</li>
                  <li className="pl-2 text-black/70">Orders</li>
                  <li className="pl-2 text-black/70">Payments</li>
                </ul>
                
                <ul className="basis-1/2 space-y-3">
                  <h1 className="text-2xl space-x-5">Resources</h1>
                  <li className="pl-2 text-black/70">Free eBooks</li>
                  <li className="pl-2 text-black/70">How to - Blog</li>
                  <li className="pl-2 text-black/70">Development Tutorial</li>
                  <li className="pl-2 text-black/70">Youtube Playlist</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="text-center mt-5 border-t border-esec py-5 flex flex-col md:flex-row md:justify-between px-3 md:px-5">
            <p className="text-esec">Shop.co@2000-2023. All Rights Reserved</p>
            <div className="flex mx-auto mt-3 md:mt-0 md:ml-auto md:mr-0 gap-5">
              <SiVisa         className="text-4xl w-auto bg-white px-3 py-1 rounded-sm" />
              <SiMastercard   className="text-4xl w-auto bg-white px-3 py-1 rounded-sm" />
              <SiPaypal       className="text-4xl w-auto bg-white px-3 py-1 rounded-sm" />
              <SiApplepay     className="text-4xl w-auto bg-white px-3 py-1 rounded-sm" />
              <SiGooglepay    className="text-4xl w-auto bg-white px-3 py-1 rounded-sm" />
            </div>
        </div>
    </footer>
  )
}

export default Footer