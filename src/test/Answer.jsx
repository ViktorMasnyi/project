import React from "react";

const Answer = (props) => {
  console.log('Answer props', props)
    return (     
      <label key={`label${props.answerId}`}>
        <input key={`answer${props.answerId}`} 
          type={props.type}
          value={props.answer}
          checked={props.checked}
          onChange={(e) => props.onChange(e)}
        />       
       {props.answer}              
      </label>
    )
}

export default Answer;
