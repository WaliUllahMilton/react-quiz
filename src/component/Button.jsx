import React from "react";
import classes from "../style/Button.module.css";
export const Button = ({ className, text, children, ...rest }) => {
  return (
    <button className={`${classes.button} ${className}`} {...rest}>
      <span>{text}</span>
      {children}
    </button>
  );
};
