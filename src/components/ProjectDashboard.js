import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { GrFolder } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsChatRightFill } from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import ToggleButton from './ToggleButton';


const ProjectDashboard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storyboardName, setStoryboardName] = useState('');
  const [frameSize, setFrameSize] = useState('16:9');
  const [isFormValid, setIsFormValid] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'storyboardName') {
      setStoryboardName(value);
    } else if (name === 'frameSize') {
      setFrameSize(value);
    }


    if (storyboardName !== '' && frameSize !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Storyboard Name:', storyboardName);
    console.log('Frame Size:', frameSize);
    closeModal();
  };




  return (
    <div className='w-full'>
      <div className=' dashboard-nav flex justify-between w-10/12 mx-auto bg-transparent '>
      <p className=' flex w-5/12 text-black font-bold text-2xl items-center gap-4'><span className='w-10 px-2 h-10 text-center   rounded-[50px] border-2 border-black font-bold text-black bg-[#F6D3B4]'>
         A
        </span>
        Adam Cooper Team</p>

        <button className='btn3 bg-black p-2 my-9 rounded-md text-white text-center text-lg font-semibold'> New Project </button>
      </div>

      <div className='w-10/12 bg-white rounded mx-auto py-7 px-9 h-auto'>
       <div className='w-full flex justify-between'>
       <div className='flex items-center gap-6 '>
       <GrFolder className='text-2xl ' />
       <div className='flex flex-col'>
       <p className='font-semibold '>Default Project</p>
       <p className='text-[#D1D1D1]'>1 storyboard</p></div>
       </div>

       <div className='flex items-center gap-4 '>
      <BsThreeDotsVertical />
      <FaChevronDown />
      </div>
       </div>
      <div className='main-container flex gap-5'>
      <div className='main border w-4/12 border-gray-200 flex flex-col gap-4 h-80 mt-2'>
       <img src="forest.jpeg" alt="" className='w-full h-[75%] object-cover'/>
        <div className='py-1 px-3'> <p className='font-semibold'>AI Character Demo Storyboard</p>
         <p className='text-[#D1D1D1]'>Updated 19 Mar 24</p></div>
      </div>

      <div className=' add border w-4/12 border-gray-200 flex justify-center items-center bg-[#F5F6F0] flex-col gap-4 h-80 mt-2'>
      <GoPlusCircle className='text-gray-300 text-5xl cursor-pointer' onClick={openModal} />
      </div>
      </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-9 w-3/12 rounded-lg">
            <div className='  w-full flex justify-between items-center'>
            <h2 className='text-2xl font-bold mb-4   '>New Storyboard</h2>
            <RxCross2  onClick={closeModal} className='font-bold text-xl mb-3 cursor-pointer'/></div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="storyboardName" className="block text-sm font-semibold mb-2">Storyboard Name</label>
                <input
                  type="text"
                  id="storyboardName"
                  name="storyboardName"
                  value={storyboardName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="frameSize" className="block text-sm font-semibold mb-2">Frame Size</label>
                <select
                  id="frameSize"
                  name="frameSize"
                  value={frameSize}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="16:9">16:9</option>
                  <option value="4:3">4:3</option>
                  <option value="1:1">1:1</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <div className='flex items-center gap-1'>
                <ToggleButton />
                <span className='text-sm font-semibold p1'>AI Assistant</span></div>
                <button  type="submit"  className={`btn4 font-semibold  px-4 py-2 rounded-md ${isFormValid ? 'opacity-100 bg-[#DEDEDC] text-black' : 'opacity-50 cursor-not-allowed bg-[#DEDEDC] text-white'}`} disabled={!isFormValid}>Create Storyboard</button>
                
              </div>
            </form>
          </div>
        </div>
      )}



      <BsChatRightFill className=' message absolute right-28 text-4xl text-white rounded-full bg-black  py-2'  />
      
    </div>
  )
}

export default ProjectDashboard
