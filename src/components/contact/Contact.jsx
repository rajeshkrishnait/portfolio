import React, { useState } from "react";
import "./contact.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from 'emailjs-com';
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = (e) => {
   e.preventDefault();

   if (!userName || !email || !message) {
     alert("Please fill in all fields");
     return;
   }

   // Set isSubmitting to true while the request is being made
   setIsSubmitting(true);
    // Replace with your own service ID, template ID, and user ID from EmailJS
    emailjs.sendForm(
      'service_wnxqbmj',
      'template_bum2wi1',
      e.target,
      'CbUyEzsR6JdnA6bLG'
    )
    .then((result) => {
      console.log(result.text);
      alert('Email sent successfully!');
    })
    .catch((error) => {
      console.log(error.text);
      alert('Failed to send email.');
    });
 };

  return (
    <div className="contactSection">
      <h1 ref={ref} className="title3">
        Contact Me
      </h1>
      <div className="contact">
        <div className="left">
          <div data-scroll data-scroll-speed="0.02" className="thankyou">
            Hope my profile was impressive enough for you and your goals. Please send a message, I will try to revert as quickly as possible.
          </div>
          <div className="links">
            <a href="" target="_blank">
              <LinkedInIcon style={{ fontSize: 24, padding: 8 }} />
            </a>
            <a href="" target="_blank">
              <GitHubIcon style={{ fontSize: 24, padding: 8 }} />
            </a>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input
                placeholder="name"
                type="text"
                id="name"
                name="name"
                value={userName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                placeholder="email"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea
                placeholder="message"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                color: isSubmitting ? "#e7e7e7" : "#1a1a1a",
              }}
            >
              {isSubmitting
                ? "sending mail"
                : isSubmitted
                ? "Thank you!"
                : "Submit"}
            </button>
            <div className="copyright">
              © 2024, Built with React By Rajesh. 
              references from <a href="https://github.com/Mithesh-B">Mitesh</a> and <a href="https://v4.brittanychiang.com/#content">Britanny</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;
