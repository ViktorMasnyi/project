import React from 'react';
import TestsList from "../test/TestsList";

const SearchResult = (props) => {
  return (
    <div>
      <h2>Search results:</h2>
          <TestsList tests={props.foundTests} />
          <br />
          <ul>
            {              
              props.foundGroups.map(function(testGroup, id) {
                return <li key={id}>Test theme: {testGroup.topicName}</li>
              })             
            }
          </ul>
    </div>
  );
}
export default SearchResult
