import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ap9fs8e",
        "template_9jzgs0p",
        form.current,
        "zlGOO6eMoZhy09W11"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ezravkatz@gmail.com</h5>
            <a href="mailto:ezravkatz@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <FiLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Join My Network</h5>
            <a
              href="https://www.linkedin.com/in/ezra-katz-22029a146/"
              target="_blank"
            >
              View My Profile
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>violetkatz</h5>
            <a href="https://m.me/violetkatz" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/*end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
