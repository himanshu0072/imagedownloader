import React from "react";
import "../style/style.css";
import logo from "../images/logo.png";

function Title() {
  return (
    <>
      <div className="logo-title">
        <img src={logo} alt="ImageDownloader" id="Logo"></img>
        <p>ImageDownloader</p>
      </div>
    </>
  );
}

export default Title;
