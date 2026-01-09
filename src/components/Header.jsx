import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Wyreflow</div>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Career</li>
          <li>Industries</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
