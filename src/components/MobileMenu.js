import logo from "../images/adullam-logo.png";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const MobileMenu = () => {
  const [open, setOpen] = useState({
    display: "none",
  });

  const mobileMenuClick = () => {
    setOpen({
      display: "block",
    });
  };

  const hideOverlayMobileMenu = () => {
    setOpen({
      display: "none",
    });
  };

  return (
    <div>
      <div
        className="overlay"
        onClick={hideOverlayMobileMenu}
        style={open}
      ></div>

      <button className="mobile-menu" onClick={mobileMenuClick}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>

      <nav className="mobile-nav" style={open}>
        <div className="footer-logo">
          <Link to="/" onClick={hideOverlayMobileMenu}>
            <img src={logo} alt="adullam-logo" className="logo" />
          </Link>
        </div>
        <ul className="mobile-links">
          <Link to="/" onClick={hideOverlayMobileMenu} className="nav-link">
            <li>Home</li>
          </Link>
          <NavHashLink
            to="/#about"
            onClick={hideOverlayMobileMenu}
            smooth
            className="nav-link"
          >
            <li>About</li>
          </NavHashLink>
          <NavHashLink
            to="/#testimonies"
            onClick={hideOverlayMobileMenu}
            smooth
            className="nav-link"
          >
            <li>Testimonies</li>
          </NavHashLink>
          <NavHashLink
            to="/#main-footer"
            onClick={hideOverlayMobileMenu}
            smooth
            className="nav-link"
          >
            <li>Contact Us</li>
          </NavHashLink>
          <Link
            to="/register"
            onClick={hideOverlayMobileMenu}
            className="nav-link"
          >
            <li>Register</li>
          </Link>
          <a href="https://adullam.ng/main/login_form.php"  className="nav-link"><li>Login</li></a> 
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
