import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/shared/logo.svg";
import HamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import CloseIcon from "../../assets/shared/icon-close.svg";

function Navbar() {
  const [menuState, setMenuHandler] = useState(false);
  const menuHandler = () => setMenuHandler(!menuState);
  return (
    <nav className="site-nav">
      <Link to="/">
        <img src={LogoIcon} alt="Space Tourism Logo" className="logo"></img>
      </Link>
      <hr />
      <div className="hamburgericon-container">
        {menuState ? (
          <img src={CloseIcon} alt="Close Icon" onClick={menuHandler}></img>
        ) : (
          <img
            src={HamburgerIcon}
            alt="Hamburger Menu Icon"
            onClick={menuHandler}
          ></img>
        )}
      </div>
      <ul className={menuState ? "menu-container  active" : "menu-container "}>
        <li>
          <Link to="/">
            <span>00</span> HOME
          </Link>
        </li>
        <li>
          <Link to="/destination">
            <span>01</span> DESTINATION
          </Link>
        </li>
        <li>
          <Link to="/crew">
            <span>02</span> CREW
          </Link>
        </li>
        <li>
          <Link to="/technology">
            <span>03</span> TECHNOLOGY
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
