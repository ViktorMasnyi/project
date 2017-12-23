import React, { Component } from "react";
import Answer from "./Answer";
//import { NavLink } from "react-router-dom";

class Test extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      activeQuestion: {},
      btnBgColor: "lightgreen"
    };
    this.handleActiveQuestion = this.handleActiveQuestion.bind(this);  
  };

  componentWillUnmount () {
    this.setState({activeQuestion: {}});
  }

  handleActiveQuestion = question => this.setState({ activeQuestion: question });

  render () {    
    let targetGroup = this.props.match.params.targetGroup;  
    let nameId = this.props.match.params.nameId; // nameId is a siquence no. of test inside Test Group -> tests[]
    let targetTest = this.props.test[targetGroup].tests[nameId];
    let answers = null;
      //console.log('this.state.activeQuestion', this.state.activeQuestion)
      if (this.state.activeQuestion.type) {
        answers = <Answer props={this.state.activeQuestion} />;
      }
      else answers = null;

    return (
      <main className="main">
        <div className="test__container">
          <div className="test__header">
            <h2 className="test__heading">{targetTest.name}</h2>
            <button value="end test" children="END TEST"/>
          </div>
          <div className="test__questions">
            {
              targetTest.questions.map((question, id) =>
                <button key={id} className="header__login link" style={{backgroundColor: this.state.btnBgColor}} 
                  onClick={() => {
                    this.handleActiveQuestion(question);
                    this.setState({})
                  
                  }                  
                }>
                  Question {id + 1}
                </button>
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
