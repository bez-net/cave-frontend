import logo from "../../images/adullam-logo.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Register.css"
import Condition from "./Condition";
import Agreement from "./Agreement";
import OptAccScholarship from "./OptAccScholarship";
import ChristianExperience from "./ChristianExperience";
import Health from "./Health";
import WorkContactReference from "./WorkContactReference";
import Relationship from "./Relationship";
import PersonalDetails from "./PersonalDetails";
import Financials from "./Financials";

const Register = () => {
  return (
    <Router>
      <div className="register">
        <div className="register__header">
          <img src={logo} className="reg__logo" alt="adullam logo" />
          <h2 className="register__heading">Registration Form</h2>
          <p>
            Diploma in Theology and Ministry Application. Already Registered?
            {"  "}
            <Link to="">
              Proceed to Login<span>&rarr;</span>
            </Link>
          </p>
        </div>
        <Switch>
          <form className="register__form">
            <Route exact path="/register">
              <PersonalDetails />
            </Route>
            <Route path="/register/financial">
              <Financials />
            </Route>
            <Route path="/register/relationship">
              <Relationship />
            </Route>
            <Route path="/register/christianexperience">
              <ChristianExperience />
            </Route>
            <Route path="/register/health">
              <Health />
            </Route>
            <Route path="/register/workcontactreference">
              <WorkContactReference />
            </Route>
            <Route path="/register/optaccscholarship">
              <OptAccScholarship />
            </Route>
            <Route path="/register/condition">
              <Condition />
            </Route>
            <Route path="/register/agreement">
              <Agreement />
            </Route>

          </form>
        </Switch>
      </div>
    </Router>
  );
};

export default Register;
