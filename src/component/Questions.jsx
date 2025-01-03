import React from "react";
import classes from "../style/Answer.module.css";
import { Answer } from "./Answer";
// import { Checkbox } from "./Checkbox";
export const Questions = ({ answers = [] }) => {
  // console.log("ques", answers);
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        {" "}
        {index + 1}
        {`. ${answer.title}`}
      </div>
      <Answer input={false} options={answer.options} />
    </div>
  ));
};
