import React, { Component } from "react";

class Answer extends Component {

  render() {
    const { type, answer, checked } = this.props;

    return (
      <label>
        <input
          type={type}
          value={answer}
          checked={checked}
          onChange={this.props.handleChange}
        />       
        {answer}
      </label>
    );
  }
}

export default Answer;
