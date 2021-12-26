import React from "react";
import LogoIcon from "../../assets/shared/logo.svg";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={LogoIcon} alt="Space Tourism Logo"></img>
    </div>
  );
}
