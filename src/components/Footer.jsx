import React, { useContext } from "react";
import "./Footer.css";
import { FooterContext } from "../context/FooterContext";
import logoAYO from "../assets/LogooAYO.png";

const Footer = () => {
  const { toggleContact } = useContext(FooterContext);

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logoAYO} alt="Logo" />
        <p>© 2018 ASEAN Youth Organization. All rights reserved.</p>
      </div>
      <div className="footer-middle">
        <p>AYO Kreasi Internasional</p>
        <p>Arcade Business Center 6-03</p>
        <p>North Jakarta, Indonesia</p>
      </div>
      <div className="footer-right">
        <button onClick={toggleContact}>Contact Us</button>
      </div>
    </footer>
  );
};

export default Footer;
