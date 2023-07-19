import { BsFillHouseAddFill, BsFillBusFrontFill } from "react-icons/bs";
import { GiLion } from "react-icons/gi";
import { FaCampground } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useState,useEffect } from "react";


const PageChat = () => {
const [isOpen, setIsOpen]=useState([false,false,false,false])
const handleOpen=(index)=>{
  const openState=isOpen
  openState[index] = !openState[index]
  console.log(isOpen[index])
   setIsOpen(openState)
  console.log(isOpen)

}





  return (
    <div className="bg-[url('../../public/bilder/belvedere.jpg')] bg-center bg-no-repeat w-full min-h-screen bg-cover object-cover">
     
      
      <div className="  flex justify-center  text-center">
        <h2 className=" text-[3rem] text-white mt-8 bg-blue-700 rounded-full p-4 ">
          Stunden & Prices
        </h2>
      </div>
      <div className=" flex flex-col items-center justify-center mt-[3rem] divide-y divide-slate-500 w-1/2 mx-auto">
        
              

         <div className=" w-full ">

          <div className=" grid grid-cols-2 bg-slate-200  p-4   gap-8 text-[1.5rem] rounded cursor-pointer hover:bg-slate-400" onClick={()=>handleOpen(0)}>
            <div className={`flex justify-end w-full pr-10`} >
            <BsFillHouseAddFill />
            </div>
            <p className=" ">Öffnungzeit</p>
          </div>
          <p className={` bg-blue-500 mt-1 px-2 py-4 rounded-lg  flex ${isOpen[0]? "flex": "hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            voluptates. Voluptates impedit accusamus ullam obcaecati ipsam
            perspiciatis recusandae non fugiat. Illo expedita quas corrupti
            distinctio consectetur hic inventore? Esse harum quas explicabo
            dicta nihil natus totam non nemo earum pariatur?
          </p>
        </div>

        <div className=" w-full">

          <div className=" grid grid-cols-2 bg-slate-200  p-4   gap-8 text-[1.5rem] rounded cursor-pointer hover:bg-slate-400" onClick={()=>handleOpen(1)} >
         <div className=" flex justify-end w-full pr-10">
         <BsFillBusFrontFill />
         </div>

          <p className="  ">
            Landes Tour 
          </p>
          </div>
          <p className={` bg-blue-500 mt-1 px-2 py-4 rounded-lg ${isOpen[1]?"flex":"hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            voluptates. Voluptates impedit accusamus ullam obcaecati ipsam
            perspiciatis recusandae non fugiat. Illo expedita quas corrupti
            distinctio consectetur hic inventore? Esse harum quas explicabo
            dicta nihil natus totam non nemo earum pariatur?
          </p>
        </div>

        <div className=" w-full">
          <div className=" grid grid-cols-2 bg-slate-200  p-4   gap-8 text-[1.5rem] rounded cursor-pointer hover:bg-slate-400" onClick={()=>handleOpen(2)}>

          <div className=" flex justify-end w-full pr-10">
          <GiLion/>
          </div>
          <p >
            zoologischer garten 
          </p>
          </div>
          <p className={` bg-blue-500 mt-1 px-2 py-4 rounded-lg ${isOpen[2]?"flex":"hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            voluptates. Voluptates impedit accusamus ullam obcaecati ipsam
            perspiciatis recusandae non fugiat. Illo expedita quas corrupti
            distinctio consectetur hic inventore? Esse harum quas explicabo
            dicta nihil natus totam non nemo earum pariatur?
          </p>
        </div>

        <div className=" w-full">
          <div className=" grid grid-cols-2 bg-slate-200  p-4   gap-8 text-[1.5rem] rounded cursor-pointer hover:bg-slate-400" onClick={()=>handleOpen(3)}>
         <div className=" flex justify-end w-full pr-10">
         <FaCampground />
         </div>
          <p>
            Campingplatz 
          </p>
          </div>
          <p className={` bg-blue-500 mt-1 px-2 py-4 rounded-lg ${isOpen[3]?"flex":"hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            voluptates. Voluptates impedit accusamus ullam obcaecati ipsam
            perspiciatis recusandae non fugiat. Illo expedita quas corrupti
            distinctio consectetur hic inventore? Esse harum quas explicabo
            dicta nihil natus totam non nemo earum pariatur?
          </p>
        </div> 
      </div>
    </div>
  );
};

export default PageChat;
