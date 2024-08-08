import React, { useState } from "react";
import axios from "axios";
import Userservice from "../../../../services/UserService";
import FormValidator from "../../../../utilities/validator";
import { useAuth } from "../../../../Context/AuthContext";
import UnauthorizedPage from "../../../Component/UnauthorizedContainer";

function UpdateUser(props) {
  const navigator = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator("/");
    }
  }, []);

  const [error, setError] = useState({
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
      setForm({
        ...form,
        image_url: selectedImage,
      });
      setImagePreview(URL.createObjectURL(selectedImage));
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleUpdateUser = async () => {
    //console.log(form);
    console.log(FormValidator.userUpdate(form));
    const isvalid = FormValidator.userUpdate(form);
    if (!isvalid.success) {
      setError(isvalid.error);
      console.log(error);
    } else {
      setError(isvalid.error);
      const response = await Userservice.update(form);
      props.fetchData();


      if (response.success == true) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    }
  };

  return (
    <>
     {isAdmin ? (
      <div className="bg-white rounded-lg p-6  w-[55%] mx-auto shadow-lg">
        <div className="myinfoHeader">
          <div className="flex justify-between">
            <p className="text-2xl py-3 text-[#137E8F] font-semibold">
              Edit User Profile
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
                  <p className="mb-[10px] font-semibold mt-5 md:mt-0">Gender</p>
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
          <div className="mt-5 mx-auto text-center">
            <button
              className="bg-[#137E8F] px-4 py-[6px] text-white  rounded-lg w-1/2 "
              onClick={handleUpdateUser}
            >
              Register
            </button>
          </div>
        </div>
      </div>
     ):(
      <UnauthorizedPage />
     )}
      
    </>
  );
}
export default UpdateUser;
