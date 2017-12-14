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

const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      tests: [
        {
          'topicName': 'Java',
          'tests': [
            { 
              name: 'Java Basics',
              timeLimit: 30, 
              questions: [ 
                {
                  type: 'single', 
                  question: 'what is Java?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['first  var'  ]
                },  
                {
                  type: 'multy', 
                  question: 'who is Jesus?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['first  var', 'third var']
                }
              ]
            },
            { 
              name: 'Java Advanced',
              timeLimit: 20, 
              questions: [ 
                {
                  type: 'single', 
                  question: 'what is Java?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['third var']  
                },  
                {
                  type: 'multy', 
                  question: 'who is Jesus?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['first  var', 'third var']
                }
              ]
            }
          ]
        },
        {
          'topicName': 'Javascript',
          'tests': [
            { 
              name: 'Javascript Basics',
              timeLimit: 30, 
              questions: [ 
                {
                  type: 'single', 
                  question: 'what is Javascript?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['first  var'  ]
                },  
                {
                  type: 'multy', 
                  question: 'who is Jesus?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['first  var', 'third var']
                }
              ]
            },
            { 
              name: 'Javascript Advanced',
              timeLimit: 20, 
              questions: [ 
                {
                  type: 'single', 
                  question: 'what is Javascript?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['third var']  
                },  
                {
                  type: 'multy', 
                  question: 'who is Jesus?',
                  ansVariant1: 'first  var',
                  ansVariant2: 'second var', 
                  ansVariant3: 'third var',
                  answer: ['first  var', 'third var']
                }
              ]
            }
          ]
        }
      ]
    }  
  };
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
                    <a href="#">по популярности</a>
                    <a href="#">по алфавиту</a>
                    <a href="#">по темам</a>
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
            <Route path="/Tests" component={TestsCatalog} />
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
