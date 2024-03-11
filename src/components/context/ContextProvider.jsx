import React, { useState } from "react";
import Context from "./Context";

const ContextProvider=({children})=>{
    const[heading,setHeading]=useState('About');
    return(
        <Context.Provider value={{heading,setHeading}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider