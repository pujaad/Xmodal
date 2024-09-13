import React,{useState} from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen,setIsOpenModal]=useState(false)
  const handleOpenModal=()=>{
    setIsOpenModal(true)
  }
  const handleClose=()=>{
    setIsOpenModal(false)
  }
  return (
    <>
    <h1>User Details Modal</h1>
    <div>
    <button onClick={handleOpenModal}>Open Form</button>
    { isModalOpen &&
      <Modal onOpen={isModalOpen} onClose={handleClose}/>
    }
    </div>
    </>
  );
}

export default App;
