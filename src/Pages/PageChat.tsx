import {BsFillHouseAddFill, BsFillBusFrontFill} from "react-icons/bs"
import {GiLion} from "react-icons/gi"
import {FaCampground} from "react-icons/fa"
import{AiOutlinePlus} from "react-icons/ai"

const PageChat = () => {


  return (
    <div className="bg-[url('../../public/bilder/belvedere.jpg')] bg-center bg-no-repeat w-[100vw] h-[100vh] bg-cover object-cover">
     
    <div className="  flex justify-center  text-center">
      <h2 className=" text-[3rem] text-white mt-8 bg-blue-700 rounded-full p-4 w-[30rem]">Stunden & Prices</h2>
    </div>
    <div className=" flex flex-col items-center justify-center mt-[3rem] divide-y divide-slate-500">
      <p className=" flex gap-8 items-center bg-slate-200 w-[30rem] p-4 justify-center text-[1.5rem] rounded cursor-pointer hover:bg-slate-400"> <AiOutlinePlus/>Öffnungzeit <BsFillHouseAddFill/></p>
      <p className=" flex gap-8 items-center bg-slate-200 w-[30rem] p-4 justify-center text-[1.5rem] rounded cursor-pointer hover:bg-slate-400">Landes Tour <BsFillBusFrontFill/></p>
      <p className=" flex gap-8 items-center bg-slate-200 w-[30rem] p-4 justify-center text-[1.5rem] rounded cursor-pointer hover:bg-slate-400">zoologischer garten <GiLion/></p>
      <p className=" flex gap-8 items-center bg-slate-200 w-[30rem] p-4 justify-center text-[1.5rem] rounded cursor-pointer hover:bg-slate-400">Campingplatz <FaCampground/></p>
      
    </div>
    </div>
  )
}

export default PageChat
