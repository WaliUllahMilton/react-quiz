import React from "react";
import classes from "../style/Button.module.css";
export const Button = ({ className, text, children }) => {
  return (
    <button className={`${classes.button} ${className}`}>
      <span>{text}</span>
      {children}
    </button>
  );
};
