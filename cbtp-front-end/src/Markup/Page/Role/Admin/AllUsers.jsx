import React, { useState } from "react";
import ListUserComp from "../../../Component/Role/Admin/ListUserComp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Userservice from "../../../../services/UserService";
// import Modal from "react-modal";
// import UserRegistration from "./UserRegistration";

function AllUsers(props) {
  //   const [isActive, setIsActive] = useState(true);

  //   const handleClick = () => {
  //     setIsActive(!isActive);
  //   };

  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(true);

  const handleadduser = () => {
    navigate("/addUser");
  };

  const [user, setUser] = useState([]); // Initialize user state as an empty array

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Userservice.getuser();
      console.log(response);
      setUser(response.employee); 
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <div className="mx-[3%] my-[2%]">
        <p className="mx-[5%] text-3xl my-10">Users</p>
        <div className="overflow-x-auto bg-white ">
          <div className="relative m-[2px] mb-3 mr-5 float-left">
            <label htmlFor="inputSearch" className="sr-only">
              Search{" "}
            </label>
            <input
              id="inputSearch"
              type="text"
              placeholder="Search..."
              className="block w-64 rounded-lg border  py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinejoin="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-neutral-500 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>

          <div className="relative m-[2px] mb-3 float-right hidden sm:block">
            <label htmlFor="inputFilter" className="sr-only">
              Filter
            </label>
          </div>

          <div className="text-right ">
            <button
              className="bg-[#137E8F] text-white p-1 px-2  rounded-lg "
              onClick={handleadduser}
            >
              Add user
            </button>
          </div>

          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 ">
              <tr>
                <td scope="col" className="px-6 py-4 ">
                  User name
                </td>
                <td scope="col" className="px-6 py-4 ">
                  First name
                </td>
                <td scope="col" className="px-6 py-4 ">
                  Last name
                </td>
                <td scope="col" className="px-6 py-4 ">
                  Role
                </td>
                <td scope="col" className="px-6 py-4 ">
                  Phone Number
                </td>

                <td scope="col" className="px-6 py-4 "></td>
              </tr>
            </thead>

            <tbody>

            {user && user.map((userInfo, index) => (
                <ListUserComp key={index} userInfo={userInfo} />
              ))}


              
            </tbody>
          </table>
        </div>

        {/* <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Child Registration Modal"
          className=" "
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
        >

          <UserRegistration closeModal={closeModal} />
          
        </Modal> */}
      </div>
    </>
  );
}

export default AllUsers;
