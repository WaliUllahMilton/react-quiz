import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import image from "../../assets/images/success.png";
import useAnswers from "../../hook/useAnswers";
import classes from "../../style/Result.module.css";
import { Analysis } from "../Analysis";
const Result = () => {
  const location = useLocation();
  const state = location.state;
  const { id } = useParams();
  console.log(id);
  const { loading, error, answers } = useAnswers(id);
  if (!state) {
    console.log("no state found");
    return null;
  }
  const { qna } = state;

  console.log(qna);
  console.log(answers);

  function calculateScore() {
    let score = 0;

    answers.forEach((answer, indexOne) => {
      let correctIndexes = [];
      let checkedIndex = [];

      // Collect correct indexes and checked indexes
      answer.options.forEach((option, indexTwo) => {
        if (option.correct) {
          correctIndexes.push(indexTwo);
        }
        if (qna[indexOne].options[indexTwo].checked) {
          checkedIndex.push(indexTwo);
          option.checked = true;
        }
      });

      // Compare correctIndexes and checkedIndex once per question
      if (_.isEqual(correctIndexes, checkedIndex)) {
        score += 5; // Increment score by 5 if they match
      }
    });
    return score;
  }
  let score = calculateScore();
  return (
    <div>
      {loading && <div>Loading.... </div>}
      {error && <div>there was something wrong</div>}
      {answers && answers.length > 0 && (
        <div>
          <div className={classes.score}>
            <h3>
              you score is <br />
              {score} out of 10
            </h3>
            <div className={classes.img}>
              <img src={image} alt="result" />
            </div>
          </div>
          <Analysis />
        </div>
      )}
    </div>
  );
};
export default Result;
