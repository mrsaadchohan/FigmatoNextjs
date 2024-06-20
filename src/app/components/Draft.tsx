"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { IoImageOutline } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";

function Draft() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="flex justify-center">
      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-center xl:grid-cols-3 gap-9  px-5 mt-8 md:mt-0  sm:ml-64 ${
          isSidebarOpen ? "" : "ml-0"
        }`}
      >
        <div className="p-3 bg-white shadow-md w-fit">
          <div className="rounded-full bg-slate-300 w-fit p-3 my-6 mx-5">
            <IoImageOutline />
          </div>
          <div className="my-6 mx-5">
            <p className="text-[14px] text-slate-400 mt-5">
              Last edited Jan 2, 2024, 12:25pm .
            </p>
            <p className="text-[14px] text-slate-400">987 characters</p>
          </div>
          <div className="my-6 mx-5">
            <p className="text-[15px]">
              Founders and sales leaders, listen up.
            </p>
            <p className="text-[14px] mt-4 max-w-xs">
    Every deal/oppurtunity in your CRM should have a &quot;next step date&quot;
    field and a &quot;next step&quot; field.
</p>
            <p className="text-[14px] mt-4">This is grandular, so stay with me...</p>
            <p className="text-[14px] mt-4 max-w-xs">You should be going deal-by-deal throgh your pipeline to make sure you understand</p>
          </div>
          <div className="flex justify-center gap-3 ">
          <div className=" bg-slate-200 w-[40%] py-[6px] rounded-full">
          <MdEdit className="mx-auto"/>


          </div>
          <div className=" bg-slate-200 w-[40%] py-[6px] rounded-full">
          <MdDelete className="mx-auto"/>


          </div>
          </div>
        </div>

        <div className="p-3 bg-white shadow-md w-fit">
          <div className="rounded-full bg-slate-300 w-fit p-3 my-6 mx-5">
            <IoImageOutline />
          </div>
          <div className="my-6 mx-5">
            <p className="text-[14px] text-slate-400 mt-5">
              Last edited Jan 2, 2024, 12:25pm . 987 characters
            </p>
            
          </div>
          
          <div className="flex justify-center gap-3 pt-[235px] ">
          <div className=" bg-slate-200 w-[40%] py-[6px] rounded-full">
          <MdEdit className="mx-auto"/>


          </div>
          <div className=" bg-slate-200 w-[40%] py-[6px] rounded-full">
          <MdDelete className="mx-auto"/>


          </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Draft;


