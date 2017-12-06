import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const SlideN = ({ image }) => {

  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <ReactCSSTransitionGroup className="main"
        transitionName="carousel"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <div className="slider">        
          <div style={background} className="slide" key={image}></div>
        </div>
    </ReactCSSTransitionGroup>
  );
}
export default SlideN
