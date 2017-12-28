import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserHomePage extends Component {
  constructor (props) {
    super(props); 
    this.state = {}; 
  }
  render () {
    const {userName, userTests, userId} = this.props.authUserProps;
    console.log(userName)
    return (             
      <main className="main">      
        {
          (userId > 0) ? (
          <div>          
            <h1>Welcome, {userName}! </h1>
            <br />
          </div> ) : 
          <p>Please sign in <NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Login">here</NavLink></p>
        }
      </main>
    )
  } 
}

export default  UserHomePage;
