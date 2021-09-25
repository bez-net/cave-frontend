import { React, useState } from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";
// import { useHistory } from "react-router-dom";

const Agreement = ({ formData, setForm, navigation }) => {

  const { agree } = formData;

  let [formOkay, setFormOkay] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();

  const validate = (e) => {
    
    if(agree) {
      e.preventDefault();
      setFormOkay(true);
    }
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('PERFORM POST REQUEST TO DATABAASE !!! ');
    // setIsLoading(true);

    fetch('api.beznet.org/adullams', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then( (res) => {

      // send emails
      // setIsLoading(false) ;

      // redirect to success page 

      // history.push('/success-page');
      // console.log('registration successful');
      console.log(res);

    }).catch(err => {
        console.log(err.message);
    });

    console.log(formData);

    
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
          <div className="note reg__label">Enrollment Agreement</div>
          <span className="note">
            I certify that the information I provided on this application is
            complete and accurate to the best of my knowledge, and that Adullam
            (RCN Bible Seminary) is authorized to make whatever enquiries are
            necessary to certify the accuracy of my records. I have read
            through, fully understand and agree to the above "Conditions of
            Enrollment" and the Financial payment option. I agree to
            unreservedly carry out my studies and duties in accordance with this
            agreement at all times to the best of my ability. <br />
            <br />
            Further, I consent to the use of reference letters and reference
            checks in evaluating my application. If accepted as a student at
            Adullam, and in consideration thereof, I will submit cheerfully to
            all the regulations and policies of the seminary and seek to
            maintain a high standard of Christian integrity and Conduct.
          </span>

          <div className="form__control">
            <label>Do you agree with the above stated agreement? <span className="required">*</span></label>
            <select className="form__control--input" name="agree" value={ agree } onChange={ setForm } required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form__control">
            <label>Name of Applicant <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="next__prev--box">
            <button
              onClick={() => navigation.previous()}
              className="formNavigator forward"
            >
              &larr; Back
            </button>

            { formOkay ? 
              
              <button onClick={ handleSubmit } className="formNavigator forward">Register <i className="fa fa-check"></i></button> : 
              
              <button className="formNavigator forward" onClick={ validate } >Next &nbsp;</button> 
            }
          </div>
        </div>
        { console.log(formOkay) }
      </form>
    </div>
  );
};

export default Agreement;
