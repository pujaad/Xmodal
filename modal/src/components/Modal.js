import React,{useState} from "react";
import "./Modal.css";
const Modal=({onOpen,onClose})=>{
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        phone:"",
        dob:""
    })
    const handleSubmit=(event)=>{
     event.preventDefault();
      const today=new Date();
      if(!formData.username){
        alert("Please fill out the username field")
        return;
      }
      if(!formData.email.includes("@")){
        alert('Invalid email. Please check your email address.');
        return;
      }
      if(!formData.phone.length==10){
        alert('Invalid phone number. Please enter a 10-digit phone number.');
        return;
      }
      if(new Date(formData.dob)>today){
        alert('Invalid date of birth.Date of birth cannot be in the future.');
        return;
      }
      onClose()
      alert("Form submitted successfully!")
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: ""
      });
    }
    const handleChange=(e)=>{
        const {id,value}= e.target;
        setFormData((prev)=>({
            ...prev,
            [id]:value
        }));

    }
    if(!onOpen){
    return null;
    }
    return (
         <div className="modal" onClick={onClose}>
            <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={formData.username} onChange={handleChange}required/>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required/>
            <br />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={formData.phoneNumber} onChange={handleChange} required/>
            <br />
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" value={formData.dateOfBirth} onChange={handleChange} required/>
            <br />
            <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Modal;