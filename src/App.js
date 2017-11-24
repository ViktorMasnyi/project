import React, { Component } from "react";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import logo from "./logo.svg";
import "./App.css";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import NoMatch from "./nomatch/NoMatch";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>            
        <div className="App">
          <header className="App__header">
            <img src={logo} className="App__logo" alt="logo" />
            <h1 className="App__title">Welcome to knowledge testing portal!</h1>
            <ul className="App__menu">
              <li><NavLink  className="App__menuitem" activeClasssName="App__menuitem-active" to="/">Home</NavLink></li>
              <li><NavLink  className="App__menuitem" activeClasssName="App__menuitem-active" to="/Contacts">Contacts</NavLink></li>              
            </ul>             
          </header>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Contacts" component={Contacts} />
            <Route component={NoMatch} />
          </Switch>                  
          <Footer />
          </div>        
      </BrowserRouter>
    );
  }
}

export default App;
