import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import classes from "../style/ProgressBar.module.css";
import { Button } from "./Button";
import MiniPlayer from "./MiniPlayer";
export const ProgressBar = ({ next, submit, prev, percentage, id, title }) => {
  const shoPercent = useRef(null);

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
          onMouseEnter={() => (shoPercent.current.style.display = "block")}
          onMouseLeave={() => (shoPercent.current.style.display = "none")}
          style={{ left: `${percentage - 1}%`, cursor: "pointer" }}
        >
          <span
            ref={shoPercent}
            className={classes.percent}
            style={{ display: "none" }}
          >
            {percentage}%
          </span>
        </span>
      </div>
      <div className={classes.parenButton}>
        <Button
          text={percentage === 100 ? "submit" : `Next question`}
          className={classes.button}
          onClick={percentage === 100 ? submit : next}
        >
          {percentage === 100 ? "" : <FaChevronRight />}
        </Button>
        {/* {/* <div> */}
        <MiniPlayer title={title} id={id} />
        {/* </div> */}
      </div>
    </div>
  );
};
