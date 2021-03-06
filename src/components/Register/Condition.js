import { React } from "react";
import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";

const Condition = ({ formData, setForm, navigation }) => {
  return (
    <div className="register">
      <ScrollToTop />
      <div className="register__header">
        <img src={logo} className="reg__logo" alt="adullam logo" />
        <h2 className="register__heading">Registration Form</h2>
        <p>Diploma in Theology and Ministry Application.</p>
      </div>
      <form className="register__form">
        <div className="register__content">
          <div className="note reg__label">Condition for Enrollment</div>
          <span className="note">
            <h4>TIMETABLE</h4>
            Students are expected to devote themselves unreservedly to their
            studies in lectures and study periods which are COMPULSORY, and to
            conform willingly and promptly to the program throughout the period.
            Punctuality and cooperation are essential for smooth running and
            well-being of the seminary and for personal discipline.
            <br />
            <br />
            All students are involved in regular outreach commitments which may
            involve an extended stay away from the School. <br />
            <br />
            <h4>STUDY OBLIGATION</h4>
            Students are expected to complete the Bible Seminary program applied
            for, arriving on the first day of school and remaining through to
            the CLOSING DATE.
            <br />
            <br />
            Students are required to purchase study materials for a few courses.{" "}
            <br />
            <br />
            Permission MUST be obtained from the Seminary Director for Students
            to be absent from lectures or for any school activity apart from the
            set break times and dates.
            <br />
            <br />
            <h4>APPEARANCE</h4>
            Please note that students are required to dress corporately to Class
            (A shirt/blouse on trousers/Skirt/Slacks as the case may be) Clean,
            neat and MODEST dress as worthy of a Christian who desires to
            glorify the Lord Jesus will be expected. Please show moderation and
            modesty at all times, regardless of prevailing fashions in a
            permissive society.
          </span>

          <div className="next__prev--box">
            <button
              onClick={() => navigation.previous()}
              className="formNavigator forward"
            >
              &larr; Back
            </button>
            <button
              onClick={() => navigation.next()}
              className="formNavigator forward"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Condition;
