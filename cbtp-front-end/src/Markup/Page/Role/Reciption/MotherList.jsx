import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import ChildRegstration from "./ChildRegstration";
import MotherListComp from "../../../Component/Role/Registrar/MotherListComp";
import MotherService from "../../../../services/MotherService";
import LoadingIndicator from "../../../Component/Common/LoadingIndidator";
import ChildInfo from "./ChildInfo";

function MotherList(props) {
  const [isSel,setIsSel] = useState(false);
  const [singleChild,setSingleChild] = useState({});
  const [singleMother,setSingleMother] =useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [mother, setMothers] = useState([]);
  ///Pop up
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handelinfo = () => {
    setIsSel(!isSel);
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleaddmother = () => {
    navigate("/motherRegistration");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await MotherService.getmother();
    setMothers(response);
  };

  return (
    <>
    {isSel?<><ChildInfo   singleMother={singleMother}
                  setSingleMother={setSingleMother} singleChild={singleChild} setIsSel={setIsSel} isSel={isSel}  handelinfo={handelinfo}/></> :  <div className="mx-[3%] my-[2%]">
        <p className="mx-[5%] text-3xl my-10">Mother List</p>
        <div className="overflow-x-auto bg-white ">
          <div className="relative m-[2px] mb-3 mr-5 float-left">
            <label for="inputSearch" className="sr-only">
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
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-neutral-500 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>

          <div className="relative m-[2px] mb-3 float-right hidden sm:block">
            <label for="inputFilter" className="sr-only">
              Filter
            </label>
            <div className="text-right">
              <button
                className="bg-[#137E8F] p-2 rounded-lg text-white px-6 mb-2 "
                onClick={handleaddmother}
              >
                Add
              </button>
            </div>
            <select
              id="inputFilter"
              className="block w-40 rounded-lg border p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="1" selected>
                Last week
              </option>
              <option value="2">Last month</option>
              <option value="3">Yesterday</option>
              <option value="4">Last 7 days</option>
              <option value="5">Last 30 days</option>
            </select>
          </div>

          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 ">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Mother Name
                </th>
                <th scope="col" className="px-6 py-4">
                  User name
                </th>
                <th scope="col" className="px-6 py-4"></th>
              </tr>
            </thead>

            <tbody>
              {mother.length > 0 ? (
                mother.map((single) => (
                  <MotherListComp
                  singleMother={singleMother}
                  setSingleMother={setSingleMother}
                  singleChild={singleChild} 
                  setSingleChild={setSingleChild}
                  handelinfo={handelinfo}
                  setIsSel={setIsSel} isSel={isSel}
                  fetchData={fetchData}
                    data={single}
                    mothername="zerubabel"
                    username="zeru"
                  />
                ))
              ) : (

                ""
                // <LoadingIndicator />
              )}
            </tbody>
          </table>
        </div>
      </div>}
    </>
  );
}

export default MotherList;
