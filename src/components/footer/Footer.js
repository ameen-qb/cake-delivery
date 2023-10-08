import React from "react";
import "./Footer.css";
import logo2 from "../../images/logo2.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <nav className="footer">
        <img src={logo2} className="nav-logo2" />
        <div className="footer-items-left">
          <div className="cpright">
            © 2022 Cake Factory. All Rights Reserved
          </div>
        </div>
        <span className="footer-items-right">
          <Link to="/" className="footer-items-right-text">
            Home
          </Link>
          <Link to="about" className="footer-items-right-text">
            About
          </Link>
          <Link to="cake" className="footer-items-right-text">
            Cakes
          </Link>
          <Link to="#" className="footer-items-right-text">
            Contact
          </Link>

          <img src={instagram} className="instagram" />
          <img src={facebook} className="facebook" />
          <img src={twitter} className="twitter" />
        </span>
      </nav>
    </footer>
  );
}
