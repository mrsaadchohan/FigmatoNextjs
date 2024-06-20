"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Links=[
  {
    name:'Drafts',
    link:'/',
  },
  {
    name:'Sheduled',
    link:'/Scheduled',
  },
  {
    name:'Published',
    link:'/Published',
  },
  {
    name:'Insights',
    link:'/',
  },
  
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Mobile Open Button */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="pt-4 block sm:hidden text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block sm:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="px-4">
            <h1 className="text-[24px] text-[#101010]">
              <span className="font-medium">Growth</span>
              <span className="text-slate-800">Genie</span>
            </h1>
          </div>
          <div className="px-4 mt-5">
            <button
              type="button"
              className="bg-[#0070F4] gap-2 text-[#F6F7F9] font-medium rounded-lg text-sm px-5 py-3 text-center  inline-flex items-center"
            >
              <span className="text-[20px] flex">+</span>
              Create a Post
            </button>
          </div>
          <ul className="space-y-2 mt-6 px-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 w-full text-gray-900 rounded-lg   "
              >
                <Image
                  src={"/images/element-3.jpg"}
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ms-3 text-[16px] whitespace-nowrap">
                  Post Generator
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 w-full text-gray-900 rounded-lg   "
              >
                <Image
                  src={"/images/element-3.jpg"}
                  alt="icon"
                  width={20}
                  height={20}
                />
                
                <span className="flex-1 ms-3 text-[16px] whitespace-nowrap">
                  My Post
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 w-full text-gray-900 rounded-lg   "
              >
                <Image
                  src={"/images/element-3.jpg"}
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 ms-3 text-[16px] whitespace-nowrap">
                  Content Inspiration
                </span>
              </a>
            </li>
          </ul>

          <ul className="space-y-2 mt-28 px-2">
            <div className="border-b-2"></div>
            <li>
              <a
                href="#"
                className="flex items-center p-2 w-full text-gray-900 rounded-lg   "
              >
                <Image
                  src={"/images/star.png"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span className="flex-1 ms-3 text-[16px] whitespace-nowrap">
                  Upgrade
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 w-full text-gray-900 rounded-lg"
              >
                <Image
                  src={"/images/message.png"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span className="flex-1 ms-3 text-[16px] whitespace-nowrap">
                  Help
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 w-full text-gray-900 rounded-lg   "
              >
                <Image
                  src={"/images/setting.png"}
                  alt="icon"
                  width={24}
                  height={24}
                />
                <span className="flex-1 ms-3 text-[16px] whitespace-nowrap">
                  Setting
                </span>
              </a>
            </li>
          </ul>
          <div className="w-[188px] h-[178px] rounded-[8px] border mt-3 mx-auto px-[16px] py-[8px]">
            <Image src={"/images/code.png"} alt="Code" width={24} height={24} />
            <div>
              <p className="text-[14px] py-3">Words Generated</p>
              <p className="text-[12px] opacity-[60%]">0k/10k</p>
              <div className="border-b-4 mt-3"></div>
              <p className="text-[12px] opacity-[60%] mt-4">
                You are on a free trial which ends on DD/MM/YY
              </p>
            </div>
          </div>
          <div className=" flex items-center mt-9 px-4">
            <div className="">
              <Image
                src={"/images/John.png"}
                alt="John"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h4 className="text-[14px] px-3">John Doe</h4>
              <p className="text-[12px] opacity-[60%] px-3">
                johndoe@email.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`p-4 mt-8 md:mt-0 sm:ml-64 ${isSidebarOpen ? "" : "ml-0"}`}
      >
        <div className="flex justify-between">
          <h1 className="lg:text-[24px] text-[16px]">My Posts</h1>

          <div className="md:w-[394px] md:h-[47px] w-[300px] h-[40px]">
            <Image
              src={"/images/button.png"}
              alt="Button"
              width={394}
              height={47}
            />
          </div>
        </div>
        <ul className="flex md:gap-x-7 gap-x-4 md:text-[16px] text-[12px] pt-10">
          {Links.map((data,id)=>
          {
            return(
              <div key={id}>
                <Link href={data.link}>
                {data.name}
                </Link>
              </div>
            )
          })}
          
        </ul>
        <div className="border-b-2 mt-4">

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
