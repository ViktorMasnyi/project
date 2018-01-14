import React from 'react';

const Slide = ({ image }) => {

  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide" key={image} />
}

export default Slide
