import logo from '../images/adullam-logo.png';

const MobileMenu = () => {

    const mobileMenuClick = () => {
        console.log('clicked');
    }

    const overlayClick = () => {
        console.log('clicked');
    }

    return (
        
      <div>
          
        <div className="overlay" onClick={ overlayClick }></div>

        <button className="mobile-menu" onClick={ mobileMenuClick } >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
        </button>

        
        <nav className="mobile-nav">
            <div className="footer-logo">
                <a href="index.html"><img src={logo} alt="adullam-logo" className="logo" /></a>
            </div>
            <ul className="mobile-links">
                <a href="index.html"  className="nav-link"><li>Home</li></a>
                <a href="#about"  className="nav-link"><li>About</li></a>
                <a href="#testimonies"  className="nav-link"><li>Testimonies</li></a>
                <a href="#main-footer"  className="nav-link"><li>Contact Us</li></a>
                <a href="index.html"  className="nav-link"><li>Register/Login</li></a>
            </ul>
        </nav>

      </div>
    );
}
 
export default MobileMenu;