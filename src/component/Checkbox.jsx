import React from "react";
import classes from "../style/Checkbox.module.css";
export const Checkbox = ({ text, className }) => {
  return (
    <label htmlFor="checkbox" className={`${classes.checkbox} ${className}`}>
      <input type="checkbox" name="checkbox" id="" />
      {text}
    </label>
  );
};
