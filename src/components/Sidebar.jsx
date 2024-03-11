import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaMobileButton } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col border rounded-3xl w-[25%] bg-[#1E1E1F] mr-5">
        <div className="bg-white w-[60%] h-[25vh] mt-10 mx-auto flex justify-center rounded-3xl">
          <img src="avatar.jpg" className=" rounded-3xl h-[85%] my-3" />
        </div>
        <div className="flex justify-center mt-6">
          <h1 className="text-2xl  font-bold text-white">Prem Mittal</h1>
        </div>
        <div className="bg-zinc-500 rounded-3xl mt-3 mx-auto px-3 py-1">
          Web Developer
        </div>
        <div className="bg-zinc-500 w-[85%] h-0.5 rounded-2xl mx-auto my-3"></div>
        <div className="flex flex-col mx-auto text-white space-y-5 mt-3 mb-5">
          <div className="flex  ">
            <IoMdMail className="text-4xl" />
            <div className="mx-2">
              <div className="text-gray-300 text-sm">EMAIL</div>
              <div className="text-white text-sm">premmittal88@gmail.com</div>
            </div>
          </div>
          <div className="flex ">
            <FaMobileButton  className="text-4xl" />
            <div className="mx-2">
              <div className="text-gray-300 text-sm">PHONE</div>
              <div className="text-white text-sm">+91 8279749476</div>
            </div>
          </div>
          <div className="flex ">
            <FaCalendarAlt  className="text-4xl" />
            <div className="mx-2">
              <div className="text-gray-300 text-sm">BIRTHDAY</div>
              <div className="text-white text-sm">Nov 30,2002</div>
            </div>
          </div>
          <div className="flex ">
            <FaLocationDot  className="text-4xl" />
            <div className="mx-2">
              <div className="text-gray-300 text-sm">LOCATION</div>
              <div className="text-white text-sm">Delhi, INDIA</div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto my-3 space-x-5 text-white">
        <Link to="https://www.linkedin.com/in/premmittal88/" target="_blank">
            <button><FaLinkedin className="text-4xl " /></button>
        </Link>
        <Link to="https://github.com/Prem-Mittal" target="_blank">
            <button><FaGithub className="text-4xl " /></button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
