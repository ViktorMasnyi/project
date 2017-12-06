import React, { Component } from "react";
import Slide from '../slider/Slide';

let imagesUrl=[
  'img/Slider1.png',
  'img/Slider2.png',
  'img/Slider3.png'
];
class Slider extends Component {
  constructor(props) {
    super(props);      
    this.state = {
      images: [],
      index: 0,
      translateValue: 0
    };  
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }
  renderSlides = () => {
    const images = imagesUrl;
    let slides = [];
    for(let i = 0; i < images.length; i++) 
      slides.push(<Slide key={i} image={images[i]} />)      
    return slides
  }
  componentDidMount() {
    let timerID=setInterval(this.goToNextSlide, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { translateValue } = this.state
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.5s'
          }}>
          { this.renderSlides() }
        </div>        
      </div>
    )
  }
  goToNextSlide = () => {
    const images = imagesUrl;
    if(this.state.index === images.length - 1) {
      return this.setState({
        translateValue: 0,
        index: 0
      })
    }
    this.setState({
      translateValue: this.state.translateValue -= this.slideWidth(),
      index: this.state.index += 1
    })
  }
  slideWidth = () => {
    const slide = document.getElementById('root');    
    return slide.clientWidth
  }
}

export default Slider;
