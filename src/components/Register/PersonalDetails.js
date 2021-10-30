import logo from "../../images/adullam-logo.png";
import { React, useState } from "react";
import ScrollToTop from "../ScrollToTop";

const PersonalDetails = ({ formData, setForm, navigation }) => {
  const {
    first_name,
    last_name,
    middle_name,
    dob,
    gender,
    address,
    city,
    state,
    country,
    zip,
    phone_no,
    email,
    nationality,
    profession,
  } = formData;

  let [formOkay, setFormOkay] = useState(false);

  const validate = (e) => {
    if (
      first_name &&
      last_name &&
      dob &&
      gender &&
      address &&
      city &&
      state &&
      country &&
      zip &&
      phone_no &&
      email &&
      nationality &&
      profession
    ) {
      e.preventDefault();
      setFormOkay(true);
    }
  };

  return (
    <div className="register">
      <ScrollToTop />

      {/* NOTIFY USER OF BEST BROWSER  */}
      <div>
        <span className="warn warning"></span>
        <i>
          {" "}
          Kindly use <strong> Firefox web browser </strong>for best experience.
        </i>
      </div>
      {/* END OF NOTIFICATION OF BROSWER  */}

      <div className="register__header">
        <img src={logo} className="reg__logo" alt="adullam logo" />
        <h2 className="register__heading">Registration Form</h2>
        <p>Diploma in Theology and Ministry Application.</p>
        <p>
          Fields with <span className="required"> * </span> are REQUIRED!
        </p>
      </div>
      <form className="register__form">
        <div className="register__content">
          <div className="note reg__label">Personal Details</div>
          <div className="form__control">
            <label>
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={setForm}
              required
            />
          </div>

          <div className="form__control">
            <label>
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>Middle Name</label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Middle Name"
              name="middle_name"
              value={middle_name}
              onChange={setForm}
            />
          </div>
          <div className="form__control">
            <label>
              Date-of-Birth<span className="required">*</span>
            </label>
            <input
              type="date"
              className="form__control--input"
              name="dob"
              value={dob}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              Gender<span className="required">*</span>
            </label>
            <select
              className="form__control--input"
              name="gender"
              value={gender}
              onChange={setForm}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female" selected>
                Female
              </option>
            </select>
          </div>
          <div className="form__control">
            <label>
              Contact Address <span className="required">*</span>
            </label>
            <textarea
              className="form__control--input"
              name="address"
              value={address}
              onChange={setForm}
              required
            ></textarea>
          </div>
          <div className="form__control">
            <label>
              City<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="City"
              name="city"
              value={city}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              State/Province<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="State/Province"
              name="state"
              value={state}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              Country<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Country"
              name="country"
              value={country}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              Postal Code/Zip<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Postal Code/Zip"
              name="zip"
              value={zip}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              Phone No.<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Phone No. (WhatsApp)"
              name="phone_no"
              value={phone_no}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              Email<span className="required">*</span>
            </label>
            <input
              type="email"
              className="form__control--input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              Nationality<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Nationality"
              name="nationality"
              value={nationality}
              onChange={setForm}
              required
            />
          </div>
          <div className="form__control">
            <label>
              Professional Training<span className="required">*</span>
            </label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Professional Training"
              name="profession"
              value={profession}
              onChange={setForm}
              required
            />
          </div>

          <div className="next__prev--box">
            {formOkay ? (
              <button
                onClick={() => navigation.next()}
                className="formNavigator forward"
              >
                Next &rarr;
              </button>
            ) : (
              <button className="formNavigator forward" onClick={validate}>
                Next &nbsp;
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
