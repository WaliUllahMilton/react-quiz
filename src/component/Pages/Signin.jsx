import classes from "../../style/Signup.module.css";
import Illustrator from "../Illustrator";
import SigninForm from "../signinForm";
export default function Signin() {
  return (
    <div className={classes.signup}>
      <h1>Login to your Account</h1>
      <div className={classes.column}>
        <Illustrator />
        <SigninForm />
      </div>
    </div>
  );
}
