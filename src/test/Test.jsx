import React, { Component } from 'react';
//import { NavLink } from "react-router-dom";

class Test extends Component {
  constructor(props) {
    super(props); 
    this.state = {activeQuestion: {}};
    this.handleActiveQuestion = this.handleActiveQuestion.bind(this);  
  };

  handleActiveQuestion = function (question) {
    this.setState({activeQuestion: question})
  };

  render () {
    let targetGroup = this.props.match.params.targetGroup;  
    let nameId = this.props.match.params.nameId; // nameId is a siquence no. of test inside Test Group -> tests[]
    let targetTest = this.props.test[targetGroup].tests[nameId];
    let questions = targetTest.questions.map(function(question, questionNumber){
      return <button className="header__login link" onClick={(question) => this.handleActiveQuestion(question)}>Question {questionNumber + 1}</button>})
          
  return (
    <main className="main">
      {/*{console.log(props.test[targetGroup].tests[nameId])}*/}
      <div className="test__container">
        <div className="test__header">
          <h2 className="test__heading">{targetTest.name}</h2>
          <button value="end test" children="END TEST"/>
        </div>
        <div className="test__questions">
          {questions}
          {console.log(targetTest.questions[1].question)}
        </div>
      </div>
    </main>
    
    )
  }
}

export default Test
