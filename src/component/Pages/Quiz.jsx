import React from "react";
import classes from "../../style/Quiz.module.css";
import { Answer } from "../Answer";
import { ProgressBar } from "../ProgressBar";
const Quiz = () => {
  return (
    <div className={classes.quiz}>
      <div>
        <h3>pick three of you favorite star wars flims</h3>
        <p>Question can have multiple answers</p>
        <hr />
      </div>
      <Answer />
      <ProgressBar />
    </div>
  );
};
export default Quiz;
