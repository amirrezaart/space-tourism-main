import React, { useState } from "react";
import "./HamburgerMenu.css";
import HamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import CloseIcon from "../../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [menuState, setMenuHandler] = useState(false);
  const menuHandler = () => setMenuHandler(!menuState);
  return (
    <div className="hamburgermenu-container">
      {menuState ? (
        <img src={CloseIcon} alt="Close Icon" onClick={menuHandler}></img>
      ) : (
        <img
          src={HamburgerIcon}
          alt="Hamburger Menu Icon"
          onClick={menuHandler}
        ></img>
      )}
      <div className={menuState ? "menu-container active" : "menu-container"}>
        <ul className="menu-list-container">
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
      </div>
    </div>
  );
}

export default HamburgerMenu;
