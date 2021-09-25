
import './App.css';
import './font-awesome/css/font-awesome.min.css';
import './index.css';

import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
// import Register from './components/Register/Register';
// import Login from './components/Register/Login';
import { Registration } from './components/Register/Registration';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (

    <Router>
      <ScrollToTop />
    <div className="App">

      <Header />
      <MobileMenu />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/register">
            <Registration />
          </Route>
            
          {/* <Route path="/login">
            <Login />
          </Route> */}

        </Switch>
      </main>

      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
