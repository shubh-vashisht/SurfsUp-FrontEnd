import React from "react";
import "./footer.css";
import { Button } from "../button/button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Long Beach is Amazing! Come Give us a visit!
        </p>
        <p className="footer-subscription-text">
          Here are some useful links below:
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Long Beach</h2>
            <Link to="/sign-up">How we operate</Link>
            <Link to="/">Employment</Link>
            <Link to="/">LifeGuards</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Email</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Facilities</h2>
            <Link to="/github">Restaurants</Link>
            <Link to="/linkedin">Hotels</Link>
            <Link to="/">Adventures</Link>
            <Link to="/">Healthcare</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/github">GitHub</Link>
            <Link to="/linkedin">LinkedIn</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Long Beach
              <i class="fas fa-umbrella-beach ic"></i>
            </Link>
          </div>
          <small className="website-rights">Long Beach © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/github"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/linkedin"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
