import React from "react";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
const Layout = (props) => {
  return (
    <>
      <div className="flex mx-[3%] my-[2%]">
        <Sidebar />
        <Homepage>
          {props.children}
        </Homepage> 
      </div>
    </>
  );
};

export default Layout;
