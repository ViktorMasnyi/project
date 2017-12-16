import React, { Component } from "react";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./App.css";
import "./Normalize.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import Gallery from "./gallery/Gallery";
import NoMatch from "./nomatch/NoMatch";
import Login from "./login/Login";
import TestsCatalog from "./testscatalog/TestsCatalog";
import initState from './initState';

const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.state = initState;
    this.state.testValue = false;
    this.testCallback = this.testCallback.bind(this); 
  };
  testCallback = function () {this.setState({testValue: true})};
  
  TestsCatalogWithProps = (props) => {
    return (
      <TestsCatalog
        {...props} // ????
        testCallback={this.testCallback}
        test={this.state.test}
      />
    );
  }
  render() {
    return (
      <BrowserRouter history={history}>            
        <div className="App">
          <Header />          
          <nav className="menucontainer">
            <ul className="navbar">
              <li><NavLink  className="navbar__item" activeClassName="navbar__item-active" to="/">Главная</NavLink></li>
              <div className="dropdown">
                <li><NavLink  className="navbar__item dropbtn" activeClassName="navbar__item-active" to="/Tests">Каталог тестов</NavLink>
                  <div className="dropdown-content">
                    <a href="/Tests">по популярности</a>
                    <a href="/Tests">по алфавиту</a>
                    <a href="/Tests">по темам</a>
                  </div>
                </li>
              </div>
              <li><NavLink  className="navbar__item" activeClassName="navbar__item-active" to="/Gallery">Graduates Gallery</NavLink></li>
              <li><NavLink  className="navbar__item" activeClassName="navbar__item-active" to="/Contacts">Контакты</NavLink></li>
              <li><NavLink  className="navbar__item" activeClassName="navbar__item-active" to="/Login">Войти</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Tests" render={this.TestsCatalogWithProps} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Login" component={Login} />
            <Route path="/Gallery" component={Gallery} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
          </div>        
      </BrowserRouter>
    );
  }
}

export default App;
