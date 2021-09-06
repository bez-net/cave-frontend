import { Link } from "react-router-dom";

const OptAccScholarship = () => {
  return (
    <div className="register__content">
      <div className="note reg__label">Program &amp; Accommodation Option</div>

      <div className="form__control">
        <label>Learning Option</label>
        <select className="form__control--input" required>
          <option value="on-campus">On-Campus (Diploma Program)</option>
          <option value="online">Online (Certificate of Participation)</option>
        </select>
      </div>
      <div className="form__control">
        <label>Which Accommodation are you interested in?</label>
        <select className="form__control--input" required>
          <option value="shared">Shared Campus Hostel</option>
          <option value="none">None</option>
        </select>
      </div>

      <div className="note reg__label">Provost Scholarship Grant</div>
      <span className="note">
        Scholarship grants are made available through the generous donations of kind partners. The scholarship grants available are: <br />
        80% for Online Students and 86% for Oncampus Students <br />
        The scholarship grant is only available upon request for those who tryly believe that they cannot afford the fees. Please note that all Scholarship Grants are subject to availability of funds and the decision of the Scholarship Grant Board.
      </span>

      <div className="form__control">
        <label>Are you interested in the Scholarship</label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>If Yes, State reason.</label>
        <textarea 
            className="form__control--input"
            required
            ></textarea>
      </div>
      <div className="next__prev--box">
          <Link to="/register/workcontactreference" className="formNavigator back">
            &larr; Back
          </Link>
          <Link to="/register/condition" className="formNavigator forward">
            Next &rarr;
          </Link>
      </div>
    </div>
  );
};

export default OptAccScholarship;
