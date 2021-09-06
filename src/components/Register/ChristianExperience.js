import { Link } from "react-router-dom";

const ChristianExperience = () => {
  return (
    <div className="register__content">
      <div className="note reg__label">Christian Experience</div>
      <div className="form__control">
        <label>Are you born again?</label>
        <select className="form__control--input" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form__control">
        <label>Give a brief account of your conversion and experience of the Lord Jesus Christ</label>
        <textarea
          className="form__control--input"
          required
        ></textarea>
      </div>
      <div className="form__control">
        <label>How has the Lord been working in your life recently and how would you describe your relationship with Him today?</label>
        <textarea
          className="form__control--input"
          required
        ></textarea>
      </div>
      <div className="form__control">
        <label>Do you sense the call of God to go into ministry?</label>
        <select className="form__control--input">
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="i think so">I think so</option>
        </select>
      </div>
      <div className="form__control">
        <label>Are you (whether part time or full time) into ministry now?</label>
        <select className="form__control--input">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form__control">
        <label>Are there any spiritual gift(s) in expression in your life?</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Specify"
          required
        />
      </div>
      <div className="form__control">
        <label>What are your reasons for wishing to attend the Bible Seminary?</label>
        <textarea
          className="form__control--input"
          required
        ></textarea>
      </div>
      <div className="form__control">
        <label>Give the name of the Church/Ministry you attend</label>
        <input
          type="text"
          className="form__control--input"
          required
        />
      </div>
      <div className="form__control">
        <label>Give address of the Church/Ministry you attend</label>
        <textarea
          className="form__control--input"
          required
        ></textarea>
      </div>
      <div className="form__control">
        <label>Minister's Name</label>
        <input
          type="text"
          className="form__control--input"
          required
        />
      </div>
      <div className="form__control">
        <label>Minister's Email</label>
        <input
          type="email"
          className="form__control--input"
          required
        />
      </div>
      <div className="form__control">
        <label>Minister's Phone Number</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="+23490000000"
          required
        />
      </div>
      <div className="form__control">
        <label>Describe any Church related activities in which you are presently or have been involved</label>
        <textarea
          className="form__control--input"
          required
        ></textarea>
      </div>
      <div className="form__control">
        <label>Have you been baptized in water by immersion?</label>
        <select className="form__control--input" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form__control">
        <label>If Yes, when?</label>
        <input
          type="text"
          className="form__control--input"
          placeholder="Specify"
          required
        />
      </div>
      <div className="form__control">
        <label>Have you been baptized in the Holy Ghost with the evidence of speaking in tongues?</label>
        <select className="form__control--input" required>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="next__prev--box">
        <Link to="/register/relationship" className="formNavigator back">
          &larr; Back
        </Link>
        <Link to="/register/health" className="formNavigator forward">
          Next &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ChristianExperience;
