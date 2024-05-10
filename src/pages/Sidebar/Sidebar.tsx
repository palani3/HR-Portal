import React, { Children, useState } from "react";
// import { IoLogoVimeo } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {
  BiHome,
  BiUser,
  BiTime,
  BiCalendarCheck,
  BiMoney,
  BiBarChart,
  BiCog,
} from "react-icons/bi";
import DarkModeToggle from "../other/DarkModeToggle";
export default function Sidebar({Children}) {
  const [open, Setopen] = useState(false);

  const Menus = [
    { title: "overview", icon: BiHome },
    { title: "Profile", icon: BiUser },
    { title: "Attendance", icon: BiTime },
    { title: "Leave", icon: BiCalendarCheck },
    { title: "Payroll", icon: BiMoney },
    { title: "Report", icon: BiBarChart },
    { title: "Settings", icon: BiCog },
  ];
  return (
    <div className="flex" >
      {/* <DarkModeToggle/> */}
    <aside className="flex">
   
      <div
        className={`${
          open ? "w-56" : "w-24 p-8  "
        }  h-screen  relative duration-700 p-10 pt-8 `}
      >
        <MdOutlineKeyboardArrowLeft
          onClick={() => Setopen(!open)}
          className={`absolute  cursor-pointer rounded-full h-5 -right-3 top-9 w-5 border-2 border-black dark:border-white ${
            !open && "rotate-180"
          }`}
        />
        <div className=" flex gap-x-4 items-center">
          <img
            className={`cursor-pointer duration-500 w-5 h-5 ${
              open && "rotate-[360deg]"
            }`}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8uUPRg2gytR-9zlRAHb0QhTyWD7pbkoGuFVCZo1ASg&s"
          />
          {/* <IoLogoVimeo className={`cursor-pointer duration-500`}/> */}
          <h1
            className={`text-black origin-left font font-medium text-xl duration-600 dark:text-white ${
              !open && "scale-0"
            }`}
          >
            Terawe
          </h1>
        </div>
        <ul className="pt-8 ">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex items-center gap-x-4 cursor-pointer py-5 px-1 hover:bg-slate-500 rounded-md `}
            >
              {menu.icon && <menu.icon size={18} />}
              <span className={`${!open && "hidden"} origin-left duration-300`}>
                {menu.title}
              </span>
              {/* {!open &&(
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-sm group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {menu.title}
                </div>
            )}
            <span className={`${!open && "hidden"} absolute left-48 bg-red-600 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 w-0 overflow-hidden group-hover:w-fit group-hover:py-1 group-hover:left-14 group-hover:duration-300`}>
            {menu?.title}  
                    </span> */}
            </li>
          ))}
        </ul>
      </div>
    
    
    </aside>

    </div>
  );
}
