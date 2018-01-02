import React, { Component } from "react";
import TestsAll from "./TestsAll";
import SearchResult from "./SearchResult";

class TestsCatalog extends Component {
  constructor(props) {
    super(props); 
    this.state = {isSearchActive: false};  
  };

  handleChange = (event) => {
    this.props.handleSearch(event.target.value, true);
    //this.setState({isSearchActive: true});
  };

  handleReset = () => {
    this.props.handleReset();
    //this.setState({isSearchActive: false});
  }
  
  render() {
    let isSearchActive = this.props.isSearchActive;
    let renderAllTests = null;
    console.log('test catalog', this.props);           
    if (!isSearchActive) {
      renderAllTests = <TestsAll test={this.props.test} />;
    } else {
      renderAllTests = <SearchResult foundTests={this.props.foundTests} foundGroups={this.props.foundGroups} />;
    }
    return (
      <main className="main">
        <div className="catalog">
          {renderAllTests}
        </div>
      </main>
    )
  }  
}

export default TestsCatalog;
