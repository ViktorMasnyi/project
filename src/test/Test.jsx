import React, { Component } from "react";
import Answers from "./Answers";
import MyButton from "./MyButton";
import Timer from "./Timer"

class Test extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      activeQuestion: {},
      activeIndex: null,
      activeUser: null, // move to props
      targetTest: {},
      userAnswers: {}
    };
    this.handleActiveQuestion = this.handleActiveQuestion.bind(this); 
    this.handleActiveQuestionAnswer = this.handleActiveQuestionAnswer.bind(this);     
  };

  componentWillMount () {
    let targetGroup = this.props.test[this.props.match.params.targetGroup];    
    let nameIdMatch = this.props.match.params.nameId; // nameId is a siquence no. of test inside Test Group -> tests[]
    let [testMatch] = targetGroup.tests.filter((test) => {
      return +test.nameId === +nameIdMatch;     
    })
    this.setState({targetTest: testMatch}); 
  }
 
  componentWillUnmount () {
    this.setState({activeQuestion: {}});
  }

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

  render () {
    let targetTest = this.state.targetTest;    
    let answers = this.state.activeQuestion.type ? 
      <Answers 
        handleActiveQuestionAnswer={this.handleActiveQuestionAnswer} 
        activeQuestion = {this.state.activeQuestion} 
        userAnswers = {this.state.userAnswers}
        activeIndex = {this.state.activeIndex}
      /> : null;

    return (
      <main className="main">
        <div className="test__container">
          <div className="test__header">
            <h2 className="test__heading">{targetTest.name}</h2>
            <button value="end test" children="END TEST"/>

            <Timer 
              timeLimit={targetTest.timeLimit}
              startTimer={this.state.activeQuestion.type}
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
        </div>
      </main>    
    )
  }
}

export default Test
