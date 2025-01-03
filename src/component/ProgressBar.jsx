import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ReactPlayer from "react-player/youtube";
import classes from "../style/ProgressBar.module.css";
import { Button } from "./Button";
export const ProgressBar = ({ next, submit, prev, percentage, id, title }) => {
  const [showPercen, setShowPercen] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const url = `https://www.youtube.com/watch?v=${id}`;
  console.log(percentage);
  console.log(showPercen);
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
          onMouseEnter={() => setShowPercen(true)}
          onMouseLeave={() => setShowPercen(false)}
          style={{ left: `${percentage - 1}%`, cursor: "pointer" }}
        >
          {showPercen && <span className={classes.percent}>{percentage}%</span>}
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
        <div>
          {showPlayer ? (
            <div
              style={{ position: "absolute" }}
              className={classes.youtubePlayer}
            >
              <span
                className={classes.closePlayer}
                onClick={() => setShowPlayer(false)}
              >
                <ImCross />
              </span>
              <ReactPlayer
                url={url}
                width="200px"
                height="168px"
                playing={setShowPlayer}
                controls
              />
              <p className={classes.playerTitle}>{title}</p>
            </div>
          ) : (
            <div className={classes.play} onClick={() => setShowPlayer(true)}>
              <span className={classes.playIcon}>
                <FaPlay />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
