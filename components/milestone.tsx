import classNames from "classnames";
import React from "react";
import { sortedMilestones } from "../src/config";
import {
  getMilestonePercentage,
  getMilestonePercentage2,
} from "../src/helper-func";
import { IMilestone } from "../src/types";

interface IProps {
  milestone: IMilestone;
  currentPercent: number;
  index: number;
}

const Milestone: React.FC<IProps> = ({ milestone, currentPercent, index }) => {
  let nextMilestone = 0;
  if (index < sortedMilestones.length - 1) {
    nextMilestone = sortedMilestones[index + 1].minutes;
  }
  const isActive =
    currentPercent >= getMilestonePercentage2(nextMilestone) &&
    currentPercent < getMilestonePercentage2(milestone.minutes);

  return (
    <>
      <div
        className="milestone-bar"
        style={{
          right: `${getMilestonePercentage(milestone.minutes)}%`,
        }}
      />
      <div
        className={classNames(
          "milestone-point d-flex flex-column align-items-center justify-content-center",
          { ["milestone-active"]: isActive }
        )}
        style={{
          right: `${getMilestonePercentage(milestone.minutes)}%`,
        }}
      >
        <div className="d-flex align-items-center">
          <i className="fas fa-caret-left me-1"></i>
          {milestone.text}
        </div>
        <div className="milestone-min">{milestone.minutes} min</div>
      </div>
    </>
  );
};

export default Milestone;
