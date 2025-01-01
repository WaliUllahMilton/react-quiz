// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "../src/style/App.css";
import Layout from "./component/Layout";
import Home from "./component/Pages/Home";
import Quiz from "./component/Pages/Quiz";
import Result from "./component/Pages/Result";
import Signin from "./component/Pages/Signin";
import Signup from "./component/Pages/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
