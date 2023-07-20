
import { BsFillHouseDoorFill, BsChatDots } from "react-icons/bs";
import { FcBusinessContact } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
interface IMenu{
    isActive:boolean
    changeMenu:()=>void
}


const ToogleMenue:React.FC<IMenu>= ({isActive,changeMenu}) => {
  return (
    <ul className= {`flex flex-col gap-6 text-[2rem] text-orange-400 md:hidden sm:hidden ${isActive ? "flex" : "hidden"}`}>
      <li>
        <AiOutlineClose onClick={changeMenu} />
      </li>
      <li>
       
        < NavLink to={"/home"}><BsFillHouseDoorFill/></NavLink>
      </li>
      <li>
        <NavLink to={"/offnungzeit"}><BsChatDots /></NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}><FcBusinessContact /></NavLink>
      </li>
    </ul>
  );
};

export default ToogleMenue;
