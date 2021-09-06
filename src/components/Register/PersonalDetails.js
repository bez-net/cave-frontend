import { Link } from "react-router-dom";

const PersonalDetails = () => {
  
  return (
    <div className="register__content">
      <div className="note reg__label">Personal Details</div>
      <div className="form__control">
        <label>First Name</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="First Name"
          required
        />
      </div>
      <div className="form__control">
        <label>Last Name</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Last Name"
          required
        />
      </div>
      <div className="form__control">
        <label>Middle Name</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Middle Name"
          required
        />
      </div>
      <div className="form__control">
        <label>Date-of-Birth</label>
        <input
          type="date"
          className="form__control--input"
          required
        />
      </div>
      <div className="form__control">
        <label>Gender</label>
        <select className="form__control--input" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form__control">
        <label>Contact Address</label>
        <textarea className="form__control--input" required></textarea>
      </div>
      <div className="form__control">
        <label>City</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="City"
          required
        />
      </div>
      <div className="form__control">
        <label>State/Province</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="State/Province"
          required
        />
      </div>
      <div className="form__control">
        <label>Country</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Country"
          required
        />
      </div>
      <div className="form__control">
        <label>Postal Code/Zip</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Postal Code/Zip"
        />
      </div>
      <div className="form__control">
        <label>Phone No.</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Phone No. (WhatsApp)"
          required
        />
      </div>
      <div className="form__control">
        <label>Email</label>
        <input
          type="email"
          className="form__control--input"
          placeholder="Email"
          required
        />
      </div>
      <div className="form__control">
        <label>Nationality</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Nationality"
          required
        />
      </div>
      <div className="form__control">
        <label>Professional Training</label>
        <input
          type="email"
          className="form__control--input"
          placeholder="Professional Training"
          required
        />
      </div>
      <div className="next__prev--box">
        <Link to="" className="formNavigator back">
          &larr; Back
        </Link>
        <Link to="/register/financial" className="formNavigator forward">
          Next &rarr;
        </Link>
      </div>

      </div>
  );
};

export default PersonalDetails;
