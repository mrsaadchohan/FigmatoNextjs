'use client';
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaGreaterThan, FaLessThan, FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import { MdNoteAdd } from "react-icons/md";

function Scheduled() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div
        className={` px-5 mt-8 md:mt-10  sm:ml-64 ${
          isSidebarOpen ? "" : "ml-0"
        }`}
      >
        <div className="flex  justify-between">
          <FaLessThan className="text-slate-500 text-1xl " />
          <div className="flex flex-col">
            <h1 className="text-center text-[14px] md:text-[18px] font-semibold">
              January 02 - January 05, 2024
            </h1>
            <p className="text-center text-[14px] mt-1 opacity-[60%]">
              Asia/Calcutta
            </p>
          </div>
          <FaGreaterThan className="text-slate-500 text-1xl" />
        </div>
        <div className="border-b-2 mt-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] mt-5">
          <div className="">
            <h1 className="font-semibold">
              Today{" "}
              <span className="font-medium text-slate-400">January 02</span>
            </h1>
            <div className="bg-slate-100 p-3 rounded-xl mt-3">
              <h1 className="text-slate-500 pt-1">09:00 AM</h1>
              <div className="w-full mx-auto bg-white p-2 mt-2">
                <p className="text-[10px] text-slate-500">
                  Last edited Jan 2,2024, 12:25  .
                </p>
                <p className="text-[10px] text-slate-500">987 characters</p>
                <h6 className="mt-7 text-[11px]">
                  Founders and sales leaders, listen up
                </h6>
                <h6 className="text-[10px] mt-4">
    Every deal/oppurtunity in your CRM should have a &quot;next step
    date&quot; field and a &quot;next&quot;
</h6>
              </div>
              <div className="flex justify-center">
                <Image
                  src={"/images/icons.png"}
                  width={200}
                  height={200}
                  alt="Icons"
                  className="mt-2 "
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">
              Tomorrow{" "}
              <span className="font-medium text-slate-400">January 03</span>
            </h1>
            <div className="bg-slate-100 p-3 rounded-xl mt-3">
              <h1 className="text-slate-500 pt-1">09:00 AM</h1>
              <div className="flex justify-center items-center mt-20">
                Empty..
              </div>
              <div className="flex justify-between mt-[83px]">
                <MdNoteAdd />
                <FaRegEdit />
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-semibold">
              Thursday{" "}
              <span className="font-medium text-slate-400">January 04</span>
            </h1>
            <div className="bg-slate-100 p-3 rounded-xl mt-3">
              <h1 className="text-slate-500 pt-1">09:00 AM</h1>
              <div className="flex justify-center items-center mt-20">
                Empty..
              </div>
              <div className="flex justify-between mt-[83px]">
                <MdNoteAdd />
                <FaRegEdit />
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-semibold">
              Friday{" "}
              <span className="font-medium text-slate-400">January 05</span>
            </h1>
            <div className="bg-slate-100 p-3 rounded-xl mt-3">
              <h1 className="text-slate-500 pt-1">09:00 AM</h1>
              <div className="flex justify-center items-center mt-20">
                Empty..
              </div>
              <div className="flex justify-between mt-[83px]">
                <MdNoteAdd />
                <FaRegEdit />
              </div>
            </div>
          </div>
          <div>
           
            <div className="bg-slate-100 p-3 rounded-xl ">
              <h1 className="text-slate-500 pt-1">09:00 AM</h1>
              <div className="flex justify-center items-center mt-20">
                Empty..
              </div>
              <div className="flex justify-between mt-[83px]">
                <MdNoteAdd />
                <FaRegEdit />
              </div>
            </div>
          </div>

        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default Scheduled;
