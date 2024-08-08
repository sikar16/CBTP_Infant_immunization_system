import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import AddVaccine from "./AddVaccine";
import VaccineService from "../../../../services/VaccineService";
import { useToast } from "../../../../Context/ToastContext";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";
import { useEffect } from "react";

function UpdateVaccine({ vaccineInfo, closeModal, fetchVaccine }) {
  const navigator = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator("/");
    }
  }, []);
  const { toastData, hideToast, setToastData } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    // v_name: vaccineInfo.v_name,
    // description: vaccineInfo.description,
    // ageRange: vaccineInfo.ageRange,
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const onChangeUpdateVaccine = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(vaccineInfo)
  const handleUpdateVaccine = async () => {
    console.log(form);
    console.log(vaccineInfo);
    // Assuming VaccineService.updatevaccine exists and works as expected
    const response = await VaccineService.update(form, vaccineInfo.id);
    setToastData(response);
    if (response.success === true) {
      fetchVaccine();
      closeModal();
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="bg-white rounded-lg p-6 w-[55%] mx-auto shadow-lg">
          <div className="myinfoHeader">
            <div className="flex justify-between">
              <p className="text-2xl py-3 text-[#137E8F] font-semibold">
                Update vaccine
              </p>
              <button className="pe-[2%]" onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6rem"
                  height="1.6rem"
                  viewBox="0 0 1024 1024"
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
            </div>
          </div>

          <div className="myinfoForm py-4">
            <div className="w-[90%] md:w-[80%] mx-auto md:mt-[12px] mb-[30px]">
              <div className="my-5">
                <input
                  name="v_name"
                  value={form.v_name}
                  onChange={onChangeUpdateVaccine}
                  type="text"
                  placeholder="Vaccine Name"
                  className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200 w-[95%] outline-none"
                />
                <p className="text-gray-400"></p>
              </div>
              <div>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={onChangeUpdateVaccine}
                  placeholder="Description"
                  className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200 w-[95%] outline-none"
                ></textarea>
                <p className="text-gray-400 mt-5 md:mt-0"></p>
              </div>
            </div>
            {isAdmin ? (
              <div className="text-right mt-2">
                <button
                  className="bg-[#137E8F] text-white py-2 px-4 rounded-lg"
                  onClick={handleUpdateVaccine}
                >
                  Update
                </button>
              </div>
            ) : (
              <UnauthorizedPage />
            )}
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Child Registration Modal"
          className="fixed inset-0 flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
        >
          <AddVaccine closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
}

export default UpdateVaccine;
