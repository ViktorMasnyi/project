import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./App.css";
import "./Normalize.css";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Main from "./main/Main";
import Test from "./test/Test";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import Gallery from "./gallery/Gallery";
import NoMatch from "./nomatch/NoMatch";
import Login from "./login/Login";
import UserHomePage from "./userHomePage/UserHomePage";
import TestsCatalog from "./testsCatalog/TestsCatalog";
import initState from "./initState";

const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.state = initState;
    this.state.authUserId = 0; //set to 0 on production
    this.state.authUserIndex = null;
    this.state.authUserProps = {};
    this.state.foundTests = [];
    this.state.foundGroups = [];
    this.state.isSearchActive = false;       
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.updateUserStats = this.updateUserStats.bind(this);
  };

  handleSearch = (searchStr, isSearchActive) => {
    var searchQuery = searchStr.toLowerCase();
    var foundT = [];
    var foundG = [];
    this.state.test.forEach((testGroup, id) => {   
      if (testGroup.topicName.toLowerCase().indexOf(searchQuery) !== - 1)
        foundG.push(testGroup);
        testGroup.tests.forEach(function(test) {        
          if (test.name.toLowerCase().indexOf(searchQuery) !== - 1) {
            test.groupId = testGroup.topicId;
            foundT.push(test);            
          }        
        return true;
      });                     
      this.setState({
        foundTests: foundT,
        foundGroups: foundG,
        isSearchActive: true
      });
      return true;
    });
  };

  handleReset = () => {
    this.setState({
      foundTests: [],
      foundGroups: [],
      isSearchActive: false
      });
  };

  handleLogin = (e) => {
    const [inputLogin, inputPassword] = [e.target.login.value, e.target.password.value];
    const [authUser] = this.state.users.filter((user, userIndex) => {
      if (user.userLogin === inputLogin && user.userPass === inputPassword) {
        this.setState({authUserIndex: userIndex})
        return true
      }
      return false
      
    })
    authUser ? this.setState({authUserId: authUser.userId}) : this.setState({authUserId: 0});
    this.setState({authUserProps: authUser})
  };

  handleLogout = () => {
    this.setState({authUserId: 0});
  };

  updateUserStats = (testStatus, testId, testName) => {
    let authUserTests = this.state.authUserProps.userTests;
    let testUpdate = {};
    for (let i = 0; i < authUserTests.length; i++) {
      if (testId === authUserTests[i].nameId) {
        testUpdate.nameId = testId;
        testUpdate.name = testName;
        testUpdate.testAttempts = authUserTests[i].testAttempts + 1;
        testUpdate.testStatus = testStatus;
        testUpdate.testDate = new Date().toLocaleString();
        authUserTests[i] = testUpdate;
        this.forceUpdate();
        return true;
      }       
    }
    authUserTests.push({
      nameId: testId,
      name: testName,
      testAttempts: 1,
      testDate: new Date().toLocaleString(),
      testStatus: testStatus
    });
    this.forceUpdate();
    return true;      
  };

  TestsCatalogWithProps = (props) => {
    return (
      <TestsCatalog {...props}
        handleSearch={this.handleSearch}
        handleReset={this.handleReset}
        foundTests={this.state.foundTests}
        foundGroups={this.state.foundGroups}
        isSearchActive={this.state.isSearchActive}
        test={this.state.test}
      />
    );
  };

  TestWithProps = (props) => {
      return <Test {...props} 
        test={this.state.test}
        authUserId={this.state.authUserId}
        updateUserStats={this.updateUserStats}
      />      
    }
    
  LoginWithProps = (props) => {
    return <Login {...props} 
      handleLogin={this.handleLogin} 
      authUserId={this.state.authUserId} 
    />
  };

  UserHomePageWithProps = (props) => {
    return <UserHomePage {...props} authUserProps={ this.state.authUserProps } test={this.state.test}/>
  };
  
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header props={this.props} handleSearch={this.handleSearch} handleReset={this.handleReset} />          
          <Menu authUserId={this.state.authUserId}/>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Tests/:sortBy?" render={this.TestsCatalogWithProps} />
            <Route path="/Test/:targetGroup/:nameId" render={this.TestWithProps} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Login" render={this.LoginWithProps} />
            <Route path="/UserHomePage" render={this.UserHomePageWithProps} />
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
