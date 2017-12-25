import React from 'react';
import TestsList from "../test/TestsList";

const TestsAll = ({test}) => { // render Test Groups -> Test List (Test Topics)
  //console.log('testAll', test);
  return (
    <ul>
      {
        test.map(function(testGroup, id) { //was this.state.test
          return (
            <div key={id}><li>Test theme: {testGroup.topicName}</li>
              <TestsList tests={testGroup.tests} targetGroup={testGroup.topicId} />
              <br/>
            </div>
          )
        })
      }
    </ul>
  );
}

export default TestsAll
