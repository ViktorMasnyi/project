import React from "react";

class MyButton extends React.Component {
  handleClick = () => this.props.onClick(this.props.index)
  
  render() {
    return <button
      type='button'
      children={`Question ${this.props.index + 1}`}
      className={
        this.props.isActive ? 'test__question-active' : 'test__question-inactive'
      }
      onClick={ this.handleClick }
    />
  }
}

export default MyButton;
