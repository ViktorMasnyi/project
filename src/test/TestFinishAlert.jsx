import React from "react";

const TestFinishAlert = (props) => {
  const isOver = props.isOver;
  if (isOver) {
    return ( 
    <div className="test__popupoverlay">
        <div className="test__popup">
        You have {props.testStatus}ed <br /> {props.testName} <br /> test
            <button className="header__login test__popupclose" onClick={props.handleAlertClick}>
              close
            </button>
        </div>
    </div>
    )
  }
  return null;
};

export default TestFinishAlert;
