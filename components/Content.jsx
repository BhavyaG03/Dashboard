import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const Content = () => {
  return (
    <div className='h-[130vh] w-full bg-[#0D0B21] flex flex-col justify-start px-10'>
        <div className=" h-[180px] bg-[#15132B] overflow-auto sidebar w-full rounded-lg flex justify-between pr-6 pl-12 lg:pl-0 items-start gap-10 mt-5 lg:pb-40 mb-8">
            <div className="flex flex-col items-start justify-start gap-2 pl-4 pt-5 md:pt-7">
                <div className="flex justify-center items-center gap-2">
                <img src="./btnback.png" alt="" className="" />
                <p className='text-white text-[10px] md:text-[13px] font-semibold'>School November Tasks</p>
                </div>
                <p className="text-white text-[10px] md:text-[12px]">Created by Instructor Day on November 31, 2022</p>
                <div className="flex 
                 gap-2 justify-center items-center mt-2 pl-8">
                    <img src="./people.png" alt="" className="h-8 w-[130px]" />
                    <img src="./btnInvite.png" alt="" className="h-7 w-[120px]" />
                    <button className='border-blue-800 text-white border-2 rounded-lg px-4 text-[10px] py-1'>Private</button>
                    <button className=' rounded-lg px-4 text-[10px] py-1 bg-[#7879F1]'>Edit</button>
                    <div className="border-blue-800 text-white border-2 rounded-lg px-4 text-[10px] py-1 flex justify-center items-center gap-2">
                        <img src="./chat2.png" alt="" className="w-4 h-4" />
                        <p className="text-white text-[10px] lg:text-[12px] w-28">45 Comments</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-5 md:pt-7 gap-2 ml-20">
            <div className="flex justify-center items-center pt-5 md:pt-7 gap-2 ml-20">
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-white text-[10px] lg:text-[12px]">Centered Martial Arts</p>
                    <p className="text-gray-600 text-[8px] lg:text-[10px]">Sunnyvale, Ca</p>
                </div>
                <img src="./companyLogo.png" alt="" className="w-12 h-12 lg:w-16 lg:h-16" />
                <BsThreeDotsVertical size={20} className='text-white'></BsThreeDotsVertical>
            </div>
            <img src="./progressBar.png" alt="" className="w-30" />
        </div>
        </div>
        <div className="flex gap-2 w-full items-start justify-between">
            <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
                <div className="flex  gap-3 lg:gap-10 items-center justify-center">
                <p className="text-white text-[10px] lg:text-[12px]">To-Do List (24)</p>
                <img src="./btnDark.png" alt="" className="w-8 h-8 lg:ml-4 lg:w-12 lg:h-12" />
                </div>
                <img src="./toDoList.png" alt="" className="w-32 h-72 lg:w-[210px] lg:h-[390px]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
                <div className="flex   gap-3 lg:gap-10 items-center justify-center">
                <p className="text-white text-[10px] lg:text-[12px]">In Progress (2)</p>
                <img src="./btnAdd.png" alt="" className="w-8 h-8 lg:ml-4 lg:w-12 lg:h-12" />
                </div>
                <img src="./card.png" alt="" className="w-32 h-24 lg:w-[210px] lg:h-[140px]" />
                <img src="./card-1.png" alt="" className="w-32 h-24 lg:w-[210px] lg:h-[140px]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
                <div className="flex  gap-3 lg:gap-10 items-center justify-center">
                <p className="text-white text-[10px] lg:text-[12px]">Done (2)</p>
                <img src="./btnAdd.png" alt="" className="w-8 h-8 lg:ml-4 lg:w-12 lg:h-12" />
                </div>
                <img src="./card-3.png" alt="" className="w-32 h-24 lg:w-[210px] lg:h-[140px]" />
                <img src="./card-4.png" alt="" className="w-32 h-24 lg:w-[210px] lg:h-[140px]" />
                <img src="./card-5.png" alt="" className="w-32 h-24 lg:w-[210px] lg:h-[140px]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-10 items-center justify-center">
                <div className="flex  gap-3 lg:gap-10 items-center justify-center">
                <p className="text-white text-[10px] lg:text-[12px]">Revised (0)</p>
                <img src="./btnAdd.png" alt="" className="w-8 h-8 lg:ml-4 lg:w-12 lg:h-12" />
                </div>
                <img src="./card-6.png" alt="" className="w-32 h-12 lg:w-[210px] lg:h-[80px]" />
            </div>

        </div>
    </div>
  )
}

export default Content