import logo from "../../images/adullam-logo.png";
import ScrollToTop from "../ScrollToTop";
import "./Login.css";

const Login = () => {
  return (
    <div className="register">
      <ScrollToTop />
      <div className="register__header">
        <img src={logo} className="reg__logo" alt="adullam logo" />
        <form className="register__form">
        <div className="login__content">
          <div className="note reg__label" style={{ margin: "0 auto", textAlign: "center", fontWeight: "bold" }}>LOGIN</div>
          <div className="form__control" >
            <input
              type="text"
              className="form__control--input"
              placeholder="Registration Number"
              name="username"
              required
            />
          </div>
          <div className="form__control" >
            <input
              type="password"
              className="form__control--input"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <button className="formNavigator forward" style={{ marginTop: "2rem"}}>Login <i className="fa fa-sign-in"></i></button> 
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
