import React from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import classes from "../style/ProgressBar.module.css";
import { Button } from "./Button";
export const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.icons}>
        <FaChevronLeft />
      </div>
      <div className={classes.progress}>
        <span></span>
      </div>
      <div className={classes.parenButton}>
        <Button text={`Next question`} className={classes.button}>
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
