import React from 'react';

const Answer = ({props}) => {
  return (
    <form className="test__answers">      
      {        
        props.answer.map((answer, id) => { 
          return <label key={id}>
            <input type={props.type} name="answer" value={answer} />
            {answer}
          </label>
        })
      }      
    </form>
  );
}
export default Answer
