import { React, useState } from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";

const Relationship = ({ formData, setForm, navigation }) => {
  const {
    rel_status,
    weddate,
    spousename,
    marriagedate,
    spouseagree,
    childname,
    friendname,
    friendrel,
    adullaminfo,
    havecloserel,
  } = formData;

  let [formOkay, setFormOkay] = useState(false);

  const validate = (e) => {
    if(rel_status && adullaminfo && havecloserel) {

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
          <div className="note reg__label">Relationships</div>
          <div className="form__control">
            <label>Relationship Status <span className="required">*</span></label>

            <select
              className="form__control--input"
              name="rel_status"
              value={rel_status}
              onChange={setForm}
              required
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="engaged">Engaged</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="divorced">Divorced</option>
              <option value="single parent">Single Parent</option>
              <option value="single parent">Single Parent</option>
            </select>
          </div>
          <div className="form__control">
            <label>Indicate wedding date if any</label>
            <input
              type="date"
              className="form__control--input"
              name="weddate"
              value={weddate}
              onChange={setForm}
            />
          </div>
          <div className="form__control">
            <label>Name of Spouse, if Married</label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Spouse"
              name="spousename"
              value={spousename}
              onChange={setForm}
            />
          </div>
          <div className="form__control">
            <label>Date of Marriage</label>
            <input
              type="date"
              className="form__control--input"
              name="marriagedate"
              value={marriagedate}
              onChange={setForm}
            />
          </div>
          <div className="form__control">
            <label>
              Do you have your spouse's full agreement to attend Adullam?
            </label>
            <select
              className="form__control--input"
              name="spouseagree"
              value={spouseagree}
              onChange={setForm}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form__control">
            <label>Names and DOB of Children, if any</label>
            <textarea
              className="form__control--input"
              name="childname"
              value={childname}
              onChange={setForm}
            ></textarea>
          </div>
          <div className="form__control">
            <label>Names of friend or relative applying, if any</label>
            <textarea
              className="form__control--input"
              name="friendname"
              value={friendname}
              onChange={setForm}
            ></textarea>
          </div>

          <div className="form__control">
            <label>What is his/her relationship with you?</label>
            <input
              type="text"
              className="form__control--input"
              name="friendrel"
              value={friendrel}
              onChange={setForm}
            />
          </div>
          <div className="form__control">
            <label>How did you hear of Adullam <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              name="adullaminfo"
              value={adullaminfo}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Have you had a close relative attend Adullam? <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="havecloserel"
              value={havecloserel}
              onChange={setForm}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
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

export default Relationship;
