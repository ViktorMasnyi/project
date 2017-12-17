import React, { Component } from "react";
import { Route, Router, NavLink, Switch } from "react-router-dom";
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
import TestsCatalog from "./testsCatalog/TestsCatalog";
import initState from './initState';

const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.state = initState;
    this.state.testValue = 0;
    this.state.foundTests = [];
    this.state.foundGroups = [];
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.testCallback = this.testCallback.bind(this); 
  };

  testCallback = function () {this.setState({testValue: this.state.testValue + 1})};

  handleSearch = function(value) {
    var searchQuery = value;
    //console.log('app haldle search: ', value);
    var foundT = [];
    var foundG = [];
    this.state.test.map((testGroup, id) => { //was this.state.test      
      if (testGroup.topicName.toLowerCase().indexOf(searchQuery) !== - 1)
      foundG.push(testGroup);
      testGroup.tests.map(function(test) {
        //console.log(test.name);
        if (test.name.toLowerCase().indexOf(searchQuery) !== - 1) {         
          foundT.push(test);
          //console.log('app foundT: ', foundT);
        }        
        return true;
      });                     
      this.setState({
        foundTests: foundT,
        foundGroups: foundG
      });
      return true;
    });
    console.log('foundG: ', foundG);
    console.log('foundT: ', foundT);
  };

  handleReset = () => {
    this.setState({
      foundTests: [],
      foundGroups: []
      });
  }

  TestsCatalogWithProps = (props) => {
    return (
      <TestsCatalog
        {...props} // ????
        handleSearch={this.handleSearch}
        handleReset={this.handleReset}
        testCallback={this.testCallback}
        testValue={this.state.testValue}
        foundTests={this.state.foundTests}
        foundGroups={this.state.foundGroups}
        test={this.state.test}
      />
    );
  }
  render() {
    //alert(this.state.testValue);
    return (
      <Router history={history}>
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
      </Router>
    );
  }
}

export default App;
