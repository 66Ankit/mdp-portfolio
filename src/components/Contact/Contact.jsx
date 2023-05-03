import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    var from_name = name + " " + phone + " " + email;
    var data_post = {
      service_id: "service_r3nps8l",
      template_id: "template_lcdu4un",
      user_id: "lcdsepcPdznec56GD",

      template_params: {
        from_name: from_name,
        to_name: "Jasbir",
        message: message,
      },
    };

    console.log(data_post);

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data_post, {
        contentType: "application/json",
      })

      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });

    setemail("");
    setmessage("");
    setname("");
    setphone("");
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
          value={name}
        />
        <input
          type="email"
          name=""
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
          value={email}
        />
        <input
          type="tel"
          name=""
          onChange={(e) => {
            setphone(e.target.value);
          }}
          placeholder="Phone"
          value={phone}
        />
        <textarea
          type="textarea"
          name="textValue"
          placeholder="Message"
          rows={5}
          cols={50}
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
