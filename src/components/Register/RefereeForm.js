import React from "react";
import { useForm } from "react-hooks-helper";
import logo from "../../images/adullam-logo.png";
import "./Register.css";

const refereeData = {
    first_name: "",
    last_name: "",
    middle_name: "",
    phone_number: "",
    email: "",
    position: "",
    length_of_rel: "",
    ref_knowledge: "",
    data: {
        bibleStudy: "",
        churchAttendance: "",
        churchService: "",
        witnessing: "",
        challengingOthers: "",
        vice: "",
        specificAbility: "",
        honestyIntegrity: "",
        recommend: "",
        comment: "",
        occultInvolvement: "",
        convictedForCrime: "",
        selfControl: "",
        committedBeliever: "",
        teachable: "",
        homeBackground: "",
        personality: "",
        relationships: "",
        emotionalStability: "",
        leadership: "",
        dependability: "",
        furtherComment: ""
    }
}

export const RefereeForm = () => {
    
    const [formData, setForm] = useForm(refereeData);

    const { first_name, 
            last_name, 
            middle_name, 
            phone_number, 
            email, 
            position, 
            length_of_rel, 
            ref_knowledge, 
            bibleStudy,
            churchAttendance,
            churchService,
            witnessing,
            challengingOthers,
            vice,
            specificAbility,
            honestyIntegrity,
            recommend,
            comment,
            occultInvolvement,
            convictedForCrime,
            selfControl,
            committedBeliever,
            teachable,
            homeBackground,
            personality,
            relationships,
            emotionalStability,
            leadership,
            dependability,
            furtherComment 
        
        } = formData;

        const handleSubmit = (e) => {

            e.preventDefault();
            
            fetch('', {
                method: "POST",
                headers: { "Content-Type":"application/json" },
                body: JSON.stringify(formData)
            }).then(res => {
                // redirect 
                if(res.ok){
                    // define route
                }
            }).catch(err => {
                console.log(err.message);
            })
        }
            

  return (
    <div>
      <div className="register">
        <div className="register__header">
          <img src={logo} className="reg__logo" alt="adullam logo" />
          <h2 className="register__heading">Reference Form</h2>

          <div className="note reg__label">Applicant's Details</div>
          <p><strong>Applicant's Name: </strong>Noah Joe &nbsp;&nbsp; <strong>Address: </strong>Applicant's Contact Address</p>
          <p><strong>City: </strong>Accra &nbsp;&nbsp; <strong>State/Province: </strong>North Region &nbsp;&nbsp; <strong>Country: </strong> Ghana</p>

          <div className="note reg__label">Referee's Details</div>
          <p>The applicant named above has indicated your willingness to be a reference for their Bible School application. We would appreciate you answering the following questions</p>
        </div>

        <form className="register__form" onSubmit={ handleSubmit }>
        <div className="register__content">
          <div className="form__control">
            <label>First Name<span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="First Name"
              name="first_name"
              value={ first_name }
              onChange={ setForm }
              required
            />
          </div>
          
          <div className="form__control">
            <label>Last Name<span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Last Name"
              name="last_name"
              value={ last_name }
              onChange={ setForm }
              required
            />
          </div>
          <div className="form__control">
            <label>Middle Name</label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Middle Name"
              name="middle_name"
              value={ middle_name }
              onChange={ setForm }
              required
            />
          </div>
          
          <div className="form__control">
            <label>Phone No.<span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Phone No. (WhatsApp)"
              name="phone_number"
              value={ phone_number }
              onChange={ setForm }
              required
            />
          </div>
          <div className="form__control">
            <label>Email<span className="required">*</span></label>
            <input
              type="email"
              className="form__control--input"
              placeholder="Email"
              name="email"
              value={ email }
              onChange={ setForm }
              required
            />
          </div>
          <div className="form__control">
            <label>Position:<span className="required">*</span></label>
            <input
              type="text"
              className="form__control--input"
              placeholder="Current Position"
              name="position"
              value={ position }
              onChange={ setForm }
              required
            />
          </div>
          <div className="form__control">
            <label>Length of relationship with applicant is:</label>
            <select
              className="form__control--input"
              name="length_of_rel"
              value={ length_of_rel }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="less than 1 year">Less than 1 year</option>
              <option value="1 – 2 years">1 – 2 years</option>
              <option value="3 – 5 years">3 – 5 years</option>
              <option value="above 5 years">Above 5 years</option>
            </select>
          </div>
          
          <div className="form__control">
            <label>How well do you know the applicant?</label>
            <select
              className="form__control--input"
              name="ref_knowledge"
              value={ ref_knowledge }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="by name or sight">By Name/Sight</option>
              <option value="casually">Casually</option>
              <option value="fairly well">Fairly Well</option>
              <option value="very close">Very Close</option>
            </select>
          </div>

          <span className="note"><strong>Note:</strong> Please indicate the level of consistency in each of the following areas of the applicant’s life:</span>

          <div className="form__control">
            <label>Bible Study</label>
            <select
              className="form__control--input"
              name="bibleStudy"
              value={ bibleStudy }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="consistent">Consistent</option>
              <option value="frequent">Frequent</option>
              <option value="occasion">Occasional</option>
              <option value="seldom">Seldom</option>
            </select>
          </div>

          <div className="form__control">
            <label>Church Attendance</label>
            <select
              className="form__control--input"
              name="churchAttendance"
              value={ churchAttendance }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="consistent">Consistent</option>
              <option value="frequent">Frequent</option>
              <option value="occasion">Occasional</option>
              <option value="seldom">Seldom</option>
            </select>
          </div>

          <div className="form__control">
            <label>Church Service &amp; Ministry</label>
            <select
              className="form__control--input"
              name="churchService"
              value={ churchService }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="consistent">Consistent</option>
              <option value="frequent">Frequent</option>
              <option value="occasion">Occasional</option>
              <option value="seldom">Seldom</option>
            </select>
          </div>
          
          <div className="form__control">
            <label>Witnessing</label>
            <select
              className="form__control--input"
              name="witnessing"
              value={ witnessing }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="consistent">Consistent</option>
              <option value="frequent">Frequent</option>
              <option value="occasion">Occasional</option>
              <option value="seldom">Seldom</option>
            </select>
          </div>

          <div className="form__control">
            <label>Challenging others spiritually</label>
            <select
              className="form__control--input"
              name="challengingOthers"
              value={ challengingOthers }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="consistent">Consistent</option>
              <option value="frequent">Frequent</option>
              <option value="occasion">Occasional</option>
              <option value="seldom">Seldom</option>
            </select>
          </div>
          
          <div className="form__control">
            <label>Does the applicant use or indulge in the following:</label>
            <select
              className="form__control--input"
              name="vice"
              value={ vice }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="tobacco">Tobacco</option>
              <option value="alcohol">Alcohol</option>
              <option value="illicit drugs">Illicit Drugs</option>
              <option value="immoral sexual activity">Immoral Sexual Activity</option>
              <option value="none">None to my Knowledge</option>
            </select>
          </div>
          
          <div className="form__control">
            <label>I believe the applicant shows particular ability in:</label>
            <input
              type="text"
              className="form__control--input"
              name="specificAbility"
              value={ specificAbility }
              onChange={ setForm }
              required
            />
          </div>
          
          <div className="form__control">
            <label>I have no reservations concerning the applicant’s honesty &amp; integrity:</label>
            <select
              className="form__control--input"
              name="honestyIntegrity"
              value={ honestyIntegrity }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="strongly agree">Strongly Agree</option>
              <option value="agree">Agree</option>
              <option value="disagree">Disagree</option>
            </select>
          </div>

          <div className="form__control">
            <label>I recommend the applicant for study at a RCN Bible Seminary:</label>
            <select
              className="form__control--input"
              name="recommend"
              value={ recommend }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="unreservedly">Unreseverdly</option>
              <option value="with reservation">With Reservation</option>
              <option value="do not recommend">Do not Recommend</option>
            </select>
          </div>
          
          <div className="form__control">
            <label>
            If you do not recommend, please comment:
            </label>
            <textarea
              className="form__control--input"
              name="comment"
              value={ comment }
              onChange={ setForm }
            ></textarea>
          </div>
          
          <div className="form__control">
            <label>To your knowledge, has the applicant ever been involved in the occult:</label>
            <select
              className="form__control--input"
              name="occultInvolvement"
              value={ occultInvolvement }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="form__control">
            <label>To your knowledge, has the applicant ever been convicted of a crime requiring jail term, parole or probation:</label>
            <select
              className="form__control--input"
              name="convictedForCrime"
              value={ convictedForCrime }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <span className="note"><strong>Rating:</strong> In order to give us a better profile of the applicant as a person, please rate the applicant in each of the following by circling the number which best represents where the applicant fits on the scale:</span>

          <div className="form__control">
            <label>Self control</label>
            <select
              className="form__control--input"
              name="selfControl"
              value={ selfControl }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Committed Believer</label>
            <select
              className="form__control--input"
              name="committedBeliever"
              value={ committedBeliever }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Teachable</label>
            <select
              className="form__control--input"
              name="teachable"
              value={ teachable }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Home Background</label>
            <select
              className="form__control--input"
              name="homeBackground"
              value={ homeBackground }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Personality</label>
            <select
              className="form__control--input"
              name="personality"
              value={ personality }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Relationships</label>
            <select
              className="form__control--input"
              name="relationships"
              value={ relationships }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Emotional Stability</label>
            <select
              className="form__control--input"
              name="emotionalStability"
              value={ emotionalStability }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Leadership</label>
            <select
              className="form__control--input"
              name="leadership"
              value={ leadership }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form__control">
            <label>Dependability</label>
            <select
              className="form__control--input"
              name="dependability"
              value={ dependability }
              onChange={ setForm }
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          
          <div className="form__control">
            <label>
            Please add any further comments you feel would be helpful regarding the applicant:
            </label>
            <textarea
              className="form__control--input"
              name="furtherComment"
              value={ furtherComment }
              onChange={ setForm }
            ></textarea>
          </div>
          {console.log(JSON.stringify(formData))}
          <div className="next__prev--box">
            <button className="formNavigator forward">Submit</button> 
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};
