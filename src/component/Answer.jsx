import React, { Fragment } from "react";
import classes from "../style/Answer.module.css";
import { Checkbox } from "./Checkbox";
export const Answer = ({ options, handleChange, input }) => {
  return (
    <div className={classes.answer}>
      {options &&
        options.map((option, index) => (
          <Fragment key={index}>
            {input ? (
              <Checkbox
                text={option.title}
                htmlFor={index}
                checked={option.checked}
                className={classes.checkbox}
                onChange={(e) => handleChange(e, index)}
                input={input}
              />
            ) : (
              <Checkbox
                text={option.title}
                htmlFor={index}
                defaultChecked={option.checked}
                className={`${classes.checkbox} ${
                  option.correct
                    ? classes.correct
                    : option.checked
                    ? classes.wrong
                    : null
                }`}
                input={input}
                disabled
              />
            )}
          </Fragment>
        ))}
    </div>
  );
};
