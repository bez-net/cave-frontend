import { React, useState } from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";

const ChristianExperience = ({ formData, setForm, navigation }) => {
  const {
    bornagain,
    salvbrief,
    godsworkings,
    callofgod,
    intoministry,
    spiritgifts,
    reason,
    churchname,
    churchaddress,
    pastorname,
    pastoremail,
    pastorphone,
    churchinvolve,
    waterbapt,
    baptdate,
    holyghostbapt,
  } = formData;

    let [formOkay, setFormOkay] = useState(false);

    const validate = (e) => {
      if(bornagain && salvbrief && godsworkings && callofgod && intoministry && spiritgifts && reason && churchname && churchaddress && pastorname && pastoremail && pastorphone && churchinvolve && waterbapt && holyghostbapt ){
          
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
          <div className="note reg__label">Christian Experience</div>
          <div className="form__control">
            <label>Are you born again? <span className="required">*</span></label>
            <select className="form__control--input" name="bornagain" value={ bornagain } onChange={ setForm } required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Give a brief account of your conversion and experience of the Lord
              Jesus Christ. <span className="required">*</span>
            </label>
            <textarea
              className="form__control--input"
              name="salvbrief"
              value={ salvbrief }
              onChange={ setForm }
              required
            ></textarea>
          </div>
          <div className="form__control">
            <label>
              How has the Lord been working in your life recently and how would
              you describe your relationship with Him today? <span className="required">*</span>
            </label>
            <textarea
              className="form__control--input"
              name="godsworkings"
              value={ godsworkings }
              onChange={ setForm }
              required
            ></textarea>
          </div>
          <div className="form__control">
            <label>Do you sense the call of God to go into ministry? <span className="required">*</span></label>
            <select className="form__control--input" name="callofgod" value={ callofgod } onChange={ setForm } required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="i think so">I think so</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Are you (whether part time or full time) into ministry now? <span className="required">*</span>
            </label>
            <select className="form__control--input" name="intoministry" value={ intoministry } onChange={ setForm }  required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Are there any spiritual gift(s) in expression in your life? <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Specify"
              name="spiritgifts"
              value={ spiritgifts } 
              onChange={ setForm } 
              required
            />
          </div>
          <div className="form__control">
            <label>
              What are your reasons for wishing to attend the Bible Seminary? <span className="required">*</span>
            </label>
            <textarea
              className="form__control--input"
              name="reason"
              value={ reason } 
              onChange={ setForm } 
              required
            ></textarea>
          </div>
          <div className="form__control">
            <label>Give the name of the Church/Ministry you attend. <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              name="churchname"
              value={ churchname } 
              onChange={ setForm } 
              required
            />
          </div>
          <div className="form__control">
            <label>Give address of the Church/Ministry you attend <span className="required">*</span></label>
            <textarea
              className="form__control--input"
              name="churchaddress"
              value={ churchaddress } 
              onChange={ setForm } 
              required
            ></textarea>
          </div>
          <div className="form__control">
            <label>Minister's Name. <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              name="pastorname"
              value={ pastorname } 
              onChange={ setForm } 
              required
            />
          </div>
          <div className="form__control">
            <label>Minister's Email <span className="required">*</span></label>
            <input
              type="email"
              className="form__control--input"
              name="pastoremail"
              value={ pastoremail } 
              onChange={ setForm } 
              required
            />
          </div>
          <div className="form__control">
            <label>Minister's Phone Number <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              name="pastorphone"
              value={ pastorphone } 
              onChange={ setForm } 
              required
            />
          </div>
          <div className="form__control">
            <label>
              Describe any Church related activities in which you are presently
              or have been involved <span className="required">*</span>
            </label>
            <textarea
              className="form__control--input"
              name="churchinvolve"
              value={ churchinvolve } 
              onChange={ setForm } 
              required
            ></textarea>
          </div>
          <div className="form__control">
            <label>Have you been baptized in water by immersion? <span className="required">*</span></label>
            <select className="form__control--input" name="waterbapt" value={ waterbapt } onChange={ setForm }  required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form__control">
            <label>If Yes, when?</label>
            <input
              type="date"
              className="form__control--input"
              placeholder="Specify"
              name="baptdate"
              value={ baptdate } 
              onChange={ setForm } 
            />
          </div>
          <div className="form__control">
            <label>
              Have you been baptized in the Holy Ghost with the evidence of
              speaking in tongues? <span className="required">*</span>
            </label>
            <select
              className="form__control--input"
              name="holyghostbapt"
              value={ holyghostbapt } 
              onChange={ setForm } 
              required
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

export default ChristianExperience;
