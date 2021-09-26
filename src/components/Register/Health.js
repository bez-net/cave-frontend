import { React, useState } from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";

const Health = ({ formData, setForm, navigation }) => {
  const {
    disability,
    nervousill,
    anorexia,
    diabetesepilepsy,
    requiremedic,
    specialdiet,
    learndisability,
    usedilldrug,
    treatdrugaddic,
    hadsurgery,
    pastexpinfluence,
    healthissuedesc,
  } = formData;

  let [formOkay, setFormOkay] = useState(false);

  const validate = (e) => {
    if( disability && nervousill && anorexia && diabetesepilepsy && requiremedic && specialdiet && learndisability && usedilldrug && treatdrugaddic && hadsurgery && pastexpinfluence ) {    
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
            Health &amp; Medical Information
          </div>
          <span className="note">
            Note: The following questions in this sectioin are for counselling
            purposes and will in no way jeopardize your acceptance for the Bible
            School. <br />
            You are required to provide a Certificate of Fitness from a
            Government Hospital on arrival (for On-Campus Students).
          </span>

          <div className="form__control">
            <label>
              Do you suffer from any disablity which would limit your
              participation in practical duties? <span className="required">*</span>
            </label>
            <select 
              className="form__control--input" 
              name="disability"
              value={ disability } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>Have you had a nervous or mental illness at any time? <span className="required">*</span></label>
            <select className="form__control--input" name="nervousill" value={ nervousill } onChange={setForm} required>
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Have you suffered from or had treatment from anorexia nervosa or
              bulimia? <span className="required">*</span>
            </label>
            <select className="form__control--input" name="anorexia" value={ anorexia } onChange={ setForm } required>
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Do you have diabetes, epilepsy, blackouts or other diagnosed
              medical problem? <span className="required">*</span>
            </label>
            <select
              className="form__control--input"
              name="diabetesepilepsy"
              value={ diabetesepilepsy } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>Do you require any regular prescribed medication? <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="requiremedic"
              value={ requiremedic } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>Do you require a special diet for medical reasons? <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="specialdiet"
              value={ specialdiet } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>Do you have a learning disability? <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="learndisability"
              value={ learndisability } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Have you used tobacco, alcohol or illegal drugs in the last year? <span className="required">*</span>
            </label>
            <select
              className="form__control--input"
              name="usedilldrug"
              value={ usedilldrug } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Have you ever had treatment for alcoholism or drug addiction? <span className="required">*</span>
            </label>

            <select
              className="form__control--input"
              name="treatdrugaddic"
              value={ treatdrugaddic } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Have you had surgery within the past six months, or extended
              medical care? <span className="required">*</span>
            </label>
            <select className="form__control--input" name="hadsurgery" value={ hadsurgery } onChange={ setForm } required>
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Have you had anything in your past that could have an influence on
              your time in the Bible School? (e.g. Prison sentence, divorce,
              e.t.c) <span className="required">*</span>
            </label>
            <select
              className="form__control--input"
              name="pastexpinfluence"
              value={ pastexpinfluence } 
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              If you have answered "Yes" to any of these questions, please
              provide details (give explanation) on a separate sheet to be
              enclosed with this application. You may be required to provide a
              doctor's report
            </label>
            <textarea
              className="form__control--input"
              name="healthissuedesc"
              value={ healthissuedesc } 
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

export default Health;
