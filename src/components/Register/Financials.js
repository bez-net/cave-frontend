import logo from "../../images/adullam-logo.png";
import { React } from "react";
import ScrollToTop from "../ScrollToTop";

const Financials = ({ fromData, setForm, navigation }) => {
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
          <div className="note reg__label">
            January 2022 Application Information
          </div>
          <span className="note">
            The RCN Bible Seminary - Adullam, offers a Diploma Program in
            Theology and Ministry.
            <br />
            A training program that is both spiritually imparting and
            intellectual.
            <br />
            <br />
            <h4>What You will Learn</h4>
            <ul>
              <li>Develop foundational understanding of Biblical Truth</li>
              <li>
                Develop Spiritual stamina for Christian living in a failing
                world
              </li>
              <li>
                Develop contemporary strategies for effective Ministry within
                various contexts.
              </li>
            </ul>
            <br />
            <h4>Program Options</h4>
            <ul>
              <li>On-Campus</li>
              <li>Online (Certificate of Participation)</li>
            </ul>
            <br />
            <h4>60 Credit Hours</h4>
            <br />
            <h4>Program Length</h4>
            2 Semesters (of 4 Months each) <br />
            There are two session annually:
            <ul>
              <li>February Session</li>
              <li>July Session</li>
            </ul>
            <br />
            <h4>Financials</h4>
            Online program Fees: <strong>$1,200</strong> (per semester) <br />
            This covers Registration, tuition, Administrative charges and
            Internet Management Fee. <br />
            <br />
            On-Campus program Fees: <strong>$1,000</strong> (per semester){" "}
            <br />
            This covers Registration, tuition, and Administrative charge. <br />
            <h4>Payment Options</h4>
            Payment can be made once for the entire program, or in two
            instalments at the beginning of each semester. <br />
            <strong>Note:</strong> The exchange rate for Students paying into
            the Naira Account is N400 per Dollar.
            <h4>Provost Scholarship Grants</h4>
            Scholarship grants are made available through the generous donations
            of kind partners. <br />
            The Scholarship grants available are:
            <ul>
              <li>80% for Online Students</li>
              <li>86% for On-Campus Students</li>
            </ul>
            The Scholarship grant is only available upon request for those who
            truly believe that they cannot afford the fees. <br />
            Please note that all Scholarship Grants are subject to availability
            of funds and the decision of the Scholarship Grants Board. <br />
            <br />
            <h4>ACCOMMODATION</h4>
            Note that the school fees does not cover for accommodation. <br />
            There are two Accommodation options for those travelling in to
            Makurdi. <br />
            <ul>
              <li>
                <h5>Option 1:</h5>
              </li>
              Some Students rent an apartment in Makurdi town, with the average
              range of N80,000 - N150,000 for single room. It is entirely up to
              the students to make the arrangements for themselves. However,
              Adullam Help Desk (+2349014526570) will be glad to support where
              necessary.
              <li>
                <h5>Option 2:</h5>
              </li>
              There is a shared room space of 4 persons per room within the
              school environment for N30,000 per session (covering for the two
              semesters). <br />
              <br />
              You may contact the Help Desk on +2349014526570 to make
              reservations.
            </ul>
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

export default Financials;
