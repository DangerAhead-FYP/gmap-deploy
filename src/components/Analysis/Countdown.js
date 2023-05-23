import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "../../stylesheets/Analysis/Countdown.css"

const renderTime = ({ remainingTime }) => {
//   if (remainingTime === 0) {
//     return <div className="timer">Too lale...</div>;
//   }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default function Countdown() {
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={16}
          colors={["#E6432D","#e6682d","#e4942c","#e6b52d","#fad46c"]}
          colorsTime={[16,12, 8, 4, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 0 })}
          strokeWidth={20}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
