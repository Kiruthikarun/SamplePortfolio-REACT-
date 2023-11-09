import React from "react";
import linkedin from '../assests/linkedin.png'
import mail from '../assests/mail.png'
import ws from '../assests/whatsapp.png'
import './Contact.css';

const Contact = () => {
  return (
    <section className="container">
      <h1>Contact:</h1>

          <a href="#">
            <img src={mail} className="imgsrc"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/kiruthikarun"

          >
            <img src={linkedin} className="imgsrc"></img>
          </a>
          <a
            href="#"
          >
            <img src={ws}  className="imgsrc"></img>
          </a>
    </section>
  );
};

export default Contact;
