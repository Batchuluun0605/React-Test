"use client";
import React, { useState } from "react";
import logo from "../../img/logo.png";
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
const menuItems = [
  {
    icons: <IoHomeOutline size={26} />,
    label: "Home",
  },
  {
    icons: <AiOutlineProduct size={26} />,
    label: "Products",
  },

  {
    icons: <LuLayoutDashboard size={26} />,
    label: "Dashboard",
  },
  {
    icons: <IoSettingsOutline size={26} />,
    label: "Settings",
  },
  {
    icons: <FaRegCalendarAlt size={26} />,
    label: "Calender",
  },
  {
    icons: <MdOutlineReportGmailerrorred size={26} />,
    label: "Reports",
  },
];
const page = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav
      className={`shadpow-md h-screen p-2 flex flex-col duration-500 bg-blue-600 text-white ${
        open ? " w-60" : "w-16"
      }`}
    >
      {/* header  */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <img
          src={logo.src}
          alt="Logo"
          className={`${open ? "w-10" : "w-0"} rounded-md`}
        />
        <MdMenuOpen
          size={34}
          className={`cursor-pointer ${!open && "rotate-180"} duration-300`}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* body  */}

      <ul className="flex-1">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="px-3 py-2 hover:bg-blue-800 duration-300 rounded-md cursor-pointer flex gap-3 relative group"
            >
              <div>{item.icons}</div>
              <p
                className={`${
                  !open && "w-0 translate-x-24"
                } duration-500 overflow-hidden `}
              >
                {item.label}
              </p>
              <p
                className={`absolute left-32 p-0 w-0 bg-blue-800 ${
                  open && "hidden"
                } shadow-md rounded-md overflow-hidden group-hover:p-2 group-hover:w-fit group-hover:left-16 duration-300`}
              >
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>
      {/* footer  */}
      <div className="flex items-center gap-2 px-3 py-2">
        <FaUserCircle size={30} />
        <div
          className={`text-[14px] leading-5 ${
            !open && "w-0 translate-x-24  "
          } overflow-hidden duration-500`}
        >
          <p>Batchuluun</p>
          <span>batchuluun655@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default page;
