import React, { Component } from "react";
import SlideOne from '../slider/SlideOne';
import SlideTwo from '../slider/SlideTwo';
import SlideThree from '../slider/SlideThree';

class Slider extends Component {
  constructor(props) {
    super(props);      
    this.state = {
      slideCount: 0,
      currentSlide: 0,
      maxSlide: 2,
      i: 0
    };
    this.nextSlide = this.nextSlide.bind(this);  //why?
  }
  
  nextSlide() {
    if (this.state.currentSlide < this.state.maxSlide) {     
      this.setState({ currentSlide: this.state.currentSlide + 1 });      
    }
    else this.setState({ currentSlide: 0 });
  }
  componentDidMount() {
    setInterval(this.nextSlide, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div className="slider">
        { this.state.currentSlide === 0 ? <SlideOne /> : null }
        { this.state.currentSlide === 1 ? <SlideTwo /> : null }
        { this.state.currentSlide === 2 ? <SlideThree /> : null }
      </div>
    )
  }
}

export default Slider;
