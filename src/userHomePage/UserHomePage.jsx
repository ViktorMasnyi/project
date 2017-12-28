import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TestReport from "./TestReport";

class UserHomePage extends Component {
  constructor (props) {
    super(props); 
    this.state = {}; 
  }
  render () {
    const {userName, userTests, userId} = this.props.authUserProps;
    return (             
      <main className="main">      
        {
          (userId > 0) ? 
            <div>          
              <h1>Welcome, {userName}! </h1>
              <br />
              <h2>Your tests history</h2>
              <TestReport userTests={userTests} test={this.props.test} />
            </div> : 
            <p>Please sign in <NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Login">here</NavLink></p>
        }
      </main>
    )
  } 
}

export default  UserHomePage;
