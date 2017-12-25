import React, { Component } from "react";
import Answer from "./Answer";

class Answers extends Component { 
  constructor (props) {
    super(props); 
    this.state = {}
  }
  
  handleAnswerChange = (e) => {
    const type = e.target.type;
    const value = e.target.value;

    if (type === 'radio') {
      this.props.handleActiveQuestionAnswer([value]);
    } else {
      const { userAnswers, activeIndex } = this.props;
      let multiAnswer = userAnswers[activeIndex] !== undefined
        ? [...userAnswers[activeIndex]]
        : [];

      e.target.checked
        ? multiAnswer.push(value)
        : multiAnswer = multiAnswer.filter(item => item !== value);

      this.props.handleActiveQuestionAnswer(multiAnswer);
    }
  }

  render () {
    //console.log('Answers props.userAnswers: ', this.props.userAnswers);
    return (
      <form className="test__answers">      
        {                  
          this.props.activeQuestion.answer.map((answer, id) => {            
            return (
              <Answer
                key={`AnswerKey${id}`} 
                answer={answer}
                answerId={id}
                checked={this.props.userAnswers[this.props.activeIndex] !== undefined && 
                  this.props.userAnswers[this.props.activeIndex].indexOf(answer) > -1}
                type={this.props.activeQuestion.type}
                handleChange={this.handleAnswerChange}
              />
            )           
          })
        }
      </form>
    );
  }
}

export default Answers
