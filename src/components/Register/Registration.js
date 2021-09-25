import logo from "../../images/adullam-logo.png";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useForm, useStep } from "react-hooks-helper";

import "./Register.css";
import Condition from "./Condition";
import Agreement from "./Agreement";
import OptAccScholarship from "./OptAccScholarship";
import ChristianExperience from "./ChristianExperience";
import Health from "./Health";
import WorkContactReference from "./WorkContactReference";
import Relationship from "./Relationship";
import PersonalDetails from "./PersonalDetails";
import Financials from "./Financials";

const defaultData = {

  firstname: "",
  lastname: "",
  middlename: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  phoneno: "",
  email: "",
  nationality: "",
  profession: "",
  rel_status: "single",
  weddate: "",
  spousename: "",
  marriagedate: "",
  spouseagree: "",
  childname: "",
  friendname: "",
  friendrel: "",
  adullaminfo: "",
  havecloserel: "no",
  bornagain: "",
  salvbrief: "",
  godsworkings: "",
  callofgod: "",
  intoministry: "",
  spiritgifts: "",
  reason: "",
  churchname: "",
  churchaddress: "",
  pastorname: "",
  pastoremail: "",
  pastorphone: "",
  churchinvolve: "",
  waterbapt: "",
  baptdate: "",
  holyghostbapt: "",
  disability: "",
  nervousill: "",
  anorexia: "",
  diabetesepilepsy: "",
  requiremedic: "",
  specialdiet: "",
  learndisability: "",
  usedilldrug: "",
  treatdrugaddic: "no",
  hadsurgery: "",
  pastexpinfluence: "",
  healthissuedesc: "",
  helpfulabilities: "",
  hobbies: "",
  playinstrument: "",
  instrument: "",
  emergcontname: "",
  emergcontrel: "",
  emergphone: "",
  emergaddress: "",
  refonename: "",
  refoneemail: "",
  refonephone: "",
  reftwoname: "",
  reftwoemail: "",
  reftwophone: "",
  programoption: "",
  accomoption: "",
  scholarship: "",
  scholreason: "",
  agree: ""

};

const steps = [
  { id: "personalDetails" },
  { id: "financials" },
  { id: "relationships" },
  { id: "christianExperience" },
  { id: "health" },
  { id: "workContactReference" },
  { id: "optAccScholarship" },
  { id: "condition" },
  { id: "agreement" },
];

export const Registration = () => {

    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation }

   switch (step.id) {
       case 'personalDetails':
           return <PersonalDetails {...props} />
        case 'financials':
            return <Financials {...props} />
        case 'relationships':
            return <Relationship {...props} />
        case 'christianExperience':
            return <ChristianExperience {...props} />
        case 'health':
            return <Health {...props} />
        case 'workContactReference':
            return <WorkContactReference {...props} />
        case 'optAccScholarship':
            return <OptAccScholarship {...props} />
        case 'condition':
            return <Condition {...props} />
        case 'agreement':
            return <Agreement {...props} />
       default:
   }

  return (
    <div>
      <div className="register">
        <div className="register__header">
          <img src={logo} className="reg__logo" alt="adullam logo" />
          <h2 className="register__heading">Registration Form</h2>
          <p>
            Diploma in Theology and Ministry Application.
          </p>
        </div>
      </div>
    </div>
  );
};
