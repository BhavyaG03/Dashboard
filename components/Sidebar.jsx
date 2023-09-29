'use client'
import { Urbanist } from 'next/font/google';
import React, { useState } from 'react'
import { BiMenu,BiSolidChevronDown,BiChevronRight } from "react-icons/bi";
import { TbDashboard } from "react-icons/tb";
import { PiChatsCircleThin } from "react-icons/pi";
import { MdEmail,MdPermContactCalendar } from "react-icons/md";
import Nav from './Nav';

const Sidebar = () => {
    const [visible, setVisible] = useState(true)
  return (
    <div className="relative flex h-[130vh] justify-center items-start">
        <BiMenu size={30} className={!visible?'absolute top-4 left-0.25 text-[#7879F1] ml-3 md:ml-5 lg:ml-8':'hidden'} onClick={()=>{setVisible(!visible)}}></BiMenu>
    <div className={visible?'h-[140vh] w-[180px] md:w-[250px] bg-[#15132B] flex flex-col overflow-y-auto sidebar':'hidden'}>
        <div className="flex justify-evenly pl-5 pr-2 gap-8 pt-4">
            <p className="text-white hidden md:block">weframetech</p>
            <BiMenu size={30} className='text-[#7879F1] ml-20 md:ml-0' onClick={()=>{setVisible(!visible)}}></BiMenu>
        </div>
        <div className="flex flex-col gap-5 mt-8 md:mt-10 justify-center ml-6 md:ml-9 items-start">
            <h4 className="text-white">MAIN MENU</h4>
            <div className="flex gap-3 md:gap-6 items-center justify-center">
            <TbDashboard size={20} className='text-[#464366]'></TbDashboard>
            <p className="text-white text-[13px]">Dashboard</p>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-between">
           <div className="flex gap-3 md:gap-6">
           <MdEmail size={20} className='text-[#464366]'></MdEmail>
            <p className="text-white text-[13px]">Email</p>
           </div>
           <div className="hidden md:this">
            <div className="rounded-full w-6 h-6 bg-[#5ECFFF] text-white text-[12px] flex justify-center items-center">17</div>
            <BiSolidChevronDown size={20} className='text-[#7879F1]'></BiSolidChevronDown>
           </div>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-center">
            <PiChatsCircleThin size={20} className='text-[#7879F1]'></PiChatsCircleThin>
            <p className="text-white text-[13px]">Chat</p>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-between">
           <div className="flex gap-3 md:gap-6">
           <img src="./thumbnail 1.png" alt="" className="w-5 h-5" />
            <p className="text-white text-[13px]">Kanban</p>
           </div>
           <div className="hidden md:block md:ml-8">
            <BiChevronRight size={20} className='text-[#7879F1]'></BiChevronRight>
           </div>
        </div>
        <div className="flex gap-3 md:gap-2 items-center justify-between">
           <div className="flex gap-3 md:gap-6">
           <MdPermContactCalendar size={20} className='text-[#7879F1]'></MdPermContactCalendar>
            <p className="text-white text-[13px]">Contact</p>
           </div>
           <div className="hidden md:more">
           NEW
           </div>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-center">
        <img src="./calendar-silhouette 1.png" alt="" className="w-5 h-5" />
            <p className="text-white text-[13px]">Calendar</p>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-between">
           <div className="flex gap-3 md:gap-6">
           <img src="./invoice 1.png " alt="" className="w-5 h-5" />
            <p className="text-white text-[13px]">Courses</p>
           </div>
           <div className="hidden md:block md:ml-8">
            <BiChevronRight size={20} className='text-[#7879F1]'></BiChevronRight>
           </div>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-center">
        <img src="./online-shopping 1.png" alt="" className="w-5 h-5" />
            <p className="text-white text-[13px]">Shop</p>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-between">
           <div className="flex gap-3 md:gap-6">
           <img src="./invoice 1 (1).png " alt="" className="w-5 h-5" />
            <p className="text-white text-[13px]">Invoice</p>
           </div>
           <div className="hidden md:block md:ml-8">
            <BiChevronRight size={20} className='text-[#7879F1]'></BiChevronRight>
           </div>
        </div>
        <div className="flex gap-3 md:gap-6 items-center justify-center">
        <img src="./setting 1.png" alt="" className="w-5 h-5" />
            <p className="text-white text-[13px]">Settings</p>
        </div>
        <div className="mt-10 mr-5">
            <img src="./banner.png" alt="" className="" />
        </div>
        </div>
    </div>

</div>
  )
}

export default Sidebar