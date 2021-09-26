import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../images/adullam-logo.png";

const Footer = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    // <!-- FOOTER -->
    <footer id="main-footer">
      <div className="container footer-container">
        <div className="footer-items">
          <div>
            <form className="contact-form" onSubmit={ handleSubmit }>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="form-control"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="E - Mail"
                className="form-control"
              />

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="form-control"
              />

              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="form-control"
              ></textarea>

              <input
                type="submit"
                value="Send"
                className="form-control submit-btn"
              />
            </form>
          </div>
          {/* <!-- sitemap --> */}
          <div className="sitemap">
            <h4>Site Map</h4>
            <ul>
              <NavHashLink
                to="/"
                smooth
                onClick={() => window.scrollTo(0, 0)}
                className="nav-link"
              >
                <li>Home</li>
              </NavHashLink>
              <NavHashLink to="/#about" smooth className="nav-link">
                <li>About</li>
              </NavHashLink>
              <NavHashLink to="/#testimonies" smooth className="nav-link">
                <li>Testimonies</li>
              </NavHashLink>
              <NavHashLink to="/#main-footer" smooth className="nav-link">
                <li>Contact Us</li>
              </NavHashLink>
              <Link to="/register" className="nav-link">
                <li>Register</li>
              </Link>
              {/* <Link to="/login" className="nav-link">
                <li>Login</li>
              </Link> */}
            </ul>
          </div>
        </div>

        <div className="footer-items">
          {/* <!-- special courses --> */}
          <div className="special">
            <h4>Special Courses</h4>
            <ul>
              <li>
                <a href="https://www.youtube.com/channel/UCg7kJOsWDdksyuUv5HiIvFg">
                  Christian Apologetics
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCg7kJOsWDdksyuUv5HiIvFg">
                  Kairos
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCg7kJOsWDdksyuUv5HiIvFg">
                  Student Work/YMC
                </a>
              </li>
            </ul>

            {/* <!-- ADULLAM LOGO --> */}
            <div className="logo-container">
              <Link to="/">
                <img
                  src={logo}
                  alt="adullam-logo"
                  className="logo footer-logo"
                />
              </Link>
            </div>
          </div>
          {/* <!-- Contact us --> */}
          <div className="contact-us">
            <div className="contact-item">
              <p>
                <i className="fa fa-phone"></i>{" "}
                <a href="tel:+2349014526570">+234 901 452 6570</a>
              </p>
              <p>
                <i className="fa fa-envelope"></i>{" "}
                <a href="mailto: adullam.rcn@gmail.com">
                  adullam.rcn@gmail.com
                </a>
              </p>
              <p>
                <i className="fa fa-globe"></i>{" "}
                <Link to="/">www.adullam.ng</Link>
              </p>
              <p>
                <i className="fa fa-home"></i> #4 Remnant Avenue,
                <br />
                opposite State Library,
                <br /> Makurdi, Benue State.
              </p>
            </div>

            {/* <!-- social media icons--> */}
            <h4 className="social-heading">Social Media</h4>
            <span>
              <a
                href="https://web.facebook.com/adullam.rcn"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa fa-facebook social-icon"></i>
              </a>
            </span>
            <span>
              <a
                href="https://web.facebook.com/adullam.rcn"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa fa-instagram social-icon"></i>
              </a>
            </span>
            <span>
              <a
                href="https://web.facebook.com/adullam.rcn"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa fa-twitter social-icon"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.youtube.com/channel/UCg7kJOsWDdksyuUv5HiIvFg"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa fa-youtube social-icon"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright-text">
        &copy; 2021 Adullam - RCN Bible Seminary | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
