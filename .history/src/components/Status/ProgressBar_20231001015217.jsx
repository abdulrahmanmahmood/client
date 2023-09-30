import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ index, activateIndex, duration }) => {
  const isActivate = index === activateIndex;
  const [progress, setProgress] = useState();
  useEffect(() => {
    const intervalid = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(intervalid);
        return prev;
      });
    }, duration / 100);
  }, [duration, activateIndex]);
  useEffect(() => {
    setProgress(0);
  }, [activateIndex]);
  return (
    <div className={`progress-bar-container ${isActivate ? "activate" : ""}`}>
      <div
        className={`${isActivate ? "progress-bar" : ""}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
