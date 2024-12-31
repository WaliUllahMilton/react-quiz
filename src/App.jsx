import "../src/style/App.css";
import Layout from "./component/Layout";
import { Quiz } from "./component/Pages/Quiz";
// import Signin from "./component/Pages/Signin";
// import Signup from "./component/Pages/Signup";
function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Signup />
        //  */}
        {/* <Signin /> */}
        <Quiz />
      </Layout>
    </>
  );
}

export default App;
