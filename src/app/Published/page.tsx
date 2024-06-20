"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Image from "next/image";
function Published() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div
        className={` px-5 mt-8 md:mt-10  sm:ml-64 ${
          isSidebarOpen ? "" : "ml-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5">
          <div className="p-8 shadow-md border">
            <p className="text-[16px] text-[#98A1B2]">Published on 23/12/23</p>
            <p className="mt-7 text-[14px]">
              Been taking a tom of demo&apos;s lately
            </p>
            <p className="mt-5 text-[14px]">It&apos;s tiring to be honest</p>
            <p className=" mt-5 text-[14px]">
              There is a very very specific idea/problem/ strategy I&apos;m
              trying to solve for
            </p>
            <p className="mt-5 text-[14px]">
              They will have MEASURABLE impact on my org and company
            </p>
            <div className="flex justify-between mt-3">
              <div className="flex justify-center ">
                <Image
                  src={"/images/socials.png"}
                  width={50}
                  height={50}
                  alt="Social"
                />
                <p className="text-[12px] mt-[14px] text-slate-400">1877</p>
              </div>
              <p className="text-[13px] text-slate-400 mt-3">226 comments</p>
            </div>
            <div className="w-full mx-auto p-2 bg-slate-300 rounded-full">
              <p className="text-center text-slate-500">
                View in my Linkedln Profile
              </p>
            </div>
          </div>

          <div className="p-8 shadow-md border">
            <p className="text-[16px] text-[#98A1B2]">Published on 23/12/23</p>
            <p className="mt-7 text-[14px]">
              Been taking a tom of demo&apos;s lately
            </p>
            <p className="mt-5 text-[14px]">It&apos;s tiring to be honest</p>
            <p className=" mt-5 text-[14px]">
              There is a very very specific idea/problem/ strategy I&apos;m
              trying to solve for
            </p>
            <p className="mt-5 text-[14px]">
              They will have MEASURABLE impact on my org and company
            </p>
            <div className="flex justify-between mt-3">
              <div className="flex justify-center ">
                <Image
                  src={"/images/socials.png"}
                  width={50}
                  height={50}
                  alt="Social"
                />
                <p className="text-[12px] mt-[14px] text-slate-400">1877</p>
              </div>
              <p className="text-[13px] text-slate-400 mt-3">226 comments</p>
            </div>
            <div className="w-full mx-auto p-2 bg-slate-300 rounded-full">
              <p className="text-center text-slate-500">
                View in my Linkedln Profile
              </p>
            </div>
          </div>

          <div className="p-8 shadow-md border">
            <p className="text-[16px] text-[#98A1B2]">Published on 23/12/23</p>
            <p className="mt-7 text-[14px]">
              Been taking a tom of demo&apos;s lately
            </p>
            <p className="mt-5 text-[14px]">It&apos;s tiring to be honest</p>
            <p className=" mt-5 text-[14px]">
              There is a very very specific idea/problem/ strategy I&apos;m
              trying to solve for
            </p>
            <p className="mt-5 text-[14px]">
              They will have MEASURABLE impact on my org and company
            </p>
            <div className="flex justify-between mt-3">
              <div className="flex justify-center ">
                <Image
                  src={"/images/socials.png"}
                  width={50}
                  height={50}
                  alt="Social"
                />
                <p className="text-[12px] mt-[14px] text-slate-400">86</p>
              </div>
              <p className="text-[13px] text-slate-400 mt-3">24 comments</p>
            </div>
            <div className="w-full mx-auto p-2 bg-slate-300 rounded-full">
              <p className="text-center text-slate-500">
                View in my Linkedln Profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Published;
