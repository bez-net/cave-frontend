import { Link } from "react-router-dom";

const Agreement = () => {
  return (
    <div className="register__content">
      <div className="note reg__label">Enrollment Agreement</div>
      <span className="note">
        I certify that the information I provided on this application is
        complete and accurate to the best of my knowledge, and that Adullam (RCN
        Bible Seminary) is authorized to make whatever enquiries are necessary
        to certify the accuracy of my records. I have read through, fully
        understand and agree to the above "Conditions of Enrollment" and the
        Financial payment option. I agree to unreservedly carry out my studies
        and duties in accordance with this agreement at all times to the best of
        my ability. <br />
        <br />
        Further, I consent to the use of reference letters and reference checks
        in evaluating my application. If accepted as a student at Adullam, and
        in consideration thereof, I will submit cheerfully to all the
        regulations and policies of the seminary and seek to maintain a high
        standard of Christian integrity and Conduct.
      </span>

      <div className="form__control">
        <label>Do you agree with the above stated agreement?</label>
        <select className="form__control--input" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form__control">
        <label>Name of Applicant</label>
        <input 
            type="text"
            className="form__control--input"
            placeholder="Full Name"
            required
        />
      </div>

      <div className="next__prev--box">
        <Link to="/register/optaccscholarship" className="formNavigator back">
          &larr; Back
        </Link>
        <button className="submit">
          Register
        </button>
      </div>
    </div>
  );
};

export default Agreement;
