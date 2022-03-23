import { timerMinutes } from "./config";

export const formatTwoDigits = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

export const getPercentage = (
  currentMinutes: number,
  currentSeconds: number
) => {
  return ((currentMinutes * 60 + currentSeconds) / (timerMinutes * 60)) * 100;
};

export const getMilestonePercentage = (milestoneMinutes: number) => {
  return 100 - (milestoneMinutes / timerMinutes) * 100;
};

export const getMilestonePercentage2 = (milestoneMinutes: number) => {
  return (milestoneMinutes / timerMinutes) * 100;
};
