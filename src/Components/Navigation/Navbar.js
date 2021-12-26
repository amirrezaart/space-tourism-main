import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, withRouter } from "react-router-dom";
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
          <NavLink to="/" exact
            activeClassName="active-link"
          >
            <span>00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination"
            activeClassName="active-link"
          >
            <span>01</span> DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew"
            activeClassName="active-link"
          >
            <span>02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology"
            activeClassName="active-link"
          >
            <span>03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);
