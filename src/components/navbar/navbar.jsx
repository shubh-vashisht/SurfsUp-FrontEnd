import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "../button/button";
const Navbar = () => {
  const [click, setClicker] = useState(false);
  const [button1, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const closeMobileMenu = () => setClicker(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Long Beach
            <i class="fas fa-lightbulb ic"></i>
          </Link>
          <div className="menu-icon" onClick={() => setClicker(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/stay" className="nav-links" onClick={closeMobileMenu}>
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/eat" className="nav-links" onClick={closeMobileMenu}>
                Restaurants
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sports"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>
            </li>
          </ul>
          {button1 && (
            <Button
              buttonStyle="btn--outline"
              link="/login"
              style={{ textDecoration: "none" }}
            >
              Login
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
