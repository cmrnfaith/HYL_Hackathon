//=============React Elements=============//
import { MdDeviceHub } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

//TODO: implement this component
const Header = ({ loginStatus, user }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header-container">
      <Link to="/" id="header-icon-logo" onClick={closeMobileMenu}>
        <MdDeviceHub />
      </Link>

      <div className="header-icon">
        <Link to="/" onClick={closeMobileMenu}>
          uHUB
        </Link>
      </div>

      <div className={click ? "nav-options active" : "nav-options"}>
        <div className={click ? "" : "header-middle"}>
          <div className="header-link" onClick={closeMobileMenu}>
            <Link to="/events">Events</Link>
          </div>
          {user.is_host && (
            <div className="header-link" onClick={closeMobileMenu}>
              <Link to="/createevent">Create Event</Link>
            </div>
          )}
          <div className="header-link" onClick={closeMobileMenu}>
            <Link to="/hosts">Hosts</Link>
          </div>
          {!click ? (
            <div className="header-dropdown">
              <div className="header-dropdown-container">
                More
                <AiOutlineDown fontSize={18} className="header-down" />
              </div>
              <div className="header-dropdown-content">
                <Link
                  to="/about"
                  className="header-dropdown-item"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  to="/faq"
                  className="header-dropdown-item"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="header-link" onClick={closeMobileMenu}>
                <Link to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </div>
              <div className="header-link" onClick={closeMobileMenu}>
                <Link to="/faq" onClick={closeMobileMenu}>
                  FAQ
                </Link>
              </div>
            </>
          )}
        </div>

        {/* If else statement showing different items based on login status */}
        {loginStatus ? (
          <div className={click ? "" : "header-right"}>
            <div className="header-link" onClick={closeMobileMenu}>
              <Link to="/logout" onClick={closeMobileMenu}>
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className={click ? "" : "header-right"}>
            <div className="header-link" onClick={closeMobileMenu}>
              <Link to="/signup" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </div>

            <div className="header-link" onClick={closeMobileMenu}>
              <Link to="/login" onClick={closeMobileMenu}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};
export default Header;
