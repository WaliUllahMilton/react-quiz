import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function useQuestions(videoId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());
      try {
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    setTimeout(() => {
      fetchQuestions();
    }, 2000);
  }, [videoId]);
  return {
    loading,
    error,
    questions,
  };
}
