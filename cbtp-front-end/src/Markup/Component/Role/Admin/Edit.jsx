import React, { useState } from 'react'
import Modal from "react-modal";
import UpdateUser from '../../../Page/Role/Admin/UpdateUser';

function Edit(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"
                                    onClick={openModal}

                ></path></svg>
                <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Child Registration Modal"
          className=" "
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-55"
        >

          <UpdateUser closeModal={closeModal} />
          
        </Modal>  
    </>
  )
}

export default Edit