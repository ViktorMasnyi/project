import React, { Component } from 'react';
import TestsList from "../test/TestsList";
import Pagination from './Pagination';

class TestsAll extends Component { // render Test Groups -> Test List (Test Topics)  
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.test,
      renderedItems: [],
      page: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    const renderedItems = this.state.items.slice((page - 1) * 2, (page - 1) * 2 + 2);    
    this.setState({ page, renderedItems });
  }

  componentDidMount() {   
    this.setState({ 
      items: this.props.test, 
      renderedItems: this.state.items.slice(0, 2), 
      total: this.state.items.length 
    });    
  }

  render() {
    const { page, total, renderedItems } = this.state;
    return (
    <ul>
      {
        renderedItems.map((testGroup, id) => (
            <li className="catalog__themecontainer" key={id}>
              <h2 className="catalog__testtheme">Test theme: {testGroup.topicName}</h2>
              <TestsList tests={testGroup.tests} targetGroup={testGroup.topicId} />
              <br/>
            </li>
          )
        )
      }
      <Pagination
          margin={2}
          page={page}
          count={Math.ceil(total / 2)}
          onPageChange={this.handlePageChange}
        />
    </ul>
    );
  }
};

export default TestsAll
