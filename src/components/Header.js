import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import logo from '../images/adullam-logo.png';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    return (
            <header className="main-header" id="main-header">

            <div className="logo-container">
                <Link to="/" onClick={() => window.scrollTo(0,0) }><img src={logo} alt="adullam-logo" className="logo" /></Link>
            </div>
            <nav className="main-nav">
                <ul className="nav-links">
                    <Link to="/"  onClick={() => window.scrollTo(0,0) } className="nav-link"><li>Home</li></Link>
                    <NavHashLink to="/#about" smooth className="nav-link"><li>About</li></NavHashLink>
                    <NavHashLink to="/#testimonies" smooth className="nav-link"><li>Testimonies</li></NavHashLink>
                    <NavHashLink to="/#main-footer" smooth className="nav-link"><li>Contact Us</li></NavHashLink>
                    <Link to="/register"  className="nav-link"><li>Register</li></Link>
                    <a href="https://adullam.ng/main/login_form.php"  className="nav-link"><li>Login</li></a> 
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;
