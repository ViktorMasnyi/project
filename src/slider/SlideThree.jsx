import React from 'react';

const SlideThree= (props) => {
  
  let background = {
    backgroundImage: 'url("img/Slider3.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide"key={2}>Slide 3</div>
}

export default SlideThree;
