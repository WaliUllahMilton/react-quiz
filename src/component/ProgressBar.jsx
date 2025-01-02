import React from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import classes from "../style/ProgressBar.module.css";
import { Button } from "./Button";
export const ProgressBar = ({ next, submit, prev, percentage }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.icons} onClick={prev}>
        <FaChevronLeft />
      </div>
      <div className={classes.progress}>
        <span
          className={classes.progressChild}
          style={{ width: `${percentage}%` }}
        ></span>
        <span
          className={classes.progressCircle}
          style={{ left: `${percentage - 1}%` }}
        ></span>
      </div>
      <div className={classes.parenButton}>
        <Button
          text={percentage === 100 ? "submit" : `Next question`}
          className={classes.button}
          onClick={percentage === 100 ? submit : next}
        >
          <FaChevronRight />
        </Button>
        <div className={classes.play}>
          <span className={classes.playIcon}>
            <FaPlay />
          </span>
        </div>
      </div>
    </div>
  );
};
