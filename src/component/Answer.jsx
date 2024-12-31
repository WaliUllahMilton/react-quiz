import React from "react";
import classes from "../style/Answer.module.css";
import { Checkbox } from "./Checkbox";
export const Answer = () => {
  return (
    <div className={classes.answer}>
      <Checkbox text="answer sajkf" className={classes.checkbox} />
      <Checkbox text="answer sajkf" className={classes.checkbox} />
      <Checkbox text="answer sajkf" className={classes.checkbox} />
      <Checkbox text="answer sajkf" className={classes.checkbox} />
    </div>
  );
};
