import React from "react";
import "./contact.css";
const InputField = ({label}) => {
  return (
    <div className="col-lg-6 d-flex flex-column mb-3">
          <label className="mx-2" htmlFor="">{label}</label>
          <input className="input-field col-lg-12 " type="text" />
        </div>
  )
}
const contact = () => {
  return (
    <div className="contact ps-5 text-aling-center mb-5  ">
      <h2> contact </h2>
      <form className="col-lg-12 row" action="">
        <InputField label ={"Name"}/>
        <InputField label ={"Email"}/>
        <InputField label ={"Numbaer"}/>
        <InputField label ={"Services"}/>

        <div className=" col-lg-12 d-flex flex-column mb-3 ">
          <label htmlFor="">Message</label>
          <textarea className="msg-box  " type="text"  ></textarea>
        </div>
      </form>

      <div >
        <button className="btn btn-primary" onclick="alert('Button Clicked!')">Submit</button>
      </div>
    </div>
  );
};

export default contact;
