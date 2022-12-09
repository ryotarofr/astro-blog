import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineAnalytics,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdNotificationsNone,
} from "react-icons/md";

import { TbSearch, TbBrandNextjs } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";


export default function Test() {

  const [open, setOpen] = useState(true)
  useEffect(() => {
    setOpen(false)
  }, [])
  return open ? (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="fixed top-5 left-4 z-30 inline-flex items-center peer justify-center rounded-md p-2 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block lg:hidden h-4 w-4"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div
          className="p-6 w-1/2 h-screen backdrop-blur-md z-20 fixed top-0 -left-96 lg:left-0 md:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200"
        >
          <div className="flex flex-col justify-start item-center">
            <a
              href="/"
              className="flex justify-center text-base text-center cursor-pointer font-bold border-b border-gray-100 pb-4 pl-6 pt-0 w-full"
            >
              <h2 className="sss:text-lg text-sm">Ryotaro Fujii</h2>
              <TbBrandNextjs />
            </a>
            <div className="my-4 border-b border-gray-100 pb-4">
              <div
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <TbSearch className="text-2xl group-hover:text-white" />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">検索</h3>
              </div>
              <div
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <AiOutlineHome className="text-2xl group-hover:text-white " />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">
                  ダッシュボード
                </h3>
              </div>
              <div
                className="flex mb-2 justify-start  items-center gap-4 pl-5 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdNotificationsNone className="text-2xl  group-hover:text-white " />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">通知</h3>
              </div>
              <div
                className="flex mb-2 justify-start  items-center gap-4 pl-5 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdOutlineAnalytics className="text-2xl  group-hover:text-white " />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">分析</h3>
              </div>
              <div
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <IoMdHeartEmpty className="text-2xl group-hover:text-white " />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">
                  お気に入り
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className="my-4 border-b border-gray-100 pb-4">
              <div
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdOutlineSettings className="text-2xl group-hover:text-white " />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">
                  Settings
                </h3>
              </div>
              <div
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdOutlineMoreHoriz className="text-2xl group-hover:text-white " />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">More</h3>
              </div>
            </div>
            {/* logout */}
            <div className="my-4">
              <div
                className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 hover:bg-zinc-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdOutlineLogout className="text-2xl group-hover:text-white " />
                <h3 className="sss:text-base text-xs group-hover:text-white font-semibold">Logout</h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div >
  ) : (
    <div />


  )
}

