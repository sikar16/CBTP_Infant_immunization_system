import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import ChooseVaccine from "./ChooseVaccine";
import { useAuth } from "../../../../Context/AuthContext";
import { Vaccines } from "@mui/icons-material";
import VaccineService from "../../../../services/VaccineService";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";

function ChildInfo(props) {
  const { seletedChild, setSelectedChild } = useAuth();
  const [vaccine, setVaccine] = useState();
  const navigte = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigte("/");
    }
  }, []);
  const handleBack = () => {
    navigte("/motherlist");
  };
  const [isOpen, setIsOpen] = useState(false);

  ///Pop up
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log("object")
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await VaccineService.getvaccine();
    // console.log(response.vaccines);
    setVaccine(response.vaccines);

  };

  return (
    <>
     
      {props.singleChild && (
        <div>
          <header className="bg-[#137E8F] text-white py-4 flex px-[2%] ">
            <button className="pe-[2%]" onClick={props.handelinfo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.6rem"
                height="1.6rem"
                viewBox="0 0 1024 1024"
                onClick={handleBack}
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

            <h1 className="text-3xl">Infant Vaccine Report</h1>
          </header>

          <div className="m-4">
            <div className="">
              <h2 className="text-2xl text-[#137E8F] mb-[1%]">
                Infant Information
              </h2>

              <p className="mb-[3px]">
                <strong>Full Name:</strong> {props.singleChild.firstname}{" "}
                {props.singleChild.middlename} {props.singleChild.lastname}
              </p>
              <p className="mb-[3px]">
                <strong>Date of Birth:</strong>{" "}
                {props.singleChild.date_of_birth &&
                  new Date(props.singleChild.date_of_birth).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }
                  )}
              </p>

              <p className="mb-[3px]">
                <strong>Gender:</strong> {props.singleChild.gender}
              </p>
              <p className="mb-[3px]">
                <strong>Blood Type:</strong> {props.singleChild.blood_type}
              </p>
              <p className="mb-[3px]">
                <strong>Parent:</strong>{" "}
                {props.singleMother.profiles[0].firstname}{" "}
                {props.singleMother.profiles[0].middlename}
              </p>

              <h2 className="text-2xl text-[#137E8F] mt-[3%] mb-[1%]">
                Vaccine History
              </h2>

              {isHp && (<div className="text-end mb-3 me-[5%]">
                <button
                  className="bg-[#137E8F] p-2 rounded-lg text-white "
                  onClick={openModal}
                >
                  Vaccinate
                </button>
              </div>)
              }

              

              <table className="w-[90%] mx-[3%]  me-10">
                <thead>
                  <tr>
                    <td className="bg-gray-200 py-2 font-bold">Vaccine</td>
                    <td className="bg-gray-200 py-2 font-bold">Date</td>
                    <td className="bg-gray-200 py-2 font-bold">
                      Healthcare Provider
                    </td>
                    <td className="bg-gray-200 py-2 font-bold">
                      Next appointment
                    </td>
                    <td className="bg-gray-200 py-2 font-bold"></td>
                  </tr>
                </thead>
                <tbody>
                  {props.singleChild.vaccinations && props.singleChild.vaccinations.length > 0 &&
                    props.singleChild.vaccinations.map((e) => (
                      <tr>
                        <td>{e.vaccine.v_name}</td>
                        <td>
                          {e.creationDate &&
                            new Date(e.creationDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                              }
                            )}
                        </td>

                        <td>
                          {e.Employee.user.profiles[0].firstname}    {e.Employee.user.profiles[0].middlename}
                        </td>
                        <td>
                          {e.nextApp &&
                            new Date(e.nextApp).toLocaleDateString("en-US", {
                              month: "short",
                              day: "2-digit",
                              year: "numeric",
                            })}
                        </td>
                        <td className="px-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            {...props}
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M5 20h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m-1-5L14 5l3 3L7 18H4zM15 4l2-2l3 3l-2.001 2.001z"
                            ></path>
                          </svg>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Child Registration Modal"
            className="fixed inset-0 flex items-center justify-center "
            overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
          >
            <ChooseVaccine
              setIsOpen={setIsOpen}
              closeModal={closeModal}
              vaccine={vaccine}
              childId={props.singleChild.id}
              fetchData={fetchData}
            />
          </Modal>
        </div>
      )}
    </>
  );
}

export default ChildInfo;
