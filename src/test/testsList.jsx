import React from 'react';

const testsList = ({ tests }) => {
  return (
    <div>
      <ul>
        {
          tests.map(function(testGroup) {
            return <li>Test theme: {testGroup.topicName}</li>
          })
        }
      </ul>
    </div>
  );
}
export default testsList
