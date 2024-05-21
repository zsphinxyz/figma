import Nav from "@/components/bank/nav"
import Image from 'next/image'
import profile from '@/assets/bank/profile 1.png'
import Footer from '@/components/bank/footer'
import { LuBadgeCheck } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiCurrencyCircleDollarFill, PiArrowDownLeftFill } from "react-icons/pi";
import { SiConvertio } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";

const page = () => {
  const transcations = [
  {
    "id": 1,
    "name": "Margarethe",
    "money": "$124.40",
    "send": true,
    "date": "2/22/2023",
    "time": "6:27 AM"
  }, {
    "id": 2,
    "name": "Veronike",
    "money": "$48.38",
    "send": true,
    "date": "11/26/2022",
    "time": "11:42 PM"
  }, {
    "id": 3,
    "name": "Elsbeth",
    "money": "$34.87",
    "send": true,
    "date": "10/14/2023",
    "time": "8:14 AM"
  }, {
    "id": 4,
    "name": "Errol",
    "money": "$112.86",
    "send": true,
    "date": "2/16/2023",
    "time": "10:11 AM"
  }, {
    "id": 5,
    "name": "Phineas",
    "money": "$60.62",
    "send": false,
    "date": "4/27/2023",
    "time": "2:33 AM"
  }, {
    "id": 6,
    "name": "Jason",
    "money": "$55.30",
    "send": false,
    "date": "11/14/2023",
    "time": "8:12 PM"
  }, {
    "id": 7,
    "name": "Olympie",
    "money": "$49.41",
    "send": true,
    "date": "8/6/2023",
    "time": "4:31 AM"
  }, {
    "id": 8,
    "name": "Heddie",
    "money": "$111.24",
    "send": true,
    "date": "8/3/2023",
    "time": "6:10 AM"
  }, {
    "id": 9,
    "name": "Barbabra",
    "money": "$36.16",
    "send": true,
    "date": "12/10/2022",
    "time": "12:08 AM"
  }, {
    "id": 10,
    "name": "Harmon",
    "money": "$26.12",
    "send": true,
    "date": "12/6/2022",
    "time": "5:14 PM"
  }, {
    "id": 11,
    "name": "Brnaby",
    "money": "$21.86",
    "send": false,
    "date": "11/14/2023",
    "time": "9:26 AM"
  }, {
    "id": 12,
    "name": "Chalmers",
    "money": "$31.89",
    "send": false,
    "date": "8/20/2023",
    "time": "9:38 PM"
  }, {
    "id": 13,
    "name": "Sallyann",
    "money": "$68.07",
    "send": true,
    "date": "6/29/2023",
    "time": "9:05 AM"
  }, {
    "id": 14,
    "name": "Francklin",
    "money": "$63.43",
    "send": false,
    "date": "5/15/2023",
    "time": "2:45 AM"
  }, {
    "id": 15,
    "name": "Maison",
    "money": "$105.74",
    "send": true,
    "date": "2/2/2023",
    "time": "8:54 AM"
  }, {
    "id": 16,
    "name": "Pamella",
    "money": "$29.15",
    "send": false,
    "date": "4/15/2023",
    "time": "5:34 AM"
  }, {
    "id": 17,
    "name": "Rikki",
    "money": "$71.15",
    "send": false,
    "date": "1/28/2023",
    "time": "2:41 AM"
  }, {
    "id": 18,
    "name": "Carley",
    "money": "$79.53",
    "send": true,
    "date": "2/13/2023",
    "time": "11:38 PM"
  }, {
    "id": 19,
    "name": "Rebbecca",
    "money": "$71.60",
    "send": false,
    "date": "10/26/2023",
    "time": "12:50 PM"
  }, {
    "id": 20,
    "name": "Brewster",
    "money": "$120.15",
    "send": false,
    "date": "11/11/2023",
    "time": "8:27 PM"
  }
]
  return (
    <section className="">
        <Nav />

        <div className="max-w-xl mt-5 p-5 flex items-center rounded-xl bg-[#151515] mx-auto">
            <Image src={profile} alt="profile" className="w-16 h-16 rounded-full border-2 border-SecColor" />
            
            <div className="ml-5 mr-auto">
              <h1 className="text-PrimColor text-2xl">User Name
              <LuBadgeCheck className="text-green-500 text-xl inline ml-1" />
              </h1>
              
              <p className="text-SecColor text-sm">Level-1</p>
            </div>

            <div className="text-PrimColor font-bold text-lg">
              $ 2,414.32
            </div>
        </div>

        <div className="bg-[#151515] p-5 max-w-xl mx-auto rounded-xl mt-5 flex gap-3 items-center justify-center">

          <div className="flex justify-center flex-1 hover:bg-[#2f2f2f] cursor-pointer transition p-2 rounded-md flex-col items-center bg-[#1f1f1f]">
            <BsGraphUpArrow className="text-3xl text-PrimColor mb-3" />
            <p className="text-SecColor text-sm">Dashboard</p>
          </div>
          <div className="flex justify-center flex-1 hover:bg-[#2f2f2f] cursor-pointer transition p-2 rounded-md flex-col items-center bg-[#1f1f1f]">
            <PiCurrencyCircleDollarFill className="text-3xl text-PrimColor mb-3" />
            <p className="text-SecColor text-sm">Exchange</p>
          </div>
          <div className="flex justify-center flex-1 hover:bg-[#2f2f2f] cursor-pointer transition p-2 rounded-md flex-col items-center bg-[#2f5f2f]">
            <SiConvertio className="text-3xl flex-grow flex-shrink-0 text-PrimColor mb-3" />
            <p className="text-SecColor text-sm">Transactions</p>
          </div>
          <div className="flex justify-center flex-1 hover:bg-[#2f2f2f] cursor-pointer transition p-2 rounded-md flex-col items-center bg-[#1f1f1f]">
            <FaCreditCard className="text-3xl text-PrimColor mb-3" />
            <p className="text-SecColor text-sm">Cards</p>
          </div>
          
        </div>

        <div className="bg-[#151515] max-w-xl mx-auto h-96 rounded-xl flex-col my-5 flex overflow-y-scroll">
          {
            transcations.map((i, j) => (
              <div key={j} className="flex hover:bg-slate-500/10 px-5 py-3 justify-between w-full border-b-[1px] border-[#2f2f2f]">
                <div className="text-PrimColor">
                  <p className={`text-lg ${i.send ? 'text-green-500' : 'text-red-500'}`}>{i.money}</p>
                  <p className="text-sm text-SecColor">{i.send ? 'From' : 'To'} {i.name}</p>
                </div>

                <div className="ml-auto flex flex-col justify-center items-center">
                  <PiArrowDownLeftFill className={`text-PrimColor text-xl ${i.send ? 'rotate-0 text-green-500' : 'rotate-180 text-red-500'}`} />
                  <p className="text-sm text-SecColor/50">{i.date} &#40;{i.time}&#41;</p>
                </div>
            </div>
            ))
          }
        </div>

        <Footer />
        
    </section>
  )
}

export default page