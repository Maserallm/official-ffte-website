import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaInbox } from "react-icons/fa";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false
  });

  const { name, email, subject, message, sent } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const formSubmit = async e => {
    e.preventDefault();
    // eslint-disable-next-line
    const form = await axios.post("/api/form", {
      name,
      email,
      subject,
      message
    });

    setContact({ sent: true });
    resetForm();
  };

  const resetForm = () => {
    setContact({ sent: false, name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-ffte">
      <p>CONNECT WITH US HERE:</p>
      {/* <div className="social-media"></div> */}
      <div className="contact-form">
        <form
          onSubmit={formSubmit}
          name="contact"
          // action="/send"
          method="post"
          style={{ maxWidth: "500px", margin: "auto" }}
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          + <input type="hidden" name="form-name" value="contact" />
          <div className="input-container">
            <i className="icon">
              <FaUser />
            </i>
            <input
              onChange={onChange}
              className="input-field"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
            />
          </div>
          <div className="input-container">
            <i className="icon">
              <FaEnvelope />
            </i>
            <input
              onChange={onChange}
              className="input-field"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
            />
          </div>
          <div className="input-container">
            <i className="icon">
              <FaInbox />
            </i>
            <input
              onChange={onChange}
              className="input-field"
              type="subject"
              placeholder="Subject"
              name="subject"
              value={subject}
            />
          </div>
          <div className="input-container">
            <textarea
              onChange={onChange}
              value={message}
              name="message"
              rows="15"
              cols="68"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            {sent === false ? "Send" : "Sending Message!"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
