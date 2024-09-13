import React, { useState, useRef, useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <h1>User Details Modal</h1>
      <div>
        <button onClick={handleOpenModal}>Open Form</button>
        {isModalOpen && (
          <div ref={modalRef}>
            <Modal onOpen={isModalOpen} onClose={handleClose} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;