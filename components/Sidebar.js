import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import { TbLayoutSidebarRightExpand, TbLayoutSidebarLeftExpandFilled, TbSettings,  } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { IoIosHelpCircle, IoIosHelpCircleOutline, IoIosLogOut } from "react-icons/io";
import profile from '../Assets/jb.jpg'
import { Notifications } from './Notifications';
import { Notificationss } from './Notificationss';
export default function Sidebar() {

    const [isOpen, setisOpen] = useState(true);

  return (
    
    

    <div>
  {!isOpen ? (
    
    <div id="sidebar" className='bg-maroon w-[13vh] h-[100vh] fixed top-0 left-0'>

      <ul>
        <li className='text-2xl mx-5 mt-5 text-white hover:text-black hover:bg-white hover:rounded cursor-pointer px-4 py-2' onClick={() => setisOpen(true)}>
          <TbLayoutSidebarLeftExpandFilled/>
        </li>
        <li className='text-2xl mx-5 mt-10 text-white hover:text-black hover:bg-white hover:rounded cursor-pointer px-4 py-2'>
          <MdOutlineDashboard />
        </li>
        <li className='text-2xl mx-5 mt-6 text-white hover:text-black hover:bg-white hover:rounded cursor-pointer px-4 py-2'>
          <GiBookshelf />
        </li>
        <li className='text-2xl mx-5 mt-6 text-white hover:text-black hover:bg-white hover:rounded cursor-pointer px-4 py-2'>
          <TbSettings/>
        </li>
        <li className='text-2xl mx-5 mt-6 text-white hover:text-black hover:bg-white hover:rounded cursor-pointer px-4 py-2'>
          <IoIosHelpCircleOutline />
        </li>
        <li className='text-2xl mx-5 mt-6 mb-5 text-white hover:text-black hover:bg-white hover:rounded cursor-pointer fixed bottom-0 left-0 px-4 py-2'>
          <IoIosLogOut />
        </li>
      </ul>
      <Notifications/>
  
    </div>
  ) : (
    <div id="sidebarwide" className='top-0 left-0 fixed bg-maroon w-[40vh] h-full p-5'>
      <img className="fixed mt-1 rounded-full h-10 w-10" src={profile} alt="Bieburrr" />
      <p className='text-2xl ml-[29vh] pl-8 pt-0 text-white hover:text-black h-5 fixed' onClick={() => setisOpen(!isOpen)}>
        <TbLayoutSidebarRightExpand/>
      </p>
      <h1 className='text-2 font-semibold text-white ml-[8vh]'>Justin Drew Bieber<span className='text-sm font-normal'><br/>Student</span></h1>

      <ul>
        <li className='hover:text-black hover:bg-white text-white mt-6 flex items-center gap-5 cursor-pointer px-4 py-2 rounded'>
          <MdOutlineDashboard className="text-2xl"/>Dashboard
        </li>
        <li className='hover:text-black hover:bg-white text-white mt-6 flex items-center gap-5 cursor-pointer px-4 py-2 rounded'>
          <GiBookshelf className="text-2xl" />
          Search Book
        </li>
        <li className='hover:text-black hover:bg-white text-white mt-6 flex items-center gap-5 cursor-pointer px-4 py-2 rounded'>
          <TbSettings className="text-2xl" />
          Account Settings
        </li>
        <li className='hover:text-black hover:bg-white text-white mt-6 flex items-center gap-5 cursor-pointer px-4 py-2 rounded'>
          <IoIosHelpCircle className="text-2xl" />
          Help and Support
        </li>
        <li className='hover:text-black hover:bg-white text-white mt-6 flex items-center gap-5 cursor-pointer fixed bottom-5 left-5 px-4 py-2 rounded'>
          <IoIosLogOut className="hover:text-black text-2xl" />
          Log Out
        </li>
      </ul>
          <Notificationss/>
    </div>
  )}
</div>


            
  )
}
