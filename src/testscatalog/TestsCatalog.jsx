import React, { Component } from "react";
// import testsList from "../test/testsList";

class TestsCatalog extends Component {
  constructor(props) {
    super(props);      
    this.state = props;
            
    };      
  
  componentDidMount() {
    
  }
  componentWillUnmount() {
    
  }
  render() {
    
    return (
      <main className="main">
        <div className="catalog">
           <ul>
            {
              this.state.tests.map(function(testGroup) {
                return <li key={testGroup.topicName}>Test theme: {testGroup.topicName}</li>
              })
            }
          </ul>   
        </div>
      </main>
    )
  }
  
}

export default TestsCatalog;
