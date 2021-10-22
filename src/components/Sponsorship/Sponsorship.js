import React from "react";
import logo from "../../images/adullam-logo.png";
import "./sponsorship.css";
export const Sponsor = () => {
  return (
    <div>
      <div className="register">
        <div className="register__header">
          <img src={logo} className="reg__logo" alt="adullam logo" />
          <h1 className="register__heading">Sponsorship / Partnership</h1>
        </div>
      </div>
    </div>
  );
};
