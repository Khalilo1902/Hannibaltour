import {HiUserCircle} from "react-icons/hi"
import {FaUserCircle} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
const PageContact = () => {
  return (
    <div>
      <div
        className="flex h-[80vh] justify-center items-center  bg-slate-100"
      
      >
        <div
          className="bg-red-200  flex flex-col mt-6 gap-6  py-6  w-[70vw] justify-center  items-center rounded-2xl text-black "
        >
          <HiUserCircle className=" text-8xl  " />
          <h2 className="uppercase font-bold  ">Sign up</h2>

          <span className=" bg-white flex items-center rounded-lg  ">
            <FaUserCircle className=" ml-2 text-xl text-gray-500" />
            <input className="rounded-lg" type="text" placeholder="username" />
          </span>

          <span className=" bg-white flex items-center rounded-lg">
            <MdEmail className="ml-2 text-xl text-gray-500" />
            <input className="rounded-lg" type="text" placeholder="E-mail" />
          </span>

          <span className=" bg-white flex items-center rounded-lg">
            <RiLockPasswordFill className="ml-2 text-xl text-gray-500 " />
            <input className="rounded-lg" type="text" placeholder="Password" />
          </span>

          <span className=" bg-white flex items-center rounded-lg">
            <RiLockPasswordFill className="ml-2 text-xl text-gray-500" />
            <input
              className="rounded-lg
            "
              type="text"
              placeholder="Confirm Password"
            />
          </span>

          <button className=" bg-orange-500 py-2 px-4 rounded-3xl text-sm uppercase">
            Create Account
          </button>
          <p className="text-[0.7rem]  ">Already have on account? Login here</p>
        </div>
      </div>
      <p className="text-center text-xl px-6 py-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        veritatis aspernatur labore odio recusandae et eum eaque quo tempora,
        quidem eius repellendus nesciunt excepturi praesentium. Et modi impedit
        voluptatem explicabo?
      </p>
    </div>
  );
};


   

export default PageContact
