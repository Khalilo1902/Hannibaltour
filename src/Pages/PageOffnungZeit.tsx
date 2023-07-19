import { BsFillHouseAddFill, BsFillBusFrontFill } from "react-icons/bs";
import { GiLion } from "react-icons/gi";
import { FaCampground } from "react-icons/fa";

import { useState } from "react";


const PageOffnungZeit = () => {
const [isOpen, setIsOpen]=useState([false,false,false,false])

const handleOpen=(index:number)=>{
 
  const openState = isOpen.map((item, i) => i === index ? !item : false);


   

  
   setIsOpen(openState)
  
   

}





  return (
    <div className="bg-[url('/public/bilder/belvedere.jpg')] bg-center bg-no-repeat w-full min-h-screen bg-cover object-cover">
     
      
      <div className="  flex justify-center  text-center">
        <h2 className=" text-[3rem] text-white mt-8 bg-blue-700 rounded-full p-4 ">
          Stunden & Prices
        </h2>
      </div>
      <div className=" flex flex-col items-center justify-center mt-[3rem] divide-y divide-slate-500 w-4/5 lg:w-1/2 mx-auto">
        
              

         <div className=" w-full ">

          <div className=" grid grid-cols-2 bg-slate-200  p-4   gap-8 text-[1.5rem] rounded cursor-pointer hover:bg-slate-400" onClick={()=>handleOpen(0)}>
            <div className={`flex justify-end w-full pr-10`} >
            <BsFillHouseAddFill />
            </div>
            <p className=" ">Öffnungzeit</p>
          </div>
          <p className={` bg-blue-500 mt-1 px-2 py-4 rounded-lg  flex items-center justify-center ${isOpen[0]? "flex": "hidden"}`}>
           <div className=" flex  items-center justify-between">
            <div className=" flex flex-col p-3 gap-3">
              <p>January – March:</p>
              <p>April – May: </p>
              <p>Memorial Day – Labor Day: </p>
              <p>September – October:</p>
              <p> November – December: </p>
            </div>
            <div className=" flex flex-col p-3 gap-3">
              <p>9:30am – 5:00pm</p>
              <p>9:00am – 6:00pm</p>
              <p>8:30am – 8:00pm</p>
              <p>9:00am – 6:00pm</p>
              <p>9:30am – 5:00pm</p>
            </div>
           </div>
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
          <p className={` bg-blue-500 mt-1 px-2 py-4 flex flex-col justify-center items-center gap-5 rounded-lg ${isOpen[1]?"flex":"hidden"}`}>
            <h3>Mark Twain Cave Tours Available</h3>
            <div className="flex  items-center justify-center">
            <div className="flex flex-col p-3 gap-3">
              <p>January – March:</p>
              <p>April – May:</p>
              <p>Memorial Day – Labor Day:</p>
              <p>September – October:  </p>
              <p>November – December:</p>
            </div>
            <div className="flex flex-col p-3 gap-3">
              <p>10:00am – 4:00pm</p>
              <p>10:00am – 5:00pm</p>
              <p> 9:00am – 7:00pm</p>
              <p>  10:00am – 5:00pm</p>
              <p>10:00am – 5:00pm</p>
            </div>
            </div>
            <div className=" flex flex-col items-center gap-2">
              <p>Adults (13 & Up) – $24.99</p>
              <p>Children (4-12) $14.99</p>
              <p>Call for group reservations (20 or more people)</p>
            </div>
            <button className="  bg-orange-500 py-2 px-4 rounded-3xl text-sm uppercase">Learn More!</button>
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
          <p className={` bg-blue-500 mt-1 px-2 flex flex-col items-center py-4 rounded-lg ${isOpen[3]?"flex":"hidden"}`}>
            <div className=" flex flex-col gap-3 p-2 text-white font-bold">
              <h3>Regular Season</h3>
              <p>April 1 – October 31</p>
              <p>Dry Camping</p>
              <p>(Limited Amenities)</p>
              <p className=" mb-2">November 1 – March 15</p>
              <button className="  bg-orange-500 py-2 px-4 rounded-3xl text-sm uppercase">Learn More!</button>
            </div>
          </p>
        </div> 
      </div>
    </div>
  );
};

export default PageOffnungZeit;
