import classNames from "classnames";
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { sortedMilestones, timerMinutes } from "../src/config";
import {
  formatTwoDigits,
  getMilestonePercentage,
  getMilestonePercentage2,
  getPercentage,
} from "../src/helper-func";
import Milestone from "./milestone";

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

  const currentPercent = getPercentage(minutes, seconds);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <button className="btn reset-btn" onClick={runTimer}>
        Restart
      </button>
      <a
        href="https://github.com/Delta-Studenti/delta-timer"
        target="_blank"
        rel="noopener noreferrer"
        className="btn github-btn"
      >
        <i className="fab fa-github"></i>
      </a>
      <h1 className="timer mb-3">
        <span>{formatTwoDigits(minutes)}</span>
        {":"}
        <span>{formatTwoDigits(seconds)}</span>
      </h1>
      <div className="px-5 w-100">
        <div className="progress w-100 mt-3 ">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${currentPercent}%` }}
          ></div>
        </div>
        <div className="milestone-container">
          {sortedMilestones.map((milestone, index) => {
            return (
              <Milestone
                key={index}
                index={index}
                milestone={milestone}
                currentPercent={currentPercent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timer;
