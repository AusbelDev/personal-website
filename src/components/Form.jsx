import "./Form.css";
import React, { useState } from "react";

function Form() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevContact) => {
      return {
        ...prevContact,
        [name]: value,
      };
    });
  }

  return (
    <div className="login-box">
      <h2>Let's Work Together!</h2>

      <form>
        <div className="user-box">
          <input
            type="text"
            name="fName"
            onChange={handleChange}
            value={contact.fName}
            placeholder=" "
          />
          <label htmlFor="fName">First Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="lName"
            onChange={handleChange}
            value={contact.lName}
            placeholder=" "
          />
          <label htmlFor="lName">Last Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={contact.email}
            placeholder=" "
          />
          <label htmlFor="email">Email</label>
        </div>
        <a href="http://youtube.com">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default Form;
