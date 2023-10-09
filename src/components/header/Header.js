import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import profile from "../../assets/images/profile.png";
import cart from "../../assets/images/cart.png";
import { Link } from "react-router-dom";

export default function Header({ showProfile }) {
  return (
    <header>
      <nav>
        <div className="nav-items-left">
          <img src={logo} className="logo" alt="logo" />
          <Link to="/" className="left">
            Home
          </Link>
          <Link to="about" className="left">
            About
          </Link>
          <Link to="cake" className="left">
            Cakes
          </Link>
          <Link to="contact" className="left">
            Contact
          </Link>
        </div>
        <div className="nav-items-right">
          <img src={search} className="search" alt="search" />

          {showProfile ? (
            <img src={profile} className="profile" alt="profile" />
          ) : (
            <div className="login">Login </div>
          )}

          <img src={cart} className="cart" alt="cart" />
        </div>
      </nav>
    </header>
  );
}
