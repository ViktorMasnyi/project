import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TestReport from "./TestReport";
import PropTypes from 'prop-types';

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
          (userId > 0)
          ? <div className="homepage">          
              <h1 className="homepage__greeting">Welcome, {userName}! </h1>
              <h2 className="homepage__heading">Your tests history:</h2>
              <TestReport className="homepage__testreportcont" userTests={userTests} test={this.props.test} />
            </div> 
          : <p>Please sign in <NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Login">here</NavLink></p>
        }
      </main>
    )
  } 
}

UserHomePage.propTypes = {
  authUserProps: PropTypes.object.isRequired,
  test: PropTypes.array.isRequired,
};

export default  UserHomePage;
