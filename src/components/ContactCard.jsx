import React from "react";
import User from "../images/user.png";
import "./contactCard.css";

function ContactCard() {
  return (
    <div className="contact-card">
      <div className="right">
        <img src={User} alt="user" />
        <div className="info">
          <p>rakshith</p>
          <p>rakshith@gmail.com</p>
        </div>
      </div>
      <div className="left">
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}

export default ContactCard;
