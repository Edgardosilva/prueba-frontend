import React, { useState } from "react";
import ModalContent from "./ModalContent";

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <button
        onClick={openModal}
        className="flex items-center justify-center font-medium font-roboto text-[14px] bg-primary text-white rounded-[4px] shadow hover:bg-secondary transition w-[143px] h-[40px] "
      >
        Abrir Modal
      </button>

      {isOpen && (
       <ModalContent closeModal={closeModal} />
      )}
    </div>
  );
};

export default ModalButton;
