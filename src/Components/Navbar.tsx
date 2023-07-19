import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Name from "./Name";
import ToogleMenue from "./ToogleMenue";
import { useEffect, useState } from "react";

const Navbar:React.FC = () => {
const [isActive,setIsActive] = useState<boolean>(false)
const changeMenu=()=>{
  setIsActive(!isActive)
}
useEffect(()=>{
  setIsActive(isActive)

},[isActive])




  return (
    <div className="  ">
      <header className="flex justify-between m-2 p-2 items-center container  mx-auto">
        <img
          className="w-24 h-24 object-cover rounded-3xl"
          src="../../public/bilder/logo.jpg"
          alt=""
        />

        <nav className="">
          <ul className=" gap-4 hidden sm:flex">
            <li className="liNav md:text-[1.4rem] hover:transition-all duration-200 animate-pulse">
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li className="liNav md:text-[1.4rem] transition ease-in-out duration-300 hover:skew-y-10 ">
              <NavLink to={"/offnungzeit"}>ÖffnungZeit</NavLink>
            </li>
            <li className="liNav md:text-[1.4rem]">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
          <ul className=" sm:hidden ">
            <li>
              <button className={`text-[2rem] ${isActive? "hidden":"flex"}`} >
                <GiHamburgerMenu onClick={changeMenu}/>
              </button>
            </li>

          </ul>
          <ToogleMenue isActive={isActive} changeMenu={changeMenu}/>
        </nav>
        
      </header>
      <Name />
     
    </div>
  );
};

export default Navbar;
