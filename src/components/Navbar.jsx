import React from "react";
import { NavLink,useLocation  } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import Context from "./context/Context";
import { useEffect } from "react";
export const Navbar = (props) => {
  const {setHeading}=useContext(Context);
  const location = useLocation();
  useEffect(() => {
    // Extract the pathname from the location object
    const pathname = location.pathname;

    // Update the heading based on the pathname
    switch (pathname) {
      case "/":
        setHeading("About");
        break;
      case "/resume":
        setHeading("Resume");
        break;
      case "/projects":
        setHeading("Projects");
        break;
      case "/contact":
        setHeading("Contact");
        break;
      default:
        setHeading("");
    }
  }, [location.pathname, setHeading]);
  return (
    <nav>
      <div className="bottom-left-border w-fit flex gap-10 bg-zinc-500 text-white justify-end border-b border-l font-bold  text-2xl  px-5 py-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
          
        >
          About
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
          
        >
          Resume
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
         
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-orange-200 underline underline-offset-4" : " "}`
          }
          
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
