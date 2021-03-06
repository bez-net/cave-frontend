import React from "react";
import "./About.css";

// images
import provost from "../../images/Adullam-provost.jpg";
import onCampus from "../../images/onCampus.jpeg";
import online from "../../images/online-course.jpg";
import apostleArome from "../../images/Adullam-chairman.jpg";
import adullamProvost from "../../images/provost.jpg";
import barrGodsent from "../../images/Rev_Godsent.jpg";
import revTony from "../../images/Rev_Tony.jpg";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      {/* Header Banner */}
      <div className="about__header">
        <header className="section-header">
          <h1>ABOUT ADULLAM</h1>
        </header>
      </div>

      {/* more info section */}
      <section id="more-info">
        <div className="more__info container">
          <div className="more__info--content">
            <div className="info__img--container">
              <img src={provost} alt="adullam provost" />
            </div>
            <div className="more__info--text">
              <h2>RCN Theological Seminary - Adullam</h2>
              <p>
                The school is called RCN Theological Seminary - Adullam. Adullam
                means Justice of the people. It was mentioned eight (8) times in
                scriptures. The Cave of Adullam stood on the old Roman road in
                the valley of Elah, not far from Gath, which was the scene of
                David's memorable victory over Goliath (1Samuel 17:2). The Cave
                of Adullam became a place of resort for David. It was the
                location where all that were stranded, discourage and had given
                up on life resorted to David to find meaning (1Sam. 22:1-2).
              </p>
              <p>
              Adullam became a forge where charlatans are turned into champions, 
the PLACE, both for the apprentice and the veteran, and a retreat center 
for refreshing and retooling (2Sam.23:13-17). It was called "the glory of 
Israel" (Micah 1:15).
              </p>

              <h2>Academic Programs</h2>
              <p>
                The programs are designed to establish the believer in the
                foundations of the Christian Faith. It begins to expose the
                believer to the realities of the Kingdom of God, Truths about
                Spirit Life, the Government of God and the implications of these
                realities in natural existence in their various ramifications in
                everyday life situations.
              </p>

              <p>There are two enrollments annually:</p>

              <p>January Enrollment</p>
              <p>June Enrollment</p>
            </div>
          </div>
        </div>
      </section>

      {/* semesters */}
      <section id="semesters">
        <header className="section-header">
          <h2>Semesters</h2>
        </header>
        <div className="container semesters__details">
          <p>
            The program is divided into two semesters. The First Semester is
            focused on the understanding of fundamental Biblical Truth and the
            development of spiritual stamina for Christian living in a fallen
            world. The second semester is focused the development of
            contemporary strategies for effective ministry within various
            context.
          </p>

          <div className="semesters-card">
            <div className="semester-card">
              <div className="semester-text">
                <h3>First Semester</h3>

                <p>
                The first semester is a four (4) months intensive Ministry training program, 
                designed to establish the believer in the fundamental principles of the Christian 
                Faith. It is intended to give the believer a sound footing in the accurate 
                understanding of core Christian teachings. And a framework for understanding, 
                interpreting and applying Biblical truth.
                </p>
              </div>
            </div>
            {/* <!-- end of card --> */}
            <div className="semester-card">
              <div className="semester-text">
                <h3>Second Semester</h3>
                <p>
                The second semester is also a four (4) months intensive Ministry training program, 
and oriented towards Christian missions. The Program is designed to equip the 
believer for Apostolic Invasions and Territorial Priesthood.
                </p>
              </div>
            </div>
            {/* <!-- end of card --> */}
          </div>
          {/* <!-- end of semesters-container --> */}
        </div>
      </section>

      {/* <!-- program options --> */}
      <section id="program-options">
        <header className="section-header">
          <h1>Program Options</h1>
        </header>
        <div className="container">
          <div className="program__options--container">
            <div className="program__option">
              <h3>Campus Option</h3>
              <div className="program__option--img">
                <img src={onCampus} alt="On Campus Option" />
              </div>
              <div className="program__option--text">
                <p>
                The On-Campus option is a full residency program that offers a Diploma 
