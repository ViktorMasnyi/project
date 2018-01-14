import React from "react";

class MyButton extends React.Component {
  handleClick = () => this.props.handleActiveQuestion(this.props.question, this.props.index); // autobinding, enstead of binding in constructor

  render() {
    let isActiveClass = this.props.isActive 
      ? 'test__question-active'
      : 'test__question-inactive';
    let isAnsweredClass = this.props.isAnswered
    ? 'test__question-answered'
    : '';
    
    return <button
      type='button'
      className={`${isActiveClass} ${isAnsweredClass}`}
      onClick={this.handleClick}
    >    
      Question {this.props.index + 1}
    </button>
  }
}

export default MyButton;
