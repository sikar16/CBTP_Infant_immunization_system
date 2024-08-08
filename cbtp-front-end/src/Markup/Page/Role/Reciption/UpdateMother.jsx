import React, { useState } from "react";
import axios from "axios"
import MotherService from "../../../../services/MotherService";
import FormValidator from "../../../../utilities/validator";
function UpdateMother() {
  const [error, setError] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    date_of_birth: "",
    phonenumber: "",
    email: "",
    gender: "",
    password:"",
    image_url: "",
    emergencycontact: "",
    zone: "",
    wereda: "",
    housenum: "",
  });

  const [form, setForm] = useState({
    firstname:"",
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
  });

  const onChangeUpdatemother=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleupdateMother=async ()=>{

    // console.log(form)
    console.log(FormValidator.updatemother(form))
  
    const isvalid=FormValidator.updatemother(form)
    if(!isvalid.success){
      setError(isvalid.error)
      console.log(error)
    }
    else{
      setError(isvalid.error)
    const respones=await MotherService.update(form)
    if(respones.status===200){
      alert("Mother Update Successfully")
    }
    else{
      alert("Something went wrong")
    }
    }
  
  
    
  }



  return (
    <>
      <div>
        <div className="myinfoHeader ">
          <p className="text-3xl py-10 mx-[5%] md:mx-[10%] text-[#137E8F] font-semibold">
            Update Mother Information
          </p>{" "}
        </div>
        <div className="myinfoForm py-[20px] shadow-lg shadow-blue-500 ">
          <div className="">
            <div>
              <p className="mx-[5%] md:mx-[10%] font-semibold">Name</p>

              <div className=" md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto md:mt-[12px] mb-[30px]">
                <div className="">
                  <input
                  onChange={onChangeUpdatemother}
                  name="firstname"
                    type="text"
                    placeholder="First name"
                    className="p-1 border-[1.25px] my-4 md:my-0 border-gray-200  w-[95%] outline-none"
                  />
              <p className=" text-red-500">{error.firstname}</p>
                </div>
                <div>
                  <input
                  onChange={onChangeUpdatemother}
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
                onChange={onChangeUpdatemother}
                name="dateofbirth"
                  type="date"
                  className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                />
                              <p className=" text-red-500">{error.dateofbirth}</p>

              </div>
              <div>
                <p className="mb-[10px] font-semibold mt-5 md:mt-0">Gender</p>
                <select
                onChange={onChangeUpdatemother}
                name="gender"
                  id=""
                  className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                >
                  <option value="">Select</option>
                  <option value="famale">Female</option>
                  <option value="male">Male</option>
                </select>
                <p className=" text-red-500">{error.gender}</p>

              </div>
            </div>
            <div className="mt-5">
              <div className="  md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto ">
                <div className="">
                  <p className="mb-[10px] font-semibold">Contact Number</p>
                  <input
                  onChange={onChangeUpdatemother}
                  name="phonenum"
                    type="number"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                                  <p className=" text-red-500">{error.phonenum}</p>

                </div>
                <div>
                  <p className="mb-[10px] font-semibold mt-5 md:mt-0">Email</p>
                  <input
                  onChange={onChangeUpdatemother}
                  name="email"
                    type="email"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                                                    <p className=" text-red-500">{error.email}</p>

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
                  onChange={onChangeUpdatemother}
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
                  onChange={onChangeUpdatemother}
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
                    onChange={onChangeUpdatemother}
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
                  onChange={onChangeUpdatemother}
                  name="emergencycontact"
                    type="number"
                    className="p-1 border-[1.25px] border-gray-200  w-[95%] outline-none"
                  />
                                                                      <p className=" text-red-500">{error.emergencycontact}</p>

                </div>
              </div>
            </div>
          </div>

          <div className="mt-[6%] mx-auto flex justify-center ">
                <button className="bg-[#137E8F] mx-auto w-[40%] px-4 py-[6px] text-white rounded-lg text-xl" onClick={handleupdateMother}>Submit</button>
              </div>
        </div>
      </div>
    </>
  );
}

export default UpdateMother;
