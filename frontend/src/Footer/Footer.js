//=============React Elements=============//
import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2 id="footer-logo">uHUB</h2>
          <p>
            Bringing Students Together
            <br /> All in One Place
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-heading footer-2">
            <h2>Get Connected</h2>
            <Link to="/events">Find Events</Link>
            <Link to="/createevent">Create</Link>
          </div>

          <div className="footer-heading footer-3">
            <h2>Learn More</h2>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>

      <hr className="footer-hr-style"></hr>
      <div className="footer-bottom">
        <div className="footer-bottom-copyright">
          &copy; {new Date().getFullYear()} UHUB. Calgary, Canada. All Rights
          Reserved
        </div>
        <Link className="footer-bottom-policy" to="/APE">
          Privacy Policy
        </Link>
        <Link className="footer-bottom-terms" to="/APE">
          Terms And Conditions
        </Link>
      </div>
    </div>
  );
};

export default FooterPage;
