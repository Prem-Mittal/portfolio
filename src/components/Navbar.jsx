import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
export const Navbar = (props) => {
  const handleclick = (e) => {
    //console.log(e.target.innerText)
    
    props.func(e.target.innerText);
  };
  return (
    <nav>
      <div className="bottom-left-border w-fit flex gap-10 bg-zinc-500 text-white justify-end border-b border-l font-bold  text-2xl  px-5 py-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
          onClick={handleclick}
        >
          About
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
          onClick={handleclick}
        >
          Resume
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
          onClick={handleclick}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
          onClick={handleclick}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
