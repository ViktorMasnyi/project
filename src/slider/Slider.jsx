import React, { Component } from "react";
import SlideOne from '../slider/SlideOne';
import SlideThree from '../slider/SlideThree';

class Slider extends Component {
    constructor(props) {
        super(props);

        
        this.state = {slideCount: 1};
        this.nextSlide = this.nextSlide.bind(this);
    }

nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 });
  }
    render() {
        return (
            <div className="slider">
              { this.state.slideCount === 1 ? <SlideOne /> : null }
              { this.state.slideCount === 2 ? <SlideThree /> : null }
            </div>
        )
    }
}

setInterval(this.nextSlide, 3000);

export default Slider;
