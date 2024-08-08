import React, { useState } from "react";
// import axios from "../../../../utilities/axios";
import ChildService from "../../../../services/ChildService";
import FormValidator from "../../../../utilities/validator";
import { useToast } from "../../../../Context/ToastContext";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";
import { useEffect } from "react";

function ChildRegstration(props) {
  const navigte = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    
    return () => {
      
    };
  }, []);(() => {
    if (!isLoggedIn) {
      navigator("/");
    }
  }, []);

  const { toastData, hideToast, setToastData } = useToast();

  const [error, setError] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    date_of_birth: "",
    gender: "",
    blood_type: "",
  });

  const [form, setForm] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    date_of_birth: "",
    gender: "",
    blood_type: "",
    mother_id: props.mother_id
  });

  console.log(props.mother_id);
  const onChangeChildRegistration = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChildRegistration = async () => {
    // console.log(FormValidator.childRegistration(form));
    const isvalid = FormValidator.childRegistration(form);
    if (!isvalid.success) {
      setError(isvalid.error);
     
    } else {
      setError(isvalid.error);
      const response = await ChildService.addchild(form);
      setToastData(response);
      console.log(response);
      if (response.success == true) {
        
        props.fetchData();
        props.closeModal();
      }
    }
   
  };

  return (
    <>
    {isRegistrar ? ( <div className="bg-white rounded-lg p-6  w-[55%] mx-auto shadow-lg">
        <div className="myinfoHeader">
          <div className="flex justify-between">
            <p className="text-2xl py-3 text-[#137E8F] font-semibold">
              New Child Registration
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
          <div>
            <p className="font-semibold">Name</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="First name"
                className="p-1 border border-gray-200 w-full outline-none"
                onChange={onChangeChildRegistration}
                name="firstname"
              />
              <p className=" text-red-500">{error.firstname}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Middle name"
                className="p-1 border border-gray-200 w-full outline-none"
                onChange={onChangeChildRegistration}
                name="middlename"
              />
              <p className=" text-red-500">{error.middlename}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Last name"
                className="p-1 border border-gray-200 w-full outline-none"
                onChange={onChangeChildRegistration}
                name="lastname"
              />
              <p className=" text-red-500">{error.lastname}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="font-semibold">Date of Birth</p>
              <input
                type="date"
                className="p-1 border border-gray-200 w-full outline-none"
                onChange={onChangeChildRegistration}
                name="date_of_birth"
              />
              <p className=" text-red-500">{error.date_of_birth}</p>
            </div>
            <div>
              <p className="font-semibold">Gender</p>
              <select
                className="p-1 border border-gray-200 w-full outline-none"
                onChange={onChangeChildRegistration}
                name="gender"
              >
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              <p className=" text-red-500">{error.gender}</p>

            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mt-4">
            <p className="font-semibold">Blood Type</p>
            <select
              className="p-1 border border-gray-200 w-full outline-none"
              onChange={onChangeChildRegistration}
              name="blood_type"
            >
              <option value="">Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
            <p className=" text-red-500">{error.blood_type}</p>


          </div>
           
          </div>
         
          <div className="mt-5 mx-auto">
            <button
              className="bg-[#137E8F] px-4 py-[6px] text-white rounded-lg "
              onClick={handleChildRegistration}
            >
              Submit
            </button>
          </div>
        </div>
        
      </div>):(
        <UnauthorizedPage/>
      )}
     
    </>
  );
}

export default ChildRegstration;
