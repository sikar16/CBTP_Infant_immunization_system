import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom"; 
import ChildRegstration from "../../../Page/Role/Reciption/ChildRegstration";
import { useAuth } from "../../../../Context/AuthContext";

function MotherListComp(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [childrens, setChildrens] = useState([]);
  const { selectChild } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.data && props.data.mothers && props.data.mothers[0]) {
      if (props.data.mothers[0].child) {
        setChildrens(props.data.mothers[0].child);
      }
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const history = useHistory(); // Initialize useHistory
  const handleProfile = () => {
    console.log("Profiles data:", props.data.profiles); // Check if data is available
    navigate("/profile", { state: { profiles: props.data.profiles } }); // Navigate to "/profile" with state

  };
  


  const handleClick = () => {
    console.log("object");
    setIsOpen(!open);
  };
  console.log(props.data.profiles[0].firstname);

  return (
    <>
      <tr className="border-b ">
        <td scope="row" className="px-6 py-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"
            ></path>
          </svg>
          <p
            className="pt-[1px] cursor-pointer transition-all duration-500 ease-in-out overflow-hidden"
            onClick={handleProfile}
          >
            {props.data.profiles[0].firstname}{" "}
            {props.data.profiles[0].middlename}
          </p>
        </td>
        <td className="px-6 py-4">{props.data.username}</td>
        <td>
          <button className="me-3">
            <div className=" mb-1 w-full rounded-lg  shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)]  p-3">
              <div
                className="bg-[#137E8F] flex  gap-4 p-2 text-white outline-none transition-all duration-300 ease-out hover:ease-in rounded-lg"
                onClick={handleClick}
              >
                <h4 className="  text-white ">List Child</h4>
                <svg
                  className={!open ? "openFaq1 " : "openFaq1 rotate-180"}
                  width="18"
                  height="18"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  !open
                    ? "max-h-0"
                    : "max-h-[200px]  text-base leading-relaxed text-body-color"
                }`}
              >
                <ul>
                  {childrens &&
                    childrens.map((item) => (
                      <li
                        onClick={() => {
                          props.handelinfo();
                          props.setSingleChild(item);
                          props.setSingleMother(props.data);
                        }}
                        key={item.id}
                      >
                        {item.firstname} {item.middlename}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </button>
          <button
            className="bg-[#137E8F]  p-2 text-white ms-2 hover:bg-[#265056] rounded-lg "
            onClick={openModal}
          >
            Add Child
          </button>
        </td>
      </tr>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Child Registration Modal"
        className="fixed inset-0 flex items-center justify-center "
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
      >
        <ChildRegstration
          mother_id={props.data.id}
          closeModal={closeModal}
          fetchData={props.fetchData}
        />
      </Modal>
    </>
  );
}

export default MotherListComp;


