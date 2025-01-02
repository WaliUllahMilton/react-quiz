import React from "react";
import classes from "../style/Answer.module.css";
import { Checkbox } from "./Checkbox";
export const Answer = ({ options, handleChange }) => {
  return (
    <div className={classes.answer}>
      {options &&
        options.map((option, index) => (
          <Checkbox
            text={option.title}
            key={index}
            htmlFor={index}
            checked={option.checked}
            className={classes.checkbox}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
    </div>
  );
};
