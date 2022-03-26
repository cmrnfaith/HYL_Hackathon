//=============React Elements=============//
import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2 id="footer-logo">uHUB</h2>
          <p>Bringing Students Together, All in One Place</p>
        </div>

        <div className="footer-links">
          <div className="footer-heading footer-2">
            <h2>Get Connected</h2>
            <Link to="/">Find Events</Link>
            <Link to="/about">Create</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-heading footer-3">
            <h2>Learn More</h2>
            <Link to="/tutorial">How to Use This Site</Link>
            <Link to="/faq">FAQ</Link>
            <a href="https://www.investopedia.com/trading-skills-and-essentials-4689654">
              Student Center
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-hr-style"></hr>
      <div className="footer-bottom">
        <div className="footer-bottom-copyright">
          &copy; {new Date().getFullYear()} UHUB. Calgary, Canada. All Rights
          Reserved
        </div>
        <Link className="footer-bottom-policy" to="/about">
          Privacy Policy
        </Link>
        <Link className="footer-bottom-terms" to="/about">
          Terms And Conditions
        </Link>
      </div>
    </div>
  );
};

export default FooterPage;
