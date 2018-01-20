import React from 'react';

const TestReport = (props) => { 
  return (    
    <ul className="homepage__testreportcont">  
      {        
        props.userTests.map((userTest, id) => { 
          return <li className="homepage__testreport" key={`test${id}`}>
            <p className="homepage__testname">{userTest.name}</p>
            <p>Time spent: {userTest.testTimeSpent} SEC.</p>
            <p>Total test attempts: {userTest.testAttempts}</p>
            <p>Status: <em>{userTest.testStatus}</em></p>
          </li>
        })
      }      
    </ul>
  );
}

export default TestReport
