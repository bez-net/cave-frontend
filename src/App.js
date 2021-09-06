
import './App.css';
import './font-awesome/css/font-awesome.min.css';
import './index.css';

import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register/Register';
import Login from './components/Register/Login';


function App() {

  
  return (

    <Router>
    <div className="App">

      <Header />
      <MobileMenu />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </main>

      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
