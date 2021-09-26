import React from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";
import { useHistory } from "react-router-dom";
import "./Login.css";


export const ComingSoon = () => {

    const history = useHistory();

    const handleDone = () => {
        history.push("/");
    }

    return (
        <div className="register">
      <ScrollToTop />
      <div className="register__header">
        <img src={logo} className="reg__logo" alt="adullam logo" />
        <h3>Registration Commence Shortly...</h3>
        <p>Do check again, thank you.</p>
        <button className="formNavigator forward" style={{ marginTop: "2rem" }} onClick={ handleDone }>
          Back Home <i className="fa fa-home"></i>
        </button>
      </div>
    </div>
    )
}
