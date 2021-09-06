import { Link } from "react-router-dom";

const Health = () => {
  return (
    <div className="register__content">
      <div className="note reg__label">Health &amp; Medical Information</div>
      <span className="note">
        Note: The following questions in this sectioin are for counselling
        purposes and will in no way jeopardize your acceptance for the Bible
        School. <br />
        You are required to provide a Certificate of Fitness from a Government Hospital on arrival (for On-Campus Students).
      </span>

      <div className="form__control">
        <label>
          Do you suffer from any disablity which would limit your participation
          in practical duties?
        </label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>Have you had a nervous or mental illness at any time?</label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>
          Have you suffered from or had treatment from anorexia nervosa or
          bulimia?
        </label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>
          Do you have diabetes, epilepsy, blackouts or other diagnosed medical
          problem?
        </label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>Do you require any regular prescribed medication?</label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>Do you require a special diet for medical reasons?</label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>Do you have a learning disability?</label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>
          Have you used tobacco, alcohol or illegal drugs in the last year?
        </label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>
          Have you ever had treatment for alcoholism or drug addiction?
        </label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>
          Have you had surgery within the past six months, or extended medical
          care?
        </label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>
          Have you had anything in your past that could have an influence on
          your time in the Bible School? (e.g. Prison sentence, divorce, e.t.c)
        </label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>
          If you have answered "Yes" to any of these questions, please provide
          details (give explanation) on a separate sheet to be enclosed with
          this application. You may be required to provide a doctor's report
        </label>
        <textarea className="form__control--input" required></textarea>
      </div>

      <div className="next__prev--box">
          <Link to="/register/christianexperience" className="formNavigator back">
            &larr; Back
          </Link>
          <Link to="/register/workcontactreference" className="formNavigator forward">
            Next &rarr;
          </Link>
      </div>
    </div>
  );
};

export default Health;
