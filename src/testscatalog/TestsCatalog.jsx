import React, { Component } from "react";
import TestsList from "../test/TestsList";

class TestsCatalog extends Component {
  constructor(props) {
    super(props);      
    //this.state = props;
    this.state = {foundTests: []};
    this.handleSearch = this.handleSearch.bind(this);        
    };     
  componentDidMount() {
    
  }
  componentWillUnmount() {
    
  }
  handleSearch = function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var foundT = [];
    //console.log(this.props);
    var displayedTests = this.props.test.map((testGroup, id) => { //was this.state.test
      testGroup.tests.map(function(test) {
        //console.log(test.name);           
        if (test.name.toLowerCase().indexOf(searchQuery) !== - 1) {
          foundT.push(test);
          //console.log(this.state.foundTests);
        }
        return 1;
      });
      console.log(foundT);                      
      this.setState({foundTests: foundT});
      return 2;
    });
    console.log(displayedTests);
    event.preventDefault();
  }
  render() {            
    return (
      <main className="main">
        <div className="catalog">
          <form action="">
            <input className="header__input" type="text" onChange={this.handleSearch} placeholder="найти тест" />
            <input className="header__input" type="reset" value="reset" />
          </form>
          
           <ul>
            {
              this.props.test.map(function(testGroup, id) { //was this.state.test
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
        <hr/>
        <h2>Found Tests</h2>
        <TestsList tests={this.state.foundTests}/>
        <button onClick={this.props.testCallback}>testCallback</button>
      </main>
    )
  }
  
}

export default TestsCatalog;
