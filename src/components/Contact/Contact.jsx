import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <h1 className="heading-text">Contact Us</h1>
      <form className="contact-form">
        <input
          type="text"
          name=""
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          type="email"
          name=""
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="tel"
          name=""
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Phone"
        />
        <textarea
          type="textarea"
          name="textValue"
          placeholder="Message"
          rows={5}
          cols={50}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
