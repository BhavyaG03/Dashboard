'use client'
import React, { useState } from 'react'
import { BiMenu,BiChevronRight,BiSearch,BiSolidChevronDown } from "react-icons/bi";

const Nav = (visible,setVisible) => {
    const [missing, setMissing] = useState(false)
  return (
        <nav className="w-full h-[70px] flex bg-[#15132B] pl-4">
            <ul className="flex justify-start items-center gap-5 md:px-4 px-2 lg:px-8 ml-3">
                <li className="relative flex justify-center items-center">
                    <input type='text' placeholder='Search here' className={'rounded-full bg-[#211A75] w-[60px] md:w-[160px] lg:w-[310px] xl:[340px] h-10 placeholder:get text-center text-white '}></input>
                    <BiSearch size={20} className='text-white absolute left-3'></BiSearch>
                </li>
                <li className="underline text-[#6418C3] lg:ml-6 hidden md:text-[11px] lg:text-[13px] md:block">OTHER MENUS</li>
                <li className="hidden lg:block">
                    <img src="./icons.png" alt="" className="cursor-pointer w-[180px] h-15" />
                </li>
                <li className="">
                    <div className="flex px-3 justify-center items-center rounded-full bg-[#211A75] gap-2 py-2">
                        <img src="./usa.png" alt="" className="rounded-full h-5 w-5" />
                        <p className="text-white hidden md:block text-[13px]">ENGLISH</p>
                        <BiSolidChevronDown size={20} className='text-[#7879F1]'></BiSolidChevronDown>
                    </div>
                </li>
                <li className="bg-[#1E1C3A] w-[2.5px] h-6 mx-0 lg:mx-2"></li>
                <li className="flex justify-center items-center gap-2">
                   <div className="w-5 h-5 md:w-7 md:h-7 rounded-md bg-[#C4C4C4]"></div>
                   <div className=" flex-col gap-1 hidden lg:flex">
                    <p className="text-white text-[10px]">Instructor Day</p>
                    <p className="text-[#6418C3] text-[10px]">Super Admin</p>
                   </div>
                   <BiSolidChevronDown size={20} className='text-[#6418C3]'></BiSolidChevronDown>
                </li>
            </ul>
        </nav>
  )
}

export default Nav