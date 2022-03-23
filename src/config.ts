import { IMilestone } from "./types";

export const timerMinutes = 15;

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

export const sortedMilestones = milestones.sort(
  (a, b) => b.minutes - a.minutes
);
