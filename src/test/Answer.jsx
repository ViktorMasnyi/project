import React from "react";

const Answer = (props) => {
  console.log('Answer props', props.answer)
    return (     
      <label key={`label${props.answerId}`}>
        <input 
          type={props.type}
          key={`answer${props.answerId}`}
          value={props.answer}
          checked={props.checked}
          onChange={props.onChange}
        />       
       {props.answer}              
      </label>
    )
}

export default Answer;
