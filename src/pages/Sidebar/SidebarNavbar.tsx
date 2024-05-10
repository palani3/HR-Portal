import React from "react";

import {
  RiUserSettingsLine,
  RiApps2Line,
  RiLogoutCircleRLine,
  RiAlarmLine,
  RiArchiveStackLine,
  RiSettings3Line,
  RiBook2Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
export default function SidebarNavbar() {
  return (
    <section>
      <aside className="  flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex justify-center  ">
          <img
            className="w-auto h-7   "
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-evenly flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="#"
              >
                <RiApps2Line size={20} />

                <span className="mx-2 text-sm font-medium">Overview</span>
              </Link>

              <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="#"
              >
                <RiUserSettingsLine />

                <span className="mx-2 text-sm font-medium">
                  Employe Management
                </span>
              </Link>
            </div>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <RiAlarmLine size={24} />

              <span className="mx-2 text-sm font-medium">Attendance</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <RiArchiveStackLine />

              <span className="mx-2 text-sm font-medium">Leave</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <RiSettings3Line />

              <span className="mx-2 text-sm font-medium">Setting</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <RiBook2Line />

              <span className="mx-2 text-sm font-medium">Reports</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <RiLogoutCircleRLine />

              <span className="mx-2 text-sm font-medium">Logout</span>
            </Link>
          </nav>
        </div>
      </aside>
    </section>
  );
}
