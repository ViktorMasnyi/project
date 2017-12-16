import React, { Component } from "react";
import TestsList from "../test/TestsList";

class TestsCatalog extends Component {
  constructor(props) {
    super(props);      
    this.state = props;
    this.handleSearch = this.handleSearch.bind(this);        
    };      
  
  componentDidMount() {
    
  }
  componentWillUnmount() {
    
  }
  handleSearch = function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var foundTests;
    var displayedTests = this.state.test.map((testGroup, id) => {
      testGroup.tests.map(function(test) {
        console.log(test.name);
        if (test.name == searchQuery) console.log(test.name)})
      //console.log(testGroup);
    });
    event.preventDefault();
  }
  render() {
    
    return (
      <main className="main">
        <div className="catalog">
          <form action="">
            <input className="header__input" type="text" onChange={this.handleSearch} placeholder="найти тест" />
            <input className="header__input" type="submit" value="search" />
          </form>
           <ul>
            {
              this.state.test.map(function(testGroup, id) {
                return (
                  <div key={id}><li>Test theme: {testGroup.topicName}</li>
                  <TestsList tests={testGroup.tests}/>
                  <br/>
                </div>
                )
              })
            }
          </ul>   
        </div>
      </main>
    )
  }
  
}

export default TestsCatalog;
