import "../src/style/App.css";
import Layout from "./component/Layout";
import Signup from "./component/Pages/Signup";
function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </>
  );
}

export default App;
