import React, { Component } from "react";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./App.css";
import "./Normalize.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import NoMatch from "./nomatch/NoMatch";
import Login from "./login/Login";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>            
        <div className="App">
          <Header />          
          <nav className="menucontainer">
            <ul className="navbar">
              <li><NavLink  className="navbar__item" activeClasssName="navbar__item-active" to="/">Home</NavLink></li>
              <li><NavLink  className="navbar__item" activeClasssName="navbar__item-active" to="/Contacts">Contacts</NavLink></li>
              <li><NavLink  className="navbar__item" activeClasssName="navbar__item-active" to="/Gallery">Graduates Gallery</NavLink></li>
              <li><NavLink  className="navbar__item" activeClasssName="navbar__item-active" to="/Contacts">Contacts</NavLink></li>
              <li><NavLink  className="navbar__item" activeClasssName="navbar__item-active" to="/Login">Login</NavLink></li>              
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Login" component={Login} />
            <Route component={NoMatch} />
          </Switch>    
          <Footer />
          </div>        
      </BrowserRouter>
    );
  }
}

export default App;
