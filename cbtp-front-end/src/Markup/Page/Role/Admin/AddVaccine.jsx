import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VaccineService from "../../../../services/VaccineService";
import { useToast } from "../../../../Context/ToastContext";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";
import { useEffect } from "react";

function AddVaccine(props) {
  const { toastData, hideToast, setToastData } = useToast();

  const navigator = useNavigate();

  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      // navigator("/");
    }
  }, []);

  const [form, setForm] = useState({
    v_name: "",
    description: "",
    ageRange: "", // Added ageRange field
  });

  const onChangeAddvaccine = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddvaccine = async () => {
    console.log(form);
    const response = await VaccineService.addvaccine(form);
    console.log(response);
    setToastData(response);
    if (response.success) {
      props.openModal();
      // navigate('/vaccinelist');
    } else {
      setToastData(response.message || "An error occurred");
    }
  };

  const handleBack = () => {
    navigate("/childinfo");
  };

  return (
    <>
      {isAdmin ? (
        <div className="bg-white rounded-lg p-6  w-[55%] mx-auto shadow-lg">
          <div className="myinfoHeader">
            <div className="flex justify-between">
              <p className="text-2xl py-3 text-[#137E8F] font-semibold">
                Add vaccine
              </p>
              <button onClick={props.closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6rem"
                  height="1.6rem"
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="m4 10l-.354.354L3.293 10l.353-.354zm16.5 8a.5.5 0 0 1-1 0zM8.646 15.354l-5-5l.708-.708l5 5zm-5-5.708l5-5l.708.708l-5 5zM4 9.5h10v1H4zM20.5 16v2h-1v-2zM14 9.5a6.5 6.5 0 0 1 6.5 6.5h-1a5.5 5.5 0 0 0-5.5-5.5z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="myinfoForm py-4">
            <div className="  w-[90%] md:w-[80%] mx-auto md:mt-[12px] mb-[30px]">
              <div className="my-5">
                <input
                  name="v_name"
                  onChange={onChangeAddvaccine}
                  type="text"
                  placeholder="Vaccine name"
                  className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                />
                <p className=" text-gray-400"></p>
              </div>
              <div>
                <textarea
                  name="description"
                  onChange={onChangeAddvaccine}
                  type="text"
                  placeholder="description"
                  className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                ></textarea>
                <p className=" text-gray-400 mt-5 md:mt-0"></p>
              </div>
              <div>
                <input
                  name="ageRange"
                  onChange={onChangeAddvaccine}
                  type="text"
                  placeholder="Age Range"
                  className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                />
                <p className=" text-gray-400 mt-5 md:mt-0"></p>
              </div>
            </div>

            <div className="text-right mt-2">
              <button
                className="bg-[#137E8F] text-white py-2 px-4 rounded-lg "
                onClick={handleAddvaccine}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ) : (
        <UnauthorizedPage />
      )}
    </>
  );
}

export default AddVaccine;
