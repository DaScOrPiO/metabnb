import React from "react";

export default function IconContainer() {
  return (
    <div className="icon-container">
      <a href="/">
        <img
          src={require("../images/Home-Header Section/home-icon.svg").default}
          alt="home-icon"
        />
        <img
          src={require("../images/Home-Header Section/logo-text.svg").default}
          alt="logo-text"
        />
      </a>
    </div>
  );
}
