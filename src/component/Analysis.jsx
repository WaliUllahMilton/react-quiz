import React from "react";
import classes from "../style/Analysis.module.css";
import { Questions } from "./Questions";
export const Analysis = ({ answers }) => {
  return (
    <div className={classes.analysis}>
      <div className={classes.header}>
        <h2>Question Analysis</h2>
      </div>
      <div className={classes.questions}>
        <Questions answers={answers} />
      </div>
    </div>
  );
};
