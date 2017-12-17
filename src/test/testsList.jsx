import React from 'react';

const TestsList = ({ tests }) => {
  return (
    <ul>
      {
        tests.map(function(tests, id) {
          return <li key={id}>Test name: {tests.name}
            <p>duration: {tests.timeLimit} min.</p>
            <br/>
          </li>
        })
      }
    </ul>
  );
}
export default TestsList
