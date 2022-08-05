import "./Form.css";
import React, { useState } from "react";

function Form() {
  const [contact, setContact] = useState({
    fName: "",
    email: "",
    message: "",
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
          <label htmlFor="fName">What's Your Name?</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={contact.email}
            placeholder=" "
          />
          <label htmlFor="lName">Where can i reach you?</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="message"
            onChange={handleChange}
            value={contact.message}
            placeholder=" "
          />
          <label htmlFor="email">What's your message?</label>
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
