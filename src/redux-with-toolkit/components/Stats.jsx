import React from "react";
import { useSelector } from "react-redux";
import { selectStats } from "../store";

export const Stats = () => {
  const { done, remaining } = useSelector(selectStats);
  return (
    <div>
      <h2>Stats</h2>
      <div>
        <h3>Done: {done}</h3>
        <h3>Remaining: {remaining}</h3>
      </div>
    </div>
  );
};
