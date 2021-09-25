import { React, useState } from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";

const WorkContactReference = ({ formData, setForm, navigation }) => {

  const {
    helpfulabilities,
    hobbies,
    playinstrument,
    instrument,
    emergcontname,
    emergcontrel,
    emergphone,
    emergaddress,
    refonename,
    refoneemail,
    refonephone,
    reftwoname,
    reftwoemail,
    reftwophone
  } = formData;

  let [formOkay, setFormOkay] = useState(false);

  const validate = (e) => {

    if(emergcontname && emergcontrel && emergphone && emergaddress && refonename && refoneemail && refonephone && reftwoname && reftwoemail && reftwophone ) {

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
          <div className="note reg__label">Talent &amp; Emergency Contact</div>
          <div className="form__control">
            <label>
              Do you have any specific abilities or experience that could be
              useful for the practical running of the Bible Seminary? (e.g.
              Carpentry, plumbing, electrician, e.t.c)
            </label>
            <textarea
              className="form__control--input"
              name="helpfulabilities"
              value={helpfulabilities}
              onChange={ setForm }
            ></textarea>
          </div>
          <div className="form__control">
            <label>What are your Hobbies?</label>
            <textarea
              className="form__control--input"
              name="hobbies"
              value={hobbies}
              onChange={setForm}
            ></textarea>
          </div>
          <div className="form__control">
            <label>Do you play any instrument? <span className="required">*</span></label>
            <select
              className="form__control--input"
              name="playinstrument"
              value={playinstrument}
              onChange={setForm}
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form__control">
            <label>If Yes, which instrument?</label>
            <input
              type="text"
              className="form__control--input"
              name="instrument"
              value={instrument}
              onChange={setForm}
              placeholder="Specify"
            />
          </div>
          <div className="form__control">
            <label>Emergency Contact <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Name"
              name="emergcontname"
              value={emergcontname}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Emergency Contact <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Relationship"
              name="emergcontrel"
              value={emergcontrel}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Emergency Contact <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Phone Number"
              name="emergphone"
              value={emergphone}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Emergency Contact Address <span className="required">*</span></label>
            <textarea
              className="form__control--input"
              name="emergaddress"
              value={emergaddress}
              onChange={setForm}
              required
            ></textarea>
          </div>

          <div className="note reg__label">References</div>

          <span className="note">
            Please provide the names and addresses of those who will be willing
            to refer you for the Bible School, NOT from your immediate family.
            Reference 1 should be a Minister/Elder/Deacon while Reference 2
            should be a Friend/Associate
          </span>

          <div className="form__control">
            <label>Reference 1 Name <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Name"
              name="refonename"
              value={refonename}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Reference 1 Email <span className="required">*</span></label>
            <input
              type="email"
              className="form__control--input"
              placeholder="Email"
              name="refoneemail"
              value={refoneemail}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Reference 1 Phone No. <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Phone"
              name="refonephone"
              value={refonephone}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Reference 2 Name <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Name"
              name="reftwoname"
              value={reftwoname}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Reference 2 Email <span className="required">*</span></label>
            <input
              type="email"
              className="form__control--input"
              placeholder="Email"
              name="reftwoemail"
              value={reftwoemail}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Reference 2 Phone No. <span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Phone"
              name="reftwophone"
              value={reftwophone}
              onChange={setForm}
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
                
                <button onClick={ () => navigation.next() } className="formNavigator forward">Next &rarr;</button> : 
                
                <button className="formNavigator forward" onClick={ validate } >Next &nbsp;</button> 
              }
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkContactReference;
