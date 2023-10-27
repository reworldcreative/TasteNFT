import "./popUp.scss";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import closeIcon from "@/img/icons/close-icon.svg";

export default function PopUpWrapper({ children, isOpenPopUp, toggleModal }) {
  const [isOpen, setIsOpen] = useState(isOpenPopUp);

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    setIsOpen(isOpenPopUp);
  }, [isOpenPopUp]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="buy nft Modal window"
    >
      {children}
      <button className="closeModalButton" onClick={toggleModal}>
        <img src={closeIcon} alt="close icon" />
      </button>
    </Modal>
  );
}
