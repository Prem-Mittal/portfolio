import React from 'react'
import { Navbar } from './Navbar'
import { useState,useEffect } from 'react'
const Homepage = (props) => {
  const [heading, setHeading] = useState('');
  const pull_data=(data)=>{
    console.log(data);
    setHeading(olddata=>data);
  }
  useEffect(() => {
    setHeading(props.heading);
  }, [props.heading]);
 
  return (
    <div className='flex flex-col border rounded-3xl w-[75%] bg-[#1E1E1F] ml-5'>
      <div className='flex justify-between'>
      <div className='text-white w-[20%] pl-10 pt-3 text-3xl font-bold'>{heading}</div>
      <Navbar func={pull_data}/>
      </div>
      {props.children}
    </div>
  )
}

export default Homepage