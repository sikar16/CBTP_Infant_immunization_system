import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import AddVaccine from "./AddVaccine";
import UpdateVaccine from "./UpdateVaccine";
import VaccineService from "../../../../services/VaccineService";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";

function VaccineList(props) {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [vaccine, setVaccine] = useState([]);
  const [selectedVaccine, setSelectedVaccine] = useState({});

  const navigator = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator("/");
    }
  }, []);

  const openModalAdd = () => {
    setIsOpenAdd(true);
  };

  const openUpdateModal = (row) => {
    setSelectedVaccine(row);
    setIsOpenUpdate(true);
  };

  const closeUpdateModal = () => {
    setIsOpenUpdate(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await VaccineService.getvaccine();
      console.log(response);
      setVaccine(response.vaccines);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {isAdmin ? (
<div>
      <header className="bg-[#137E8F] text-white py-4 flex px-[2%] ">
        <button className="pe-[2%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.6rem"
            height="1.6rem"
            viewBox="0 0 1024 1024"
            {...props}
          >
            <path
              fill="currentColor"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
            ></path>
            <path
              fill="currentColor"
              d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
            ></path>
          </svg>
        </button>
        <h1 className="text-3xl ">Available Vaccine</h1>
      </header>
      <div className="text-end mx-[1.5%]">
        <button
          className="pe-[2%]   bg-[#137E8F] text-white my-4 p-2 rounded-lg"
          onClick={openModalAdd}
        >
          Add vaccine
        </button>
      </div>
      <div className="mt-3">
        <table className=" w-full bg-gray-200  ">
          <thead>
            <tr>
              <th className="text-start py-2 px-2">Vaccine</th>
              <th className="text-start py-2 px-2">Description</th>
              <th className="text-start py-2 px-2">Age range</th>
              <th className="text-start py-2 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {vaccine &&
              vaccine.map((vaccineInfo, index) => (
                <tr key={`${vaccineInfo.v_name}-${index}`}>
                  <td>{vaccineInfo.v_name}</td>
                  <td>{vaccineInfo.description}</td>
                  <td>{vaccineInfo.ageRange}</td>
                  <td className="py-3 px-2 text-start">
                    <button
                      onClick={() => openUpdateModal(vaccineInfo)}
                      className=" px-2 text-start"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.3em"
                        height="1.3em"
                        viewBox="0 0 24 24"
                        {...props}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isOpenAdd}
        onRequestClose={() => setIsOpenAdd(false)}
        contentLabel="Add Vaccine Modal"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
      >
        <AddVaccine closeModal={() => setIsOpenAdd(false)} />
      </Modal>
      <Modal
        isOpen={isOpenUpdate}
        onRequestClose={closeUpdateModal}
        contentLabel="Update Vaccine Modal"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
      >
        <UpdateVaccine
          vaccineInfo={selectedVaccine}
          closeModal={closeUpdateModal}
          fetchVaccine={fetchData}
        />
      </Modal>
      </div>
    ):(
      <UnauthorizedPage />
    )}
    
    </>
  );
}

export default VaccineList;
