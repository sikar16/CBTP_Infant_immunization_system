import React, { useState } from 'react';
import UserRegistration from '../../../Page/Role/Admin/UserRegistration';
import Modal from "react-modal";
import Edit from "./Edit";

function ListUserComp(props) {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <tr>
        <td>{props.userInfo.username}</td>
        {props.userInfo.profiles.map((profile, profileIndex) => (
          <React.Fragment key={profileIndex}>
            <td>{profile.firstname}</td>
            <td>{profile.lastname}</td>
          </React.Fragment>
        ))}
        <td>{props.userInfo.role}</td>
        <td>{props.userInfo.phonenumber}</td>
        <td className="px-6 py-4">
          <button
            className="bg-[#137E8F] px-4 py-[5px] rounded-lg text-white"
            onClick={handleClick}
          >
            {!isActive ? "Deactive" : "Active"}
          </button>
        </td>
        <td>
          <Edit />
        </td>
      </tr>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Child Registration Modal"
        className=""
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
      >
        <UserRegistration closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default ListUserComp;