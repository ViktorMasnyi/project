
import React, { Component } from "react";
import TestsAll from "./TestsAll";
import SearchResult from "./SearchResult";

class TestsCatalog extends Component {
  constructor(props) {
    super(props);
    if (this.props.match.params.sortBy === '2') {
      this.props.handleSearch('none', true);
    }
    this.state = {
      isSearchActive: false,
      flatTestsArr: []
    };  
  };
  
  handleChange = (event) => {
    this.props.handleSearch(event.target.value, true);
    //this.setState({isSearchActive: true});
  };

  handleReset = () => {
    this.props.handleReset();
    //this.setState({isSearchActive: false});
  };

  componentWillMount() {
    if (this.props.match.params.sortBy === 'byalphabet') {
      let flatArr = [];
      this.props.test.forEach((testGroup, id) => {   
        testGroup.tests.forEach(test => {
          test.groupId = testGroup.topicId;
          flatArr.push(test)
        })        
      })
      this.setState({flatTestsArr: flatArr});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.sortBy !== this.props.match.params.sortBy 
      && nextProps.match.params.sortBy === 'byalphabet') {
      let flatArr = [];
      this.props.test.forEach((testGroup, id) => {   
        testGroup.tests.forEach(test => {
          test.groupId = testGroup.topicId;
          flatArr.push(test)
        })        
      })
      this.setState({flatTestsArr: flatArr});
    }
  }

  render() {
    let isSearchActive = this.props.isSearchActive;
    let renderAllTests = null;    
    let sortBy = this.props.match.params.sortBy;
    let sortedTestsList = [].concat(this.props.test);
    let flatTestsArr = [];
    if (sortBy === 'bytheme') {
      sortedTestsList = sortedTestsList.sort((a, b) => {
        if (a.topicName > b.topicName) return 1;  // sort by Test Group topic name
        return -1;
      })
    };

    if (sortBy === 'byalphabet') {
      flatTestsArr = this.state.flatTestsArr.sort((a, b) => {
        if (a.name > b.name) return 1;  // sort by Test name
        return -1;
      })
    };

    if ((!isSearchActive && sortBy === undefined) || sortBy === 'bytheme') {
      renderAllTests = <TestsAll test={sortedTestsList} />;
    } 
    else if (sortBy === 'byalphabet') {
      renderAllTests = <SearchResult foundTests={flatTestsArr} foundGroups={this.props.foundGroups} />;
    }
    else {
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
