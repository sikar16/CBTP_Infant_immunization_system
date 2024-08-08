import React from 'react'
import { TextField, Typography } from "@mui/material";
import { SVGProps } from "react";
function ForgetPassword(props) {
  return (
    <>
    <div className="md:flex h-screen">
      <div className="left bg-[#137E8F] md:w-[26%] lg:w-[25%] hidden md:block">
        <p className="text-white pt-24 text-4xl px-3">
          Immunization Monitoring System
        </p>
        <div className="flex mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140.06px"
            height="135.31px"
            viewBox="0 0 24 24"
            {...props}
            
          >
            <path
              fill="white"
              d="M7 13.23q-.517 0-.874-.356q-.357-.357-.357-.874t.357-.874q.357-.357.874-.357t.874.357q.357.357.357.874t-.357.874q-.357.357-.874.357M7 17q-2.077 0-3.538-1.462Q2 14.077 2 12t1.462-3.538Q4.923 7 7 7q1.54 0 2.778.835q1.237.834 1.807 2.165h9.203l2 2l-3.192 3.154l-1.711-1.289l-1.808 1.327L14.298 14h-2.713q-.57 1.312-1.807 2.156Q8.54 17 7 17m0-1q1.477 0 2.52-.888q1.043-.889 1.336-2.112h3.76l1.43.967l1.858-1.332l1.621 1.22L21.381 12l-1-1h-9.525q-.293-1.223-1.336-2.112Q8.477 8 7 8Q5.35 8 4.175 9.175T3 12q0 1.65 1.175 2.825T7 16"              ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70px"
            height="46.67px"
            viewBox="0 0 24 24"
            className="mt-12"
            
            {...props}
          >
            <path
              fill="white"
              d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48l1.3-.75l-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7L4 8.47L3.15 7l-1.3.75l.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75l1.3.75l.85-1.48l.85 1.48l1.3-.75l-.85-1.48H15v-1.5h-1.7l.85-1.47l-1.3-.75L12 8.47L11.15 7l-1.3.75l.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47l-1.3-.75L20 8.47L19.15 7l-1.3.75l.85 1.47H17v1.5h1.7l-.85 1.48l1.3.75l.85-1.48l.85 1.48l1.3-.75l-.85-1.48H23z"
            ></path>
          </svg>
        </div>
      </div>{" "}
      <div className="right bg-white w-[75%] mx-auto pt-10 mt-20">
        <p className=" pt-10 text-3xl px-3 text-center md:hidden font-bold text-black">
          Immunization Monitoring System
        </p>
        <div className="w-4/5 max-w-md bg-white px-8 py-2 shadow-lg rounded-lg mx-auto pt-20">
          <p variant="h5" className="text-[#137E8F] text-2xl font-bold mb-6">
            Forget Password
          </p>
          <TextField
            label="Email"
            variant="outlined"
            className="w-full"
            InputProps={{ fullWidth: true, className: "p-[1px] mb-[20px]" }}
          />
         <div className='align text-end'>
             <button className="container w-1/4 mx-2 bg-[#137E8F] py-2 text-center text-white rounded-md">
            Cancel
          </button>
          <button className="container w-1/4 bg-[#137E8F] py-2 text-center text-white rounded-md">
            Search
          </button>
         </div>
         
        </div>
      </div>
    </div>
  </>
  )
}

export default ForgetPassword