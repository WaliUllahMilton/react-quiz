import React from "react";
import classes from "../style/Analysis.module.css";
import { Answer } from "./Answer";
export const Analysis = () => {
  return (
    <div className={classes.analysis}>
      <div className={classes.header}>
        <h2>Question Analysis</h2>
        <p>you answared 5 out of 10 correctly</p>
      </div>
      <div className={classes.questions}>
        <p>Here goes the question from Learn with sumit?</p>
        <Answer />
      </div>
    </div>
  );
};
