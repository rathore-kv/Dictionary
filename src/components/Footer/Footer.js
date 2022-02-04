import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by <a target="__blank">Rathore_kv</a>
      </span>
      <div className="iconContainer">
        <a
          href="https://www.linkedin.com/in/karambir-singh-rathorekv"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/rathore-kv" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://codepen.io/rathore-kv" target="__blank">
          <i className="fab fa-codepen.io fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
