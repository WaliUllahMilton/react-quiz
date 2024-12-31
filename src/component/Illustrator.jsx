import React from "react";
import image from "../assets/images/signup.svg";
import classes from "../style/Illustrator.module.css";
export default function Illustrator() {
  return (
    <div className={classes.illustrator}>
      <img src={image} alt="Signup" />
    </div>
  );
}
