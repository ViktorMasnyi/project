import React from "react";
import { NavLink } from "react-router-dom";

const TestsList = ({ tests, targetGroup }) => { // render list of tests for a given Test Group
  return (
    
    <ul>      
      {        
        tests.map((test, nameId) => { // nameId is a siquence no. of test inside Test Group -> tests[]
          return <li key={test.nameId} className="catalog__testcontainer">
            <img className="catalog__testimage" src={test.imageUrl} />
            <div>
            <h3 className="catalog__testname">{test.name}</h3>
            <p>duration: {parseInt(test.timeLimit / 60)} min.</p>
            </div>
            <NavLink  className="navbar__item" activeClassName="navbar__item-active" 
              to={`/Test/${targetGroup ? targetGroup : test.groupId}/${test.nameId}`}>Start</NavLink>
          </li>
        })
      }      
    </ul>
  );
}

export default TestsList
