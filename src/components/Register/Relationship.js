import { Link } from "react-router-dom";

const Relationship = () => {
  return (
    <div className="register__content">
      <div className="note reg__label">Relationships</div>
      <div className="form__control">
        <label>Relationship</label>
        <select className="form__control--input" required>
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
        />
      </div>
      <div className="form__control">
        <label>Name of Spouse, if Married</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Spouse"
        />
      </div>
      <div className="form__control">
        <label>Date of Marriage</label>
        <input
          type="date"
          className="form__control--input"
        />
      </div>
      <div className="form__control">
        <label>Do you have your spouse's full agreement to attend Adullam?</label>
        <select className="form__control--input">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
      </div>
      <div className="form__control">
        <label>Names and DOB of Children, if any</label>
        <textarea
          className="form__control--input"
        ></textarea>
      </div>
      <div className="form__control">
        <label>Names of friend or relative applying, if any</label>
        <textarea
          className="form__control--input"
        ></textarea>
      </div>

      <div className="form__control">
        <label>What is his/her relationship with you?</label>
        <input
          type="text"
          className="form__control--input"          
        />
      </div>
      <div className="form__control">
        <label>How did you hear of Adullam</label>
        <input
          type="text"
          className="form__control--input"
          required
        />
      </div>
      <div className="form__control">
        <label>Have you had a close relative attend Adullam?</label>
        <select className="form__control--input">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
      </div>

      <div className="next__prev--box">
        <Link to="/register/financial" className="formNavigator back">
          &larr; Back
        </Link>
        <Link to="/register/christianexperience" className="formNavigator forward">
          Next &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Relationship;
