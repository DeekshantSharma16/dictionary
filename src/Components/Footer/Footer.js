import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
Get connected with us on social networks:
      <div className="iconContainer">
        <a href="https://www.instagram.com/deekshantsharma_/" target="__blank">
          <p class="instagram">
            <i class="fab fa-instagram fa-2x"></i>
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/deekshant-sharma-752347139"
          target="__blank"
        >
          <i className="fab fa-linkedin-in fa-2x"></i>
        </a>
        <a
          href="https://github.com/deeksh1008"
          target="__blank"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://mail.google.com/mail/u/1/#inbox"
          target="__blank"
        >
          <i className="fab fa-google fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
