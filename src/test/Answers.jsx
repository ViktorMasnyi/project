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

    console.log('e.target.value from Answer', e.target.value)
    this.setState({
      selectedOption: value
    });

    if (type === 'radio') {
      this.props.handleActiveQuestionAnswer([value]);
    } else {

    }

    // this.props.handleActiveQuestionAnswer(this.props.userAnswers[id]);
  }

  render () {
    //console.log('Answers props.userAnswers: ', this.props.userAnswers);
    return (
      <form className="test__answers">      
        {                  
          this.props.activeQuestion.answer.map((answer, id) => {
            console.log('Answers props.userAnswers[id]', this.props.userAnswers[id], 'answer No:',id);            
            //let checked = (id === 0 && this.props.activeQuestion.type === 'radio') ? 'checked' : false; 
            return ( 
              <Answer
                key={`AnswerKey${id}`} 
                answer={answer}
                answerId={id}
                checked={(this.props.userAnswers[id]) ? true : false && this.props.userAnswers[id].indexOf(answer) > -1}
                type={this.props.activeQuestion.type}
                onChange={this.handleAnswerChange}
              />
            )
            
            {/* <label key={`label${this.props.activeIndex}${id}`}>
              <input type={this.props.activeQuestion.type}
                key={`answer${this.props.activeIndex}${id}`}

                value={answer}
                checked={this.props.userAnswers[id] && this.props.userAnswers[id].indexOf(answer) > -1}
                onChange={this.handleAnswerChange}
              />
              {this.props.userAnswers[id] && console.log('this.props.userAnswers[id].indexOf(answer)', this.props.userAnswers[id].indexOf(answer))}
              {answer}              
            </label> */}
          })
        }
        {/* <button
          type="button"
          value="save"
          onClick={() => {this.props.handleActiveQuestionAnswer(this.state.selectedOption)}}
        >
          Save answer
        </button> */}
              
      </form>
    );
  }
}

export default Answers
