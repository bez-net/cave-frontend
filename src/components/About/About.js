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
      <div class="about__header">
        <header class="section-header">
          <h1>ABOUT ADULLAM</h1>
        </header>
      </div>

      {/* more info section */}
      <section id="more-info">
        <div class="more__info container">
          <div class="more__info--content">
            <div class="info__img--container">
              <img src={provost} alt="adullam provost" />
            </div>
            <div class="more__info--text">
              <p>
                The school is called RCN Bible SEMINARY or ADULLAM. Adullam
                means Justice of the people. It was mentioned eight (8) times in
                scriptures. The Cave of Adullam stood on the old Roman road in
                the valley of Elah, not far from Gath, which was the scene of
                David's memorable victory over Goliath (1Samuel 17:2). The Cave
                of Adullam became a place of resort for David. It was the
                location where all that were stranded, discourage and had given
                up on life resorted to David to find meaning (1Sam. 22:1-2).
              </p>

              <p>
                Adullam became a forge where charlatans are turned into
                champions, the PLACE, both for the apprentice and the veteran,
                and a retreat center for refreshing and retooling
                (2Sam.23:13-17). It was called "the glory of Israel" (Micah
                1:15).
              </p>

              <p>There are two sessions annually:</p>
              <ul>
                <li>February Session</li>
                <li>July Session</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* semesters */}
      <section id="semesters">
        <header class="section-header">
          <h2>Semesters</h2>
        </header>
        <div class="container semesters__details">
          <p>
            The program duration has 2 semesters of four (4) months each. Each
            of the semesters are schedule during the February or July sessions
            depending on the time of enrolment.
          </p>

          <div class="semesters-card">
            <div class="semester-card">
              <div class="semester-text">
                <h3>First Semester</h3>

                <p>
                  The first semester is a four (4) months intensive Ministry
                  training program, designed to establish the believer in the
                  fundamental principles of the Christian Faith. It is intended
                  to give the believer a sound footing in the accurate
                  understanding of core Christian teachings. And a framework for
                  understanding, interpreting and applying Biblical truth.
                </p>

              </div>
            </div>
            {/* <!-- end of card --> */}
            <div class="semester-card">
              <div class="semester-text">
                <h3>Second Semester</h3>
                <p>
                  The second semester is also a four (4) months intensive
                  Ministry training program, and oriented towards Christian
                  missions. The Program is designed to equip the believer for
                  Apostolic Invasions and Territorial Priesthood.
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
        <header class="section-header">
          <h1>Program Options</h1>
        </header>
        <div class="container">
          <div class="program__options--container">
            <div class="program__option">
              <h3>On-Campus</h3>
              <div class="program__option--img">
                <img src={onCampus} alt="On Campus Option" />
              </div>
              <div class="program__option--text">
                <p>
                  The On-Campus option is a full residency program that offers a{" "}
                  <strong>Diploma</strong> in Theology and Ministry. The
                  academic activities has two requirements: a class attendance
                  and a ministry practicum, which amounts to 60 credit hours.
                </p>

                {/* <!-- apply --> */}
                <Link to="/register" class="apply-btn">
                  Apply Now
                </Link>
              </div>
            </div>
            {/* <!-- end of card --> */}
            <div class="program__option">
              <h3>Online Option</h3>
              <div class="program__option--img">
                <img src={online} alt="Online Option" />
              </div>
              <div class="program__option--text">
                <p>
                  In to response to the global needs for spiritual training and
                  equipping of those who cannot make it for the residency
                  On-Campus option. This is designed to still be engaging and
                  impactful, it is lighter in intensity than the On-Campus
                  option, and compatible for the work and family demands of
                  everyday life. The academic requirements of the Online option
                  being significantly less than the On-Campus option, offers a{" "}
                  <strong>Certificate of Participation</strong> in Theology and
                  Ministry.
                </p>

                {/* <!-- apply --> */}
                <Link to="/register" class="apply-btn">
                  Apply Now
                </Link>
              </div>
            </div>
            {/* <!-- end of card --> */}
          </div>
          {/* <!-- end of semesters-container --> */}
        </div>
      </section>

      {/* <!-- faculties --> */}
      <section id="faculties">
        <header class="section-header">
          <h1>Meet the Faculties</h1>
        </header>
        <div class="container faculty-content">
          <div class="faculty-cards">
            <div class="faculty-card">
              <img src={ apostleArome } alt="Adullam Chairman" />
              <h4>Apostle Arome Osayi</h4>
              <p>Chairman</p>
            </div>
            {/* <!-- end of card --> */}
            <div class="faculty-card">
              <img src={ adullamProvost } alt="Adullam Provost" />
              <h4>Rev. Daniel Ogidi</h4>
              <p>Provost</p>
            </div>
            {/* <!-- end of card --> */}
            <div class="faculty-card">
              <img src={ revTony } alt="Adullam Dean Students Affairs" />
              <h4>Rev. Anthony George</h4>
              <p>Dean Students</p>
            </div>
            {/* <!-- end of card --> */}
            <div class="faculty-card">
              <img src={ barrGodsent } alt="Adullam Faculty" />
              <h4>Rev. Godsent Ogbe</h4>
              <p>Faculty</p>
            </div>
            {/* <!-- end of card --> */}
          </div>
        </div>
      </section>
      { window.scrollTo(0,0) }
     </main>
  );
}
