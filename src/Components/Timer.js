import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { inputContext } from "../Context/inputContext";

const formatRemainingTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds}`;
};

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      {/* <div className="text">Remaining time</div> */}
      <div className="value">{formatRemainingTime(remainingTime)}</div>
    </div>
  );
};

export function Timer() {
  const { formInputs, setFormInputs } = useContext(inputContext);
  const onComplete = () => {
    setFormInputs((prevState) => ({
      ...prevState,
      cantCancel: true,
    }));
  };

  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          size={60}
          strokeWidth={5}
          isPlaying
          duration={300}
          colors={"#e72e80"}
          onComplete={onComplete}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
