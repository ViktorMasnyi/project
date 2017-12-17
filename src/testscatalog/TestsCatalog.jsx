import React, { Component } from "react";
import TestsAll from "./TestsAll";
import TestsList from "../test/TestsList";

class TestsCatalog extends Component {
  constructor(props) {
    super(props); 
    this.state = {isSearchActive: false};  
  };

  handleChange = (event) => {
    this.props.handleSearch(event.target.value);
    this.setState({isSearchActive: true});
  };

  handleReset = () => {
    this.props.handleReset();
    this.setState({isSearchActive: false});
  }
  
  render() {
    console.log(this.props);
    let isSearchActive = this.state.isSearchActive;
    let renderAllTests = null;           
    if (!isSearchActive) {
      renderAllTests = <TestsAll test={this.props.test} />;
    } else {
      renderAllTests = null;
    }
    console.log('renderAllTests: ' ,renderAllTests);
    console.log('isSearchActive: ' ,isSearchActive);
    return (
      <main className="main">
        <div className="catalog">
          <form action="">
            <input className="header__input" type="text" onChange={this.handleChange} placeholder="найти тест" />
            <input className="header__input" type="reset" onClick={this.handleReset} value="X" />
            {/*<button onClick={this.props.testCallback}>testCallback [current value: {this.props.testValue}]</button>*/}
          </form>
          {renderAllTests}
          
          {/*<ul>
            {
              this.props.test.map(function(testGroup, id) { //was this.state.test
                return (
                  <div key={id}><li>Test theme: {testGroup.topicName}</li>
                  <TestsList tests={testGroup.tests} />
                  <br/>
                </div>
                )
              })
            }
          </ul>   */}
          <h2>Found Tests</h2>
          <TestsList tests={this.props.foundTests} />
          <h2>Found tests topics</h2>
          <ul>
            {              
              this.props.foundGroups.map(function(testGroup, id) {
                return <li key={id}>Test theme: {testGroup.topicName}</li>
              })             
            }
          </ul>   
        </div>
      </main>
    )
  }  
}

export default TestsCatalog;
