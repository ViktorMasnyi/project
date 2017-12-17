import React from 'react';
import TestsList from "../test/TestsList";

const TestsAll = ({test}) => {
  console.log('testAll', test);
  return (
    <ul>
      {
        test.map(function(testGroup, id) { //was this.state.test
          return (
            <div key={id}><li>Test theme: {testGroup.topicName}</li>
              <TestsList tests={testGroup.tests} />
              <br/>
            </div>
          )
        })
      }
    </ul>
  );
}
export default TestsAll
