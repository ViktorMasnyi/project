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
    if (!isSearchActive) {
      renderAllTests = <TestsAll test={this.props.test} />;
    } else {
      renderAllTests = <SearchResult foundTests={this.props.foundTests} foundGroups={this.props.foundGroups} />;
    }
    return (
      <main className="main">
        <div className="catalog">
          {/*<form action="">
            <input className="header__input" type="text" onChange={this.handleChange} placeholder="найти тест" />
            <input className="header__input header__reset" type="reset" onClick={this.handleReset} value="X" />
          </form>*/}
          {renderAllTests}
        </div>
      </main>
    )
  }  
}

export default TestsCatalog;
