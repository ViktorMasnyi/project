import React from 'react';

const SlideOne= (props) => {
  
  let background = {
    backgroundImage: 'url("img/Slider2.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide" key={1}>Slide 2</div>
}

export default SlideOne;