in Theology and Ministry with 2 semesters of four (4) months each.The 
academic activities has two requirements: a class attendance and a 
ministry practicum, which amounts to 60 credit hours.
                </p>

                {/* ADD PROGRAM FEES 28 OCTOBER ON CAMPUS */}
                <div>
                  <h3> Program Fees:</h3>{" "}
                  <p>
                    <strong>??$1,000??(per semester) </strong>- This covers
                    Registration, tuition, and Administrative charge. <br />{" "}
                    Payment can be made once for the entire program, or in two
                    instalments at the beginning of each semester.{" "}
                    <i>
                      Note:??The exchange rate for Students paying into the Naira
                      Account is N400 per Dollar.
                    </i>
                  </p>
                  <h3>Account Details:</h3>
                  <p>
                    <strong>
                      Remnant Christian Network Bible Seminary - Adullam
                      1024318850 (Naira) UBA.
                    </strong>
                  </p>
                  <h3>Dollar Account</h3>
                  <p>
                    Correspondent Bank: <strong>Citibank New York</strong>
                  </p>
                  <p>
                    Swift Code: <strong>CITIUS33</strong>
                  </p>
                  <p>
                    Routing or ABA No: <strong>021000089</strong>
                  </p>
                  <p>
                    For Credit To:<strong> United Bank for Africa Plc</strong>
                  </p>
                  <p>
                    Account No: <strong> 36320321</strong>
                  </p>
                  <p>
                    SWIFT CODE: <strong> UNAFNGLA</strong>
                  </p>
                  <p>
                    For Final Credit to:{" "}
                    <strong>
                      {" "}
                      Remnant Christian Network Bible Seminary Adullam.
                    </strong>
                  </p>
                  <p>
                    Beneficiary Account No: <strong> 3003413033</strong>
                  </p>
                  <p>
                    <Link to="/sponsorship" className="link">
                      Domiciliary account details
                    </Link>
                  </p>
                </div>

                {/* <!-- apply --> */}

                {/* APPLICATION NOT CURRENTLY ONGOING */}

                {/* <Link to="/register" className="apply-btn">
                  Apply Now
                </Link> */}
              </div>
            </div>
            {/* <!-- end of card --> */}
            <div className="program__option">
              <h3>Online Option</h3>
              <div className="program__option--img">
                <img src={online} alt="Online Option" />
              </div>
              <div className="program__option--text">
                <p>
                In to response to the global needs for spiritual training and equipping 
                of those who cannot make it for the residency On-Campus option. 
                This is designed to still be engaging and impactful, 
                it is divived into 2semesters of 7.5 months each, and compatible 
                for the work and family demands of everyday life. The academic requirements 
                of the Online option is the almost the same with the Campus but only spread
                across a longer duration.
                </p>
                {/* ADD PROGRAM FEES 28 OCTOBER ONLINE STUDENTS  */}
                <div>
                  <h3>Online program Fees:</h3>{" "}
                  <p>
                    <strong>$1,200??(per semester) </strong> - This covers
                    Registration, tuition, Administrative charges and Internet
                    Management Fee. <br /> Payment can be made once for the
                    entire program, or in two instalments at the beginning of
                    each semester.{" "}
                    <i>
                      Note:??The exchange rate for Students paying into the Naira
                      Account is N400 per Dollar.
                    </i>
                  </p>
                  <h3>Account Details:</h3>
                  <p>
                    <strong>
                      Remnant Christian Network Bible Seminary - Adullam
                      1024318850 (Naira) UBA.
                    </strong>
                  </p>
                  <h3>Dollar Account</h3>
                  <p>
                    Correspondent Bank: <strong>Citibank New York</strong>
                  </p>
                  <p>
                    Swift Code: <strong>CITIUS33</strong>
                  </p>
                  <p>
                    Routing or ABA No: <strong>021000089</strong>
                  </p>
                  <p>
                    For Credit To:<strong> United Bank for Africa Plc</strong>
                  </p>
                  <p>
                    Account No: <strong> 36320321</strong>
                  </p>
                  <p>
                    SWIFT CODE: <strong> UNAFNGLA</strong>
                  </p>
                  <p>
                    For Final Credit to:{" "}
                    <strong>
                      {" "}
                      Remnant Christian Network Bible Seminary Adullam.
                    </strong>
                  </p>
                  <p>
                    Beneficiary Account No: <strong> 3003413033</strong>
                  </p>
                  <p>
                    <Link to="/sponsorship" className="link">
                      Domiciliary account details
                    </Link>
                  </p>
                </div>

                {/* <!-- apply --> */}

                {/* APPLICATION NOT CURRENTLY ONGOING */}

                {/* <Link to="/register" className="apply-btn">
                  Apply Now
                </Link> */}
              </div>
            </div>
            {/* <!-- end of card --> */}
          </div>
          {/* <!-- end of semesters-container --> */}
        </div>
      </section>

      {/* PAYMENT OPTION AND PROVOST SCHOLARSHIP GRANT   */}
      <section id="semesters">
        <header className="section-header">
          <h1>Provost Scholarship Grants</h1>
        </header>
        <div className="container semesters__details">
          <p>
          Scholarship grants are made available through the generous donations of kind partners.
          </p>

          <div className="semesters-card">
            <div className="semester-card">
              <div className="semester-text">
                <h3>For On-Campus Students</h3>

                <p>
                  The Scholarship grant is <strong> 86%</strong> of the tuition
                  fee which is only available upon request for those who truly
                  believe that they cannot afford the fees. Please note that all
                  Scholarship Grants are subject to availability of funds and
                  the decision of the Scholarship Grants Board.
                </p>
              </div>
            </div>
            {/* <!-- end of card --> */}
            <div className="semester-card">
              <div className="semester-text">
                <h3>For Online Students</h3>
                <p>
                  The Scholarship grant is <strong>80%</strong> of the tuition
                  fee which is only available upon request for those who truly
                  believe that they cannot afford the fees. Please note that all
                  Scholarship Grants are subject to availability of funds and
                  the decision of the Scholarship Grants Board.
                </p>
              </div>
            </div>
            {/* <!-- end of card --> */}
          </div>
          {/* <!-- end of semesters-container --> */}
        </div>
      </section>

      {/* this is the ACCOMODATION SESSION  */}
      <section className="semesters accomodation">
        <header className="section-header">
          <h1>Accomodation</h1>
        </header>
        <div className="container semesters__details">
          <p></p>

          <div className="semesters-card">
            <div className="semester-card">
              <div className="semester-text">
                <h3>Off-Campus</h3>

                <p>
                  Some Students rent an apartment in Makurdi town, with the
                  average range of N80,000 - N150,000 for single room. It is
                  entirely up to the students to make the arrangements for
                  themselves. However, Adullam Help Desk{" "}
                  <a href="tel:+2348022164432">+234 802 216 4432</a> will be
                  glad to support where necessary.
                </p>
              </div>
            </div>
            {/* <!-- end of card --> */}
            <div className="semester-card">
              <div className="semester-text">
                <h3>On-Campus</h3>
                <p>
                  There is a shared room space within the school environment for
                  N40,000 per session (covering for the two semesters). Adullam
                  Help Desk <a href="tel:+2348022164432">+234 802 216 4432</a>{" "}
                  will be glad to support where necessary.
                </p>
              </div>
            </div>
            {/* <!-- end of card --> */}
          </div>
          {/* <!-- end of semesters-container --> */}
        </div>
      </section>

      {/* <!-- faculties --> */}
      <section id="faculties">
        <header className="section-header">
          <h1>Meet the Faculties</h1>
        </header>
        <div className="container faculty-content">
          <div className="faculty-cards">
            <div className="faculty-card">
              <img src={apostleArome} alt="Adullam Chairman" />
              <p>Chairman, Board of Governors</p>
              <h4>Apostle Arome Osayi</h4>
            </div>
            {/* <!-- end of card --> */}
            <div className="faculty-card">
              <img src={adullamProvost} alt="Adullam Provost" />
              <p>Provost</p>
              <h4>Rev'd Daniel Ogidi</h4>
            </div>
            {/* <!-- end of card --> */}
            <div className="faculty-card">
              <img src={revTony} alt="Adullam Dean Students Affairs" />
              <p>Deputy Provost</p>
              <h4>Rev'd Anthony George Audu</h4>
            </div>
            {/* <!-- end of card --> */}
            <div className="faculty-card">
              <img src={barrGodsent} alt="Adullam Faculty" />
              <p>Member of Faculty</p>
              <h4>Rev'd Godsent Ogbe</h4>
            </div>
            {/* <!-- end of card --> */}
          </div>
        </div>
      </section>
      {window.scrollTo(0, 0)}
    </main>
  );
}
