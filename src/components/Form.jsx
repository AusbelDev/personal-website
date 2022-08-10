import "./Form.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hxmn5hf",
        "template_4dmwbtc",
        form.current,
        "NCxyjQj3JMGCnLIlS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="login-box">
      <h2>Let's Work Together!</h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className="user-box">
          <input type="text" name="from_name" placeholder=" " />
          <label htmlFor="fName">What's Your Name?</label>
        </div>
        <div className="user-box">
          <input type="email" name="user_email" placeholder=" " />
          <label htmlFor="lName">Where can i reach you?</label>
        </div>
        <div className="user-box">
          <input type="text" name="message" placeholder=" " />
          <label htmlFor="email">What's your message?</label>
        </div>
        <a href="http://youtube.com">
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <button style={{ color: "white" }} type="submit">
            Submit
          </button>
        </a>
      </form>
    </div>
  );
}

export default Form;
