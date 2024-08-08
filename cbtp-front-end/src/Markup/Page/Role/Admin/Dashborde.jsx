import React, { useState } from "react";
import { Link } from "react-router-dom";
import MotherList from "../Admin/AllUsers";
import VaccineList from "../Admin/VaccineList"; 

function Dashborde(props) {
  const [selectedTab, setSelectedTab] = useState("mothers");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto text-white bg-[#137E8F]">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Admin Dashboard
          </span>

          <ul className="space-y-2 font-medium mt-8">
            <li className="hover:text-black">
              <a
                href="#"
                className="flex items-center p-2  text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 text-white hover:text-black">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg group ${
                  selectedTab === "mothers"
                    ? "text-white bg-gray-900"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick("mothers")}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  group-hover:text-gray-900 hover: "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-white">
                  User
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 rounded-lg group ${
                  selectedTab === "vaccine"
                    ? "text-white bg-gray-900"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick("vaccine")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 3l4 4m-2-2l-4.5 4.5m-3-3l6 6m-1-1L10 18H6v-4l6.5-6.5m-5 5L9 14m1.5-4.5L12 11M3 21l3-3"
                  ></path>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-white">Vaccine</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {selectedTab === "mothers" && <MotherList />}
        {selectedTab === "vaccine" && <VaccineList />} 
      </div>
    </>
  );
}

export default Dashborde;
