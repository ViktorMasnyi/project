import React from "react";
import { NavLink } from "react-router-dom";

const TestsList = ({ tests, targetGroup }) => { // render list of tests for a given Test Group
  return (
    
    <ul>      
      {        
        tests.map(function(test, nameId) { // nameId is a siquence no. of test inside Test Group -> tests[]
          return <li key={test.nameId}>Test name: {test.name}
            <p>duration: {test.timeLimit} min.</p>
            <NavLink  className="navbar__item" activeClassName="navbar__item-active" 
              to={`/Test/${targetGroup ? targetGroup : test.groupId}/${test.nameId}`}>Start test</NavLink>
            {/*<Route path="/Test/:id" component={Test} />*/}
            <br/>
          </li>
        })
      }      
    </ul>
  );
}

export default TestsList
