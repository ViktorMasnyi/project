import React, { Component } from 'react';

const SlideOne= (props) => {
  
  let background = {
    backgroundImage: 'url("img/Slider1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide"></div>
}

export default SlideOne;
