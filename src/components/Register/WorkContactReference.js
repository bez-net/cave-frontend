import { Link } from "react-router-dom";

const WorkContactReference = () => {
  return (
    <div className="register__content">
        <div className="note reg__label">Talent &amp; Emergency Contact</div>
      <div className="form__control">
        <label>
          Do you have any specific abilities or experience that could be useful
          for the practical running of the Bible Seminary? (e.g. Carpentry,
          plumbing, electrician, e.t.c)
        </label>
        <textarea className="form__control--input" required></textarea>
      </div>
      <div className="form__control">
        <label>What are your Hobbies?</label>
        <textarea className="form__control--input" required></textarea>
      </div>
      <div className="form__control">
        <label>Do you play any instrument?</label>
        <select className="form__control--input" required>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="form__control">
        <label>If Yes, which instrument?</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Specify"
        />
      </div>
      <div className="form__control">
        <label>Emergency Contact</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Name"
          required
        />
      </div>
      <div className="form__control">
        <label>Emergency Contact</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Relationship"
          required
        />
      </div>
      <div className="form__control">
        <label>Emergency Contact</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="form__control">
        <label>Emergency Contact Address</label>
        <textarea 
            className="form__control--input"
            required
            ></textarea>
      </div>

        <div className="note reg__label">References</div>

        <span className="note">Please provide the names and addresses of those who will be willing to refer you for the Bible School, NOT from your immediate family. Reference 1 should be a Minister/Elder/Deacon while Reference 2 should be a Friend/Associate</span>

        <div className="form__control">
        <label>Reference 1 Name</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Name"
          required
        />
      </div>
      <div className="form__control">
        <label>Reference 1 Email</label>
        <input
          type="email"
          className="form__control--input"
          placeholder="Email"
          required
        />
      </div>
      <div className="form__control">
        <label>Reference 1 Phone No.</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Phone"
          required
        />
      </div>
      <div className="form__control">
        <label>Reference 2 Name</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Name"
          required
        />
      </div>
      <div className="form__control">
        <label>Reference 2 Email</label>
        <input
          type="email"
          className="form__control--input"
          placeholder="Email"
          required
        />
      </div>
      <div className="form__control">
        <label>Reference 2 Phone No.</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Phone"
          required
        />
      </div>
      <div className="next__prev--box">
          <Link to="/register/health" className="formNavigator back">
            &larr; Back
          </Link>
          <Link to="/register/optaccscholarship" className="formNavigator forward">
            Next &rarr;
          </Link>
      </div>
    </div>
  );
};

export default WorkContactReference;
