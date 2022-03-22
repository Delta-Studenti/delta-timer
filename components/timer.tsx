import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface IMilestone {
  minutes: number;
  text: string;
}

const timerMinutes = 15;

const milestones: IMilestone[] = [
  {
    minutes: 5,
    text: "Dotazy",
  },
  {
    minutes: 15,
    text: "Prezentace",
  },
];

const formatTwoDigits = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

const getPercentage = (currentMinutes: number, currentSeconds: number) => {
  return ((currentMinutes * 60 + currentSeconds) / (timerMinutes * 60)) * 100;
};

const getMilestonePercentage = (milestoneMinutes: number) => {
  return 100 - (milestoneMinutes / timerMinutes) * 100;
};

const Timer: React.FC = () => {
  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: new Date(Date.now() + timerMinutes * 60 * 1000),
  });

  const runTimer = () => {
    const end = new Date(Date.now() + timerMinutes * 60 * 1000);
    restart(end);
  };

  useEffect(() => {
    if (!isRunning) {
      setTimeout(runTimer, 1000);
    }
  }, [isRunning]);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <button className="btn reset-btn" onClick={runTimer}>
        Restart
      </button>
      <h1 className="timer mb-3">
        <span>{formatTwoDigits(minutes)}</span>
        {":"}
        <span>{formatTwoDigits(seconds)}</span>
      </h1>
      <div className="progress w-100 mt-3 ">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${getPercentage(minutes, seconds)}%` }}
        ></div>
      </div>
      <div className="milestone-container">
        {milestones.map((milestone, index) => (
          <React.Fragment key={index}>
            <div
              className="milestone-bar"
              style={{ right: `${getMilestonePercentage(milestone.minutes)}%` }}
            />
            <div
              className="milestone-point d-flex flex-column align-items-center justify-content-center"
              style={{ right: `${getMilestonePercentage(milestone.minutes)}%` }}
            >
              <div className="d-flex align-items-center">
                <i className="fas fa-caret-left me-1"></i>
                {milestone.text}
              </div>
              <div className="milestone-min">{milestone.minutes} min</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timer;
