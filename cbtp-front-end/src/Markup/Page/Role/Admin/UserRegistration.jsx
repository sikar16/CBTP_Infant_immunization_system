import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";

function UserRegistration() {
  const navigator = useNavigate();
  const { isAdmin, isHp, isRegistrar, isMother, userData, isLoggedIn } =
    useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator("/");
    }
  }, []);
  return (
    <>
    {isAdmin ? (<div className="max-w-md mx-auto">
      <p className="text-3xl py-10 mx-[5%] md:mx-[10%] text-[#137E8F] font-semibold">
        New User Registration
      </p>{" "}
      <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="grid-username"
          >
            User Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="grid-username"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="grid-role"
          >
            Role
          </label>
          <div className="relative">
            <select
              className="block appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-role"
            >
              <option value="">Select Role</option>
              <option value="doctor">Doctor</option>
              <option value="register">Register</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M13 8a3 3 0 11-6 0 3 3 0 016 0zm5 9a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </form>
    </div>):(
      <UnauthorizedPage />
    )}</>
    
  );
}

export default UserRegistration;
