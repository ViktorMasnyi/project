import React from 'react';

const TestReport = (props) => { 
  return (    
    <ul>  
      {        
        props.userTests.map((userTest, id) => { 
          return <li key={`test${id}`}>Test name: {userTest.name}
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
