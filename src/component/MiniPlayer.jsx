import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ReactPlayer from "react-player/youtube";
import classes from "../style/ProgressBar.module.css";

const MiniPlayer = ({ title, id }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div>
      {showPlayer ? (
        <div style={{ position: "absolute" }} className={classes.youtubePlayer}>
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
  );
};

export default MiniPlayer;
