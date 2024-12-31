import React from "react";
import classes from "../style/Input.module.css";
export const TextInput = ({ icons, ...rest }) => {
  return (
    <span className={classes.parent}>
      <input className={classes.input} {...rest} />
      <span className={classes.icons}>{icons}</span>
    </span>
  );
};
