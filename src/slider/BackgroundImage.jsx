import React from 'react';

class BackgroundImage extends React.Component {
  render() {
    const urls = {
      home: 'http://localhost:3000/img/Slider1.png',
      about: 'http://localhost:3000/img/Slider2.png',
      about2: 'http://localhost:3000/img/Slider3.png',
    };
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };
   let src = urls[this.props.page];
  
   return <main className="main">
            <img src={src} style={style} />
          </main>;
  }
}
export default BackgroundImage;
