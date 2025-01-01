import React from "react";
import image from "../../assets/images/success.png";
import classes from "../../style/Result.module.css";
import { Analysis } from "../Analysis";

const Result = () => {
  return (
    <div>
      <div className={classes.score}>
        <h3>
          you score is <br />5 out of 10
        </h3>
        <div className={classes.img}>
          <img src={image} alt="result" />
        </div>
      </div>
      <Analysis />
    </div>
  );
};
export default Result;
