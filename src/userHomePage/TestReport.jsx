import React from 'react';

const TestReport = (props) => { 
  return (    
    <ul>  
      {        
        props.userTests.map(function(userTest, id) { 
          return <li key={`test${id}`}>Test name: {props.test[userTest.testTopicId][userTest.nameId]}
            <p>duration: {userTest.testTimeSpent} SEC.</p>
            <p>Total test attempts: {userTest.testAttempts}</p>
            <p>Status: <em>{userTest.testStatus}</em></p>
            <br/>
          </li>
        })
      }      
    </ul>
  );
}

export default TestReport
