import React from "react";
import classes from "../style/Checkbox.module.css";
export const Checkbox = ({ htmlFor, text, className, input, ...rest }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${classes.checkbox} ${className} ${
        input ? classes.hover : null
      }`}
    >
      <input type="checkbox" name="checkbox" id={htmlFor} {...rest} />
      {text}
    </label>
  );
};
