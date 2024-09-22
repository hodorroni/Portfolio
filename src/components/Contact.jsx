import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isErrorOccured, setError] = useState(false);
  const [showMessage, setShow] = useState(false);
  const messageToShow = !isErrorOccured
    ? "Successfully sent the message"
    : "Error occured while sending the message";
  const form = useRef();
  function onFullNameChange(event) {
    setFullName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm("service_c9c5jwv", "template_kkpempi", form.current, {
        publicKey: "rUV7EWRZhSAEfkIZ9",
      })
      .then(
        () => {
          setShow(true);
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setError(true);
          setShow(true);
        }
      );
  }

  //useeffect which will run only when the showmessage is changes and it runs for 3 seconds
  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShow(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);
  return (
    <>
      {showMessage && (
        <div className="form_popup">
          <h2>{messageToShow}</h2>
        </div>
      )}

      <div id="contact">
        <h1>Keep in touch.</h1>
        <form id="email_section" onSubmit={handleSubmit} ref={form}>
          <input
            className="input_styles"
            name="user_name"
            type="text"
            value={fullName}
            onChange={onFullNameChange}
            placeholder="Full Name"
            required
          ></input>

          <input
            className="input_styles email_validation"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            size={30}
            required
            placeholder="Email"
          ></input>
          <textarea
            className="input_styles"
            name="message"
            maxLength={150}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            required
          ></textarea>
          <button className="project-card__button form_btn" type="submit">
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
}
