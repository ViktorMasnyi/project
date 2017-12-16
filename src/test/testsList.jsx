import React from 'react';

const testsList = ({ tests }) => {
  return (
    <div>
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
    </div>
  );
}
export default testsList
