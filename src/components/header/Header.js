import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import profile from "../../images/profile.png";
import cart from "../../images/cart.png";

export default function Header({ showProfile }) {
  return (
    <header>
      <nav>
        <div className="nav-items-left">
          <img src={logo} className="logo" alt="logo" />
          <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
          </span>
          {/* <div className="nav-items-left-1"> */}
          <a href="#" class="left">
            Home
          </a>
          <a href="#" class="left">
            About
          </a>
          <a href="#" class="left">
            Cakes
          </a>
          <a href="#" class="left">
            Contact
          </a>
          {/* </div> */}
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
      <hr className="hr"></hr>
    </header>
  );
}
