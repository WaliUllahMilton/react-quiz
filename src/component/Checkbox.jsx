import React from "react";
import classes from "../style/Checkbox.module.css";
export const Checkbox = ({ htmlFor, text, className, ...rest }) => {
  return (
    <label htmlFor={htmlFor} className={`${classes.checkbox} ${className}`}>
      <input type="checkbox" name="checkbox" id={htmlFor} {...rest} />
      {text}
    </label>
  );
};
