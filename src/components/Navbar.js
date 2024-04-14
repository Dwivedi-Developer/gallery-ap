import React from 'react'
import { HiClock } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import 'react-circular-progressbar/dist/styles.css';
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";

const NavBar = () => {
  return (
   <>
    <nav className='nav1 bg-[#F9DEB3] w-full flex justify-start gap-5 pl-7 items-center'>
      <div className='bg-[#F4C77C] flex rounded-xl px-2 gap-2   items-center'>
      <HiClock className='text-[#5B432B]' />
      <p className='font-bold text-[#5B432B] w'>One-Time-Offer</p>
      </div>
      <p className='font-extrabold'>Your AI Storyboarding Bundle Discount Expires in <span className='bg-[#F7E9C7] py-1 px-3 rounded-sm text-[#EA99A1]'>5:01</span></p>
      <button className=' btn1 bg-[#EA9AA3] font-bold text-2xl text-black px-3 py-1 rounded-md my-3'>Claim Discount</button>
    </nav>
    
    <div className='nav2 w-full flex justify-between items-center pl-8 py-4 bg-white '>
        <div className=' dashboard flex w-4/12 gap-4 items-center'> 
        <span className='w-12 h-12 rounded-full  text-3xl  justify-center flex items-center font-extrabold text-white bg-black'>B</span>
        <p className='project font-extrabold text-xl '>Project Dashboard</p>
        </div>
       <div className='sub-nav2  flex gap-4 items-center'>
        <div className=' search flex items-center border rounded pl-1 py-1 border-gray-200 '>
        <HiOutlineSearch  className='text-gray-400 font-extrabold'/>   
         <input placeholder=' Search my storyboards' className='outline-none ' />
        </div>
        
        <button className='btn2 bg-[#EAF5FB] rounded-sm border-2 flex items-center font-bold py-2 border-[#C0E4F4] w-6/12 gap-1 justify-center'>
        <div className='w-[30px] h-[30px] ml-1'><CircularProgressbar 
        value={4}
        text={4}
        strokeWidth={18}
        styles={buildStyles({
          textSize: "35px",
          textColor: "black",
          pathColor: "#6CBCF6",
          trailColor: "#C0E4F4"
        })}
      /></div>
           <p className='w-[90px]'> Quick Start </p>
        </button>

        <p className='w-10 h-10 flex items-center justify-center text-xl  px-3 rounded-[50px] border-2 border-black font-bold text-black bg-[#F6D3B4]'>
         A
        </p>
        <button className='bg-black rounded-s-[50px] p-2'><HiOutlineLightningBolt className='text-white'/></button>
        </div>
    </div>
    </>

  )
}

export default NavBar
