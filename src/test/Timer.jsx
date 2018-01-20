import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: props.timeLimit};
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));
    hours = hours < 1 ? '00' : hours < 10 ? `0${hours}` : hours;

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    minutes = minutes < 1 ? '00' : minutes < 10 ? `0${minutes}` : minutes;

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    seconds = seconds < 1 ? '00' : seconds < 10 ? `0${seconds}` : seconds;

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if (nextProps!==this.props&&nextProps.isOver) {
      this.props.getTimerValue(this.state.seconds);
      clearInterval(this.timer);
      console.log('timer value TimerComp', this.state.seconds);    
    }    
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) {
      this.props.handleFinishTest();
      clearInterval(this.timer);      
    }
  }

  render() {
    // if (this.props.isOver) clearInterval(this.timer);
    this.props.startTimer && this.startTimer();
    return(
      <div>        
        {this.state.time.m}:{this.state.time.s}
      </div>
    );
  }
}

export default Timer
