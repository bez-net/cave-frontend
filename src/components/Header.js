import { Link } from 'react-router-dom';
import logo from '../images/adullam-logo.png';

const Header = () => {
    return ( 
            <header className="main-header" id="main-header">

            <div className="logo-container">
                <Link to="/"><img src={logo} alt="adullam-logo" className="logo" /></Link>
            </div>
            <nav className="main-nav">
                <ul className="nav-links">
                    <Link to="/"  className="nav-link"><li>Home</li></Link>
                    <a href="#about"  className="nav-link"><li>About</li></a>
                    <a href="#testimonies"  className="nav-link"><li>Testimonies</li></a>
                    <a href="#main-footer"  className="nav-link"><li>Contact Us</li></a>
                    <Link to="/register"  className="nav-link"><li>Register</li></Link>
                    <Link to="/login"  className="nav-link"><li>Login</li></Link>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;