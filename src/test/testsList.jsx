import React from 'react';

const testsList = ({ tests }) => {
  return (
    <div>
      <ul>
        {
          tests.map(function(testTheme) {
            return <li>Test theme: {testTheme.topicName}</li>
          })
        }
      </ul>
    </div>
  );
}
export default testsList
