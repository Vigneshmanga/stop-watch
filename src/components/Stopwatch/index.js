import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, timerOn: false}

  start = () => {
    this.intervalId = setInterval(() => {
      this.setState(() => {
        const {minutes, seconds} = this.state
        let updatedMinutes
        let updateSeconds
        if (seconds === 59) {
          updateSeconds = 0
          updatedMinutes = minutes + 1
        } else {
          updateSeconds = seconds + 1
          updatedMinutes = minutes
        }
        return {
          minutes: updatedMinutes,
          seconds: updateSeconds,
          timerOn: true,
        }
      })
    }, 1000)
  }

  stop = () => {
    const {timerOn} = this.state
    if (timerOn) {
      clearInterval(this.intervalId)
      this.setState({timerOn: false})
    }
  }

  reset = () => {
    const {timerOn} = this.state
    if (timerOn) {
      clearInterval(this.intervalId)
      this.setState({timerOn: false})
    }
    this.setState({minutes: 0, seconds: 0, timerOn: false})
  }

  render() {
    const {minutes, seconds, timerOn} = this.state
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="timer-heading">
            <img
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <h1>Timer</h1>
          </div>
          <h1 className="timer">
            {minutes < 10 ? 0 : null}
            {minutes}:{seconds < 10 ? 0 : null}
            {seconds}
          </h1>
          <div className="buttons-container">
            <button
              disabled={timerOn}
              onClick={this.start}
              className="btn1"
              type="button"
            >
              Start
            </button>
            <button onClick={this.stop} className="btn2" type="button">
              Stop
            </button>
            <button onClick={this.reset} className="btn3" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
