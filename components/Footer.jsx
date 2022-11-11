import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Enauro Web All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillLinkedin />
        <AiOutlineWhatsApp />
      </p>
    </div>
  );
};

export default Footer;
