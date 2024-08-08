import React, { useEffect, useState } from "react";
import axios from "axios";
import MotherService from "../../../../services/MotherService";
import FormValidator from "../../../../utilities/validator";
import { useToast } from "../../../../Context/ToastContext";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";

function MotherRegistration() {
  const navigator = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator("/");
    }
  }, []);
  const { toastData, hideToast, setToastData } = useToast();
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    date_of_birth: "",
    phonenumber: "",
    email: "",
    gender: "",
    password:"",
    attachments: null, 
    emergencycontact: "",
    zone: "",
    wereda: "",
    username: "",
    housenum: "",
  });

  const [form, setForm] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    date_of_birth: "",
    phonenumber: "",
    email: "",
    gender: "",
    password:"",
    image_url: null,
    emergencycontact: "",
    zone: "",
    wereda: "",
    housenum: "",
    username: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const onChangeChildRegistration = (e) => {
     if (e.target.name === "image_url") {
      const selectedImage = e.target.files[0];
      setImageFile(e.target.files[0]);
      setForm({
        ...form,
        attachments: selectedImage, // Change this line
      });
      setImagePreview(URL.createObjectURL(selectedImage));
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleRegisterMother = async () => {
    // console.log(form)
    // console.log(FormValidator.addUser(form))

    const isvalid = FormValidator.addmother(form);
    // console.log(isvalid);
    if (!isvalid.success) {
      setError(isvalid.error);
      console.log(error);
    } else {
      setError(isvalid.error);
      console.log(form)
      const formData = new FormData();
      formData.append("firstname", form.firstname);
      
      formData.append("username", form.username);
      formData.append("lastname", form.lastname);
      formData.append("middlename", form.middlename);
      formData.append("gender", form.gender);
      formData.append("date_of_birth", form.date_of_birth);
      formData.append("attachments", imageFile); // Use imageFile instead of form.imageFile
      formData.append("phonenumber", form.phonenumber);
      formData.append("zone", form.zone);
      formData.append("wereda", form.wereda);
      formData.append("housenumber", form.housenum);
     console.log(formData)
      const respones = await MotherService.register(formData);
      console.log(respones);
      setToastData(respones);
      if (respones.success) {
        navigator('/motherlist');
      }
    }
  };

  return (
    <>
    {isRegistrar ? (<div>
        <div className="myinfoHeader ">
          <p className="text-3xl py-10 mx-[5%] md:mx-[10%] text-[#137E8F] font-semibold">
            New Mother Registration
          </p>{" "}
        </div>
        <div className="myinfoForm py-[20px] shadow-lg shadow-blue-500 ">
          <div className="">
            <div>
              <p className="mx-[5%] md:mx-[10%] font-semibold">Name</p>

              <div className=" md:grid md:grid-cols-3  w-[90%] md:w-[80%] mx-auto md:mt-[12px] mb-[30px]">
                <div className="">
                  <input
                    onChange={onChangeChildRegistration}
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.firstname}</p>
                </div>
                <div className="">
                  <input
                    onChange={onChangeChildRegistration}
                    name="middlename"
                    type="text"
                    placeholder="Middle name"
                    className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.middlename}</p>
                </div>
                <div>
                  <input
                    onChange={onChangeChildRegistration}
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.lastname}</p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto mt-[20px] mb-[35px]">
              <div className="">
                <p className="mb-[10px] font-semibold">Date of Birth</p>
                <input
                  onChange={onChangeChildRegistration}
                  name="date_of_birth"
                  type="date"
                  className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                />
                <p className=" text-red-500">{error.date_of_birth}</p>
              </div>
              <div>
                <p className="mb-[10px] font-semibold mt-5 md:mt-0">Gender</p>
                <select
                  onChange={onChangeChildRegistration}
                  name="gender"
                  id=""
                  className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                >
                  <option value="">Select</option>
                  <option value="FEMALE">Female</option>
                  <option value="MALE">Male</option>
                </select>
                <p className=" text-red-500">{error.gender}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="  md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto ">
                <div className="">
                  <p className="mb-[10px] font-semibold">Contact Number</p>
                  <input
                    onChange={onChangeChildRegistration}
                    name="phonenumber"
                    type="number"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.phonenumber}</p>
                </div>
                <div className="">
                  {/* <p className="mb-[10px] font-semibold">Zone</p> */}
                  <input
                    onChange={onChangeChildRegistration}
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.zone}</p>

                  {/* <p className="mb-[10px]  text-gray-400">Zone</p> */}
                </div>
               
              </div>
            </div>

            <div className="mt-8">
              <p className=" mx-[5%] md:mx-[10%] font-semibold">Address</p>
              {/* <p className="mb-[10px] mx-[10%] font-semibold">Address</p> */}
              <div className=" md:grid md:grid-cols-3  w-[90%] md:w-[80%] mx-auto mt-[10px]">
                <div className="">
                  {/* <p className="mb-[10px] font-semibold">Zone</p> */}
                  <input
                    onChange={onChangeChildRegistration}
                    name="zone"
                    type="text"
                    placeholder="Zone"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.zone}</p>

                  {/* <p className="mb-[10px]  text-gray-400">Zone</p> */}
                </div>
                <div>
                  {/* <p className="mb-[10px] font-semibold">Wereda</p> */}
                  <input
                    onChange={onChangeChildRegistration}
                    name="wereda"
                    type="text"
                    placeholder="Wereda"
                    className="p-1 my-4 md:my-0 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.wereda}</p>

                  {/* <p className="mb-[10px]  text-gray-400">Wereda</p> */}
                </div>
                <div>
                  {/* <p className="mb-[10px] font-semibold">House number</p> */}
                  <input
                    type="number"
                    onChange={onChangeChildRegistration}
                    name="housenum"
                    placeholder="House number"
                    className=" p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.housenum}</p>

                  {/* <p className="mb-[10px]  text-gray-400">House number</p> */}
                </div>
              </div>
            </div>
            <div>
              <p className="mb-[10px] mx-[5%] md:mx-[10%] font-semibold my-10 text-xl">
                In case of emergency
              </p>

              <div className="md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto mt-[20px]">
                <div className="">
                  <p className="mb-[10px] font-semibold">Contact number</p>
                  <input
                    onChange={onChangeChildRegistration}
                    name="emergencycontact"
                    type="text"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                  <p className=" text-red-500">{error.emergencycontact}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 ">
              <p className="mx-[5%] md:mx-[10%] font-semibold">Image</p>
              <div className="flex items-center">
                <input
                  type="file"
                  name="image_url"
                  onChange={onChangeChildRegistration}
                  className="p-1 mx-[10%]  w-[20%] outline-none "
                />

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    className="w-[70px] h-[70px] object-contain ml-4 rounded-full "
                  />
                )}
                <p className=" text-red-500">{error.image_url}</p>
              </div>
            </div>
          </div>
          

          <div className="mt-[6%] mx-auto flex justify-center ">
            <button
              className="bg-[#137E8F] mx-auto w-[40%] px-4 py-[6px] text-white rounded-lg text-xl"
              onClick={handleRegisterMother}
            >
              Register
            </button>
          </div>
      </div>
      </div>):(
        <UnauthorizedPage/>
      )}
    


      
    </>
  );
}

export default MotherRegistration;
