import classes from "../../style/Signup.module.css";
import Illustrator from "../Illustrator";
import SignupForm from "../SignupForm";
export default function Signup() {
  return (
    <div className={classes.signup}>
      <h1>Create an Account</h1>
      <div className={classes.column}>
        <Illustrator />
        <SignupForm />
      </div>
    </div>
  );
}
