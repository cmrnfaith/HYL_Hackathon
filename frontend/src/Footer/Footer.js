//=============React Elements=============//
import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2 id="footer-logo">Excessive Alpha</h2>
          <p>Helping users to make and test crypto trading strategies</p>
        </div>

        <div className="footer-links">
          <div className="footer-heading footer-2">
            <h2>About Excessive Alpha</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-heading footer-3">
            <h2>Learn More</h2>
            <Link to="/tutorial">Tutorial</Link>
            <Link to="/faq">Frequently Asked Questions</Link>
            <a href="https://www.investopedia.com/trading-skills-and-essentials-4689654">
              External Resources
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-hr-style"></hr>
      <div className="footer-bottom">
        <div className="footer-bottom-copyright">
          &copy; {new Date().getFullYear()} ExcessiveAlpha. Calgary, Canada. All
          Rights Reserved
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
