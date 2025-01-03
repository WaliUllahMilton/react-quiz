import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuestions from "../../hook/useQuestions";
import classes from "../../style/Quiz.module.css";
import { Answer } from "../Answer";
import { ProgressBar } from "../ProgressBar";
const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};
const Quiz = () => {
  const location = useLocation();
  const { state } = location;
  const { title } = state;
  const { id } = useParams();
  const [currentQuestions, setCurrentQuestion] = useState(0);
  const { loading, error, questions } = useQuestions(id);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionId: currentQuestions,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  function nextQuestion() {
    if (currentQuestions + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestions >= 1 && currentQuestions <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  // console.log(qna);
  const percentage =
    questions.length > 0
      ? ((currentQuestions + 1) / questions.length) * 100
      : 0;
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, { [id]: qna });
    navigate(`/result/${id}`, {
      state: {
        qna,
      },
    });
  }
  return (
    <div className={classes.quiz}>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <div>
            <h3>{qna[currentQuestions].title}</h3>
            <p>Question can have multiple answers</p>
            <hr />
          </div>
          <Answer
            input={true}
            options={qna[currentQuestions].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            prev={prevQuestion}
            next={nextQuestion}
            percentage={percentage}
            submit={submit}
            id={id}
            title={title}
          />
        </>
      )}
    </div>
  );
};
export default Quiz;
