import React from "react";
import { useState } from "react";
import {
  TbLayoutSidebarRightExpandFilled,
  TbLayoutSidebarLeftExpandFilled,
  TbSettings,
} from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import {
  IoIosHelpCircle,
  IoIosHelpCircleOutline,
  IoIosLogOut,
} from "react-icons/io";
import profile from "../assets/jb.jpg";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(true);

  return (
    <div>
      {!isOpen ? (
        <div id="sidebar" className="bg-maroon fixed h-full w-fit rounded-r-xl">
          <ul className="flex flex-col h-full gap-2">
            <li
              className="text-3xl px-3 py-2 m-2 text-white hover:bg-white hover:text-black hover:rounded-xl cursor-pointer"
              onClick={() => setisOpen(true)}
            >
              <TbLayoutSidebarLeftExpandFilled />
            </li>

            <hr className="m-2 text-white text-opacity-50"></hr>

            <li className="text-3xl px-3 py-2 m-2 text-white hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <MdDashboard />
            </li>

            <li className="text-3xl px-3 py-2 m-2 text-white hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <GiBookshelf />
            </li>

            <li className="text-3xl px-3 py-2 m-2 text-white hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <TbSettings />
            </li>

            <li className="text-3xl px-3 py-2 m-2 text-white hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <IoIosHelpCircleOutline />
            </li>

            <div className="mt-auto">
              <hr className="m-2 text-white text-opacity-50"></hr>
              <li className="text-3xl px-3 py-2 m-2 text-white hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
                <IoIosLogOut />
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <div
          id="sidebarwide"
          className="fixed bg-maroon w-fit h-full rounded-r-xl"
        >
          <div className="flex items-center m-4 gap-4">
            <img
              className="rounded-full h-12 w-12"
              src={profile}
              alt="Bieburrr"
            />

            <div className="ml-auto">
              <h1 className="text-lg font-semibold text-white">
                Justin Drew Bieber
                <span className="block text-sm text-gray font-normal">
                  Student
                </span>
              </h1>
            </div>

            <p
              className="text-3xl ml-auto text-white mb-2 hover:text-blue cursor-pointer"
              onClick={() => setisOpen(!isOpen)}
            >
              <TbLayoutSidebarRightExpandFilled />
            </p>
          </div>

          <hr className="m-2 text-gray text-opacity-50"></hr>

          <ul className="flex flex-col sidebar-height gap-2">
            <li className="text-white text-lg flex align-middle px-5 py-3 m-2 hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <MdDashboard className="text-3xl mr-2" />
              Dashboard
            </li>

            <li className="text-white text-lg flex align-middle px-5 py-3 m-2 hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <GiBookshelf className="text-3xl mr-2" />
              Search Book
            </li>

            <li className="text-white text-lg flex align-middle px-5 py-3 m-2 hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <TbSettings className="text-3xl mr-2" />
              Account Settings
            </li>

            <li className="text-white text-lg flex align-middle px-5 py-3 m-2 hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
              <IoIosHelpCircle className="text-3xl mr-2" />
              Help and Support
            </li>

            <div className="mt-auto">
              <hr className="m-2 text-gray text-opacity-50"></hr>
              <li className="text-white text-lg flex align-middle px-5 py-3 m-2 hover:bg-white hover:text-black hover:rounded-xl cursor-pointer">
                <IoIosLogOut className="text-3xl mr-2" />
                Log Out
              </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
