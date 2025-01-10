import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tedu7gs", "template_58a9pub", form.current, {
        publicKey: "yqAFgU7BQZo7pgMBQ",
      })
      .then(
        () => {
          setMessage("Thanks! Your message has been sent.");
        },
        (error) => {
          setMessage(
            "Oops, something failed :( But you can find my email at the top of this page."
          );
          console.log(`${error}`);
        }
      );
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const groupStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  };

  const inputStyle = {
    borderWidth: "2px",
    borderStyle: "dotted",
    borderColor: "rgb(255, 182, 193)",
    borderRadius: "0.25rem",
    backgroundColor: "floralwhite",
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
    textAlign: "right",
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={formStyle}>
      <div style={groupStyle}>
        <label>Name</label>
        <input type="text" name="from_name" style={inputStyle} />
      </div>
      <div style={groupStyle}>
        <label>Email</label>
        <input type="email" name="from_email" style={inputStyle} />
      </div>
      <div style={groupStyle}>
        <label>Message</label>
        <textarea name="message" style={inputStyle} />
      </div>
      <input
        type="submit"
        value="Send"
        style={{ textAlign: "right", cursor: "pointer" }}
      />
      {message && <p style={{ textAlign: "right" }}>{message}</p>}
    </form>
  );
};
