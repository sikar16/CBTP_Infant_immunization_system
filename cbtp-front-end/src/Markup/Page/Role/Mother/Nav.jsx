import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";


function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {
    isAdmin,
    isHp,
    isRegistrar,
    isMother,
    userData,
    isLoggedIn,
    fetchData,
  } = useAuth();
  // console.log(isAdmin)
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log("object");
    //remove token fromJSON,
    localStorage.removeItem("token");
    fetchData();
    location.reload();
  };

  return (
    <div>
      <nav className=" border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className=" mx-10 text-2xl font-semibold whitespace-nowrap ">
            Logo
          </span>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`mx-auto w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
              <li>
                <a
                  href="#"
                  className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-850 ease-out hover:ease-in"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                >
                  Services
                </a>
              </li>
              {isMother && isLoggedIn && (
                <li>
                  <Link
                    to="/childinfo"
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                  >
                    Childinfo
                  </Link>
                </li>
              )}
              {/* {isHp && isLoggedIn && (
                <li>
                  <Link
                    to="/childinfo"
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                  >
                    Chlidinfo
                  </Link>
                </li>
              )} */}
            
              {isLoggedIn &&(isRegistrar || isHp)&& (
                <li>
                  <Link
                    to="/motherlist"
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                  >
                    Motherlist
                  </Link>
                </li>
              )}
              
                {isAdmin && isLoggedIn && (
                <li>
                  <Link
                    to="/addnews"
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                  >
                  Add News
                  </Link>
                </li>
              )}
                {isAdmin && isLoggedIn && (
                <li>
                  <Link
                    to="/dashbord"
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                  >
                     Dashbord
                  </Link>
                </li>
              )}
              {isAdmin && isLoggedIn && (
                <li>
                  <Link
                    to="/alluser"
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                  >
                    All Users
                  </Link>
                </li>
              )}
              
              <li>
                {isLoggedIn ? (
                  <button
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="block py-1 px-3  text-white rounded md:bg-transparent hover:text-black   hover:bg-gray-50 transition duration-150 ease-out hover:ease-in"
                    onClick={() => navigate("/login")}
                  >
                    LogIn
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
