import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Answers from "./Answers";
import MyButton from "./MyButton";
import Timer from "./Timer"
import TestFinishAlert from "./TestFinishAlert";

class Test extends Component {
  constructor(props) {
    super(props);
    let targetGroup = this.props.test[this.props.match.params.targetGroup];    
    let nameIdMatch = this.props.match.params.nameId; // nameId is a siquence no. of test inside Test Group -> tests[]
    let [testMatch] = targetGroup.tests.filter((test) => {
      return +test.nameId === +nameIdMatch;     
    });
    this.state = {
      activeQuestion: {},
      activeIndex: null,
      userAnswers: {},
      testStatus: 'fail',
      isOver: false,
      targetTest: testMatch
    };
    this.handleActiveQuestion = this.handleActiveQuestion.bind(this); 
    this.handleActiveQuestionAnswer = this.handleActiveQuestionAnswer.bind(this);     
    this.handleFinishTest = this.handleFinishTest.bind(this);
    this.handleAlertClick = this.handleAlertClick.bind(this);
  };

  handleActiveQuestion = (question, id) => {
    this.setState({ 
      activeUserTestProps: {},
      activeQuestion: question,
      activeIndex: id 
    })
  };

  handleActiveQuestionAnswer = (userAnswers) => {    
    this.setState({
      userAnswers: {
        ...this.state.userAnswers,
        [this.state.activeIndex]: userAnswers
      }
    });
  };

  handleFinishTest = () => {
    const correctAnswers = this.state.targetTest.questions.map((question, id) => question.correctAnswer); //Array of Arrays
    const userAnswers = this.state.userAnswers; // may have less answers than correctAnswers
    let numCorrAnswers = 0;
    let numUserAnswers = 0;
    let testScore = 0;
    let answerScore = 0;
    for (let i = 0; i < correctAnswers.length; i++) { // looping for question answers inside User answers
      if (userAnswers[i] === undefined) continue;
      numCorrAnswers = correctAnswers[i].length;
      numUserAnswers = userAnswers[i].length;
      answerScore = 0;
      if (numCorrAnswers !== numUserAnswers) continue; // check q-ty of answers for i-th question
      for (let j = 0; j < numCorrAnswers; j++) { // looping for part of the answer (radio=1/checkbox=n)
        if(correctAnswers[i].indexOf(userAnswers[i][j]) > -1) answerScore++;
      };
      if (answerScore === numCorrAnswers) testScore++;
    }
    testScore / correctAnswers.length >= this.state.targetTest.minTestScore
      ? this.setState({testStatus: 'pass'}) 
      : this.setState({testStatus: 'fail'});
    this.setState({isOver: true});   
  };

  handleAlertClick = () => {
    this.setState({isOver: false});
    this.props.updateUserStats(
      this.state.testStatus,
      this.state.targetTest.nameId,
      this.state.targetTest.name
    )
    this.props.history.push('/UserHomePage');
  }

  render () {
    let targetTest = this.state.targetTest;    
    let answers = this.state.activeQuestion.type
    ? <Answers 
        handleActiveQuestionAnswer={this.handleActiveQuestionAnswer} 
        activeQuestion = {this.state.activeQuestion} 
        userAnswers = {this.state.userAnswers}
        activeIndex = {this.state.activeIndex}
      />
    : null;

    return (      
      <main className="main">
      {
        (this.props.authUserId > 0)
        ? <div className="test__container">
            <div className="test__header">
              <h2 className="test__heading">{targetTest.name}</h2>
              <button onClick={this.handleFinishTest} value="end test" children="END TEST"/>
              <Timer 
                timeLimit={targetTest.timeLimit}
                startTimer={this.state.activeQuestion.type}
                handleFinishTest={this.handleFinishTest}
                isOver={this.state.isOver}
              />
            </div>
            <div className="test__questions">
              {
                targetTest.questions.map((question, id) =>
                  <MyButton key={id} 
                    index={id} 
                    isActive={this.state.activeIndex===id}
                    isAnswered={this.state.userAnswers[id] !== undefined && this.state.userAnswers[id][0]}
                    question={question}
                    handleActiveQuestion = {this.handleActiveQuestion}                                    
                  >
                    Question {id + 1}
                  </MyButton>
                )
              }
                {this.state.activeQuestion && <div className="test__question" children={this.state.activeQuestion.question} />}
              <div>
                {answers}
              </div>
            </div>
            <TestFinishAlert 
              isOver={this.state.isOver}
              testStatus={this.state.testStatus}
              testName={this.state.targetTest.name}
              handleAlertClick={this.handleAlertClick}
            />
          </div>        
        : <p>Please sign in <NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Login">here</NavLink></p>
        }
      </main>    
    )
  }
}

export default Test
