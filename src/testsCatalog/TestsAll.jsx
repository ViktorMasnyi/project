import React from 'react';
import TestsList from "../test/TestsList";

const TestsAll = ({ test }) => ( // render Test Groups -> Test List (Test Topics)  
  <ul>
    {
      test.map((testGroup, id) => (
          <li key={id}>
            Test theme: {testGroup.topicName}
            <TestsList tests={testGroup.tests} targetGroup={testGroup.topicId} />
            <br/>
          </li>
        )
      )
    }
  </ul>
);

export default TestsAll
