import React from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";
import { useHistory } from "react-router-dom";
import "./Login.css";


export const Success = () => {

    const history = useHistory();

    const handleDone = () => {
        history.push("/");
    }

  return (
    <div className="register">
      <ScrollToTop />
      <div className="register__header">
        <img src={logo} className="reg__logo" alt="adullam logo" />
        <h3>Congratulations, you have been successfully registered.</h3>
        <p>You will receive a mail in your provided E-mail shortly!</p>
        <button className="formNavigator forward" style={{ marginTop: "2rem" }} onClick={ handleDone }>
          Done <i className="fa fa-check"></i>
        </button>
      </div>
    </div>
  );
};
