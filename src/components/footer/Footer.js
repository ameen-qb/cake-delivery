import React from "react";
import "./Footer.css";
import logo2 from "../../images/logo2.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";

export default function Footer() {
  return (
    <footer>
      <hr className="hr1"></hr>
      <nav className="footer">
        <img src={logo2} className="nav-logo2" />
        <div className="footer-items-left">
          <div className="cpright">
            © 2022 Cake Factory. All Rights Reserved
          </div>
        </div>
        <div className="footer-items-right">
          <div className="footer-items-right-text">Home</div>
          <div className="footer-items-right-text">About</div>
          <div className="footer-items-right-text">Cakes</div>
          <div className="footer-items-right-text">Contact</div>

          <img src={instagram} className="instagram" />
          <img src={facebook} className="facebook" />
          <img src={twitter} className="twitter" />
        </div>
      </nav>
    </footer>
  );
}
