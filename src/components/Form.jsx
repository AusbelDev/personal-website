import "./Form.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SpringModal from "./Modal";

function Form() {
  const form = useRef();
  const [form_content, setName] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setName({ ...form_content, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form_content.from_name === "" ||
      form_content.user_email === "" ||
      form_content.message === ""
    ) {
      handleOpen();
    } else {
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
    }
  };
  return (
    <div className="login-box">
      <h2>Let's Work Together!</h2>
      <form ref={form} onSubmit={sendEmail} autoComplete={"off"}>
        <div className="user-box">
          <input
            type="text"
            name="from_name"
            placeholder=" "
            value={form_content.from_name}
            onChange={handleChange}
          />
          <label htmlFor="fName">What's Your Name? *</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="user_email"
            placeholder=" "
            value={form_content.user_email}
            onChange={handleChange}
            autoComplete={"off"}
          />
          <label htmlFor="lName">Where can i reach you? *</label>
        </div>
        <div className="user-box">
          <textarea
            rows={1}
            type="text"
            name="message"
            placeholder=" "
            value={form_content.message}
            onChange={handleChange}
          />
          <label htmlFor="email">What's your message? *</label>
        </div>
        <button style={{ color: "white" }} type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      {open ? <SpringModal open={open} handleClose={handleClose} /> : null}
    </div>
  );
}

export default Form;
