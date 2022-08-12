import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="/" className="navbar-brand">
        <img
          src="https://grampower.com/static/images/gp-logo.svg"
          alt="Gram Power"
        />
      </a>
      <div className="menu-container">
        <div className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
