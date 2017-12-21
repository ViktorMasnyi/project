import React from 'react';
import { NavLink } from "react-router-dom";

const TestsList = ({ tests }) => {
  return (
    <ul>      
      {        
        tests.map(function(test) {
          return <li key={test.nameId}>Test name: {test.name}
            <p>duration: {test.timeLimit} min.</p>
            <NavLink  className="navbar__item" activeClassName="navbar__item-active" to={`/Test/${test.nameId}`}>Start test</NavLink>
            {/*<Route path="/Test/:id" component={Test} />*/}
            <br/>
          </li>
        })
      }      
    </ul>
  );
}
export default TestsList
