import React from 'react';

const SlideOne= (props) => {
  
  let background = {
    backgroundImage: 'url("img/Slider1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide" key={0}><span>Slide 1</span></div>
}

export default SlideOne;
