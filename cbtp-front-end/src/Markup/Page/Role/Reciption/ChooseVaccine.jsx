import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VaccineService from "../../../../services/VaccineService";
import { useToast } from "../../../../Context/ToastContext";
import FormValidator from "../../../../utilities/validator";
import { useAuth } from "../../../../Context/AuthContext";

function ChooseVaccine(props) {
  console.log(props);
  const { toastData, hideToast, setToastData } = useToast();
  const {   userData, } = useAuth();
  const navigate = useNavigate();
  const [error,setError]=useState({
    nextApp:"",
  })
  const [form, setForm] = useState({
    child_id: props.childId,
    doctor_id: userData.id,
  });

  const handleBack = () => {
    navigate("/childinfo");
  };

  const handleSubmit = async () => {
    const res = await VaccineService.vaccineChild(form);
    setToastData(res);
    if(res.success){
      props.closeModal();
      props.fetchData();
    }
  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg p-6 w-[55%] mx-auto shadow-lg">
        <div className="myinfoHeader">
          <div className="flex justify-between">
            <p className="text-2xl py-3 text-[#137E8F] font-semibold">
              Choose vaccine
            </p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.6rem"
                height="1.6rem"
                viewBox="0 0 24 24"
                {...props}
                onClick={props.closeModal}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Type of vaccine</p>
              <select
                className="p-1 border border-gray-200 w-full"
                name="vaccine_id"
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {props.vaccine && props.vaccine.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.v_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="font-semibold">Next appointment</p>
              <input
                type="date"
                className="p-1 border border-gray-200 w-full outline-none"
                name="nextApp"
                onChange={handleInputChange}
              />
              <p>{error.nextApp}</p>
            </div>
          </div>

          <div className="text-right mt-2">
            <button
              onClick={handleSubmit}
              className="bg-[#137E8F] text-white py-2 px-4 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseVaccine;
