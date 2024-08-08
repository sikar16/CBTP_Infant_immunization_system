import React, { useEffect, useState } from "react";
import axios from "axios";
import Userservice from "../../../../services/UserService";
import FormValidator from "../../../../utilities/validator";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../Context/ToastContext";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";
function AddUser(props) {
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
    lastname: "",
    middlename: "",
    password: "",
    gender: "",
    image_url: "",
    position: "",
    phonenumber: "",
  });

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    password: "",
    gender: "",
    image_url: null,
    position: "",
    phonenumber: "",
    email: "",
  });

  const [imagePreview, setImagePreview] = useState(null); // Add a new state for the image preview

  const onChangeHandler = (e) => {
    if (e.target.name === "image_url") {
      const selectedImage = e.target.files[0];
      setImageFile(e.target.files[0]);
      setForm({
        ...form,
        image_url: selectedImage, // Change this line
      });
      setImagePreview(URL.createObjectURL(selectedImage));
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleback = (e) => {
    navigator("/dashbord#");
  };

  const handleuserRegistartion = async () => {
    const isvalid = FormValidator.addUser(form);
    if (!isvalid.success) {
      setError(isvalid.error);
      console.log(error);
    } else {
      setError(isvalid.error);
      const formData = new FormData();
      formData.append("firstname", form.firstname);
      formData.append("lastname", form.lastname);
      formData.append("middlename", form.middlename);
      formData.append("password", form.password);
      formData.append("gender", form.gender);
      formData.append("attachments", imageFile); // Use imageFile instead of form.imageFile
      formData.append("position", form.position);
      formData.append("phonenumber", form.phonenumber);
      formData.append("email", form.email);
      const response = await Userservice.register(formData);
      setToastData(response);
      if (response.success) {
        navigator("/alluser");
      }
    }
  };

  return (
    <>
      {isAdmin ? (
        <div>
          <div className="myinfoHeader ">
            <p className="float-right me-6 mt-5" onClick={handleback}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.6em"
                height="1.6em"
                viewBox="0 0 24 24"
                {...props}
              >
                <path
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                ></path>
              </svg>
            </p>

            <p className="text-3xl py-10 mx-[5%] md:mx-[10%] text-[#137E8F] font-semibold">
              User Registration
            </p>
          </div>

          <div className="myinfoForm py-[20px] ">
            <div className="">
              <div>
                <p className="mx-[5%] md:mx-[10%] font-semibold">Name</p>

                <div className=" md:grid md:grid-cols-3  w-[90%] md:w-[80%] mx-auto md:mt-[12px] mb-[30px]">
                  <div className="">
                    <input
                      name="firstname"
                      onChange={onChangeHandler}
                      type="text"
                      placeholder="First name"
                      className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                    />
                    <p className=" text-red-500">{error.firstname}</p>
                  </div>
                  <div>
                    <input
                      name="middlename"
                      onChange={onChangeHandler}
                      type="text"
                      placeholder="middle name"
                      className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                    />
                    <p className=" text-red-500">{error.middlename}</p>
                  </div>
                  <div>
                    <input
                      name="lastname"
                      onChange={onChangeHandler}
                      type="text"
                      placeholder="Last name"
                      className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                    />
                    <p className=" text-red-500">{error.lastname}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="  md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto ">
                  <div>
                    <p className="mb-[10px] font-semibold mt-5 md:mt-0">Role</p>
                    <select
                      name="position"
                      onChange={onChangeHandler}
                      id=""
                      className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                    >
                      <option value="">Select</option>
                      <option value="DOCTOR">Health Officer</option>
                      <option value="REGISTRER">Reigstrar</option>
                    </select>
                    <p className=" text-red-500">{error.position}</p>
                  </div>
                  <div>
                    <p className="mb-[10px] font-semibold mt-5 md:mt-0">
                      Gender
                    </p>
                    <select
                      name="gender"
                      onChange={onChangeHandler}
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
              </div>

              <div className="mt-8">
                <p className="mx-[5%] md:mx-[10%] font-semibold">Contact</p>
                <div className=" md:grid md:grid-cols-3  w-[90%] md:w-[80%] mx-auto mt-[10px]">
                  <div className="">
                    <input
                      name="phonenumber"
                      onChange={onChangeHandler}
                      type="number"
                      placeholder="Phone number"
                      className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                    />
                    <p className=" text-red-500">{error.phonenumber}</p>
                  </div>
                  <div>
                    <input
                      name="email"
                      onChange={onChangeHandler}
                      type="email"
                      placeholder="Email"
                      className="p-1 my-4 md:my-0 border-[1.25px] border-gray-200  w-[95%] outline-none"
                    />
                    <p className=" text-red-500">{}</p>
                  </div>
                  <div>
                    <input
                      name="password"
                      onChange={onChangeHandler}
                      type="password"
                      placeholder="Password"
                      className="p-1 my-4 md:my-0 border-[1.25px] border-gray-200  w-[95%] outline-none"
                    />
                    <p className=" text-red-500">{error.password}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 ">
                <p className="mx-[5%] md:mx-[10%] font-semibold">Image</p>
                <div className="flex items-center">
                  <input
                    type="file"
                    name="image_url"
                    onChange={onChangeHandler}
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
                onClick={handleuserRegistartion}
              >
                Register
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

export default AddUser;
