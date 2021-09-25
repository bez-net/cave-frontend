import { React, useState } from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";

const OptAccScholarship = ({ formData, setForm, navigation }) => {

  const { programoption, accomoption, scholarship, scholreason } = formData;

  let [formOkay, setFormOkay] = useState(false);

  const validate = (e) => {

    if( programoption && accomoption && scholarship ) {

      e.preventDefault();
      setFormOkay(true);
  
    }
    
  }

  return (

    <div className="register">
      <ScrollToTop />
      <div className="register__header">
        <img src={logo} className="reg__logo" alt="adullam logo" />
        <h2 className="register__heading">Registration Form</h2>
        <p>Diploma in Theology and Ministry Application.</p>
        <p>All fields with <strong className="required">*</strong> are required!</p>
      </div>
      <form className="register__form">
        <div className="register__content">
          <div className="note reg__label">
            Program &amp; Accommodation Option
          </div>

          <div className="form__control">
            <label>Learning Option <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="programoption"
              value={ programoption }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="on-campus">On-Campus (Diploma Program)</option>
              <option value="online">
                Online (Certificate of Participation)
              </option>
            </select>
          </div>
          <div className="form__control">
            <label>Which Accommodation are you interested in? <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="accomoption"
              value={ accomoption }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="shared">Shared Campus Hostel</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="note reg__label">Provost Scholarship Grant</div>
          <span className="note">
            Scholarship grants are made available through the generous donations
            of kind partners. The scholarship grants available are: <br />
            80% for Online Students and 86% for Oncampus Students <br />
            The scholarship grant is only available upon request for those who
            tryly believe that they cannot afford the fees. Please note that all
            Scholarship Grants are subject to availability of funds and the
            decision of the Scholarship Grant Board.
          </span>

          <div className="form__control">
            <label>Are you interested in the Scholarship <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="scholarship"
              value={ scholarship }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>If Yes, State reason.</label>
            <textarea
              className="form__control--input"
              name="scholreason"
              value={ scholreason }
              onChange={ setForm }
            ></textarea>
          </div>
          <div className="next__prev--box">
            <button
              onClick={() => navigation.previous()}
              className="formNavigator forward"
            >
              &larr; Back
            </button>

            { formOkay ? 
              
              <button onClick={ () => navigation.next() } className="formNavigator forward">Next &rarr;</button> : 
              
              <button className="formNavigator forward" onClick={ validate } >Next &nbsp;</button> 
            }
          </div>
        </div>
      </form>
    </div>
  );
};

export default OptAccScholarship;
