import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import classes from "../../style/Signup.module.css";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import Form from "../Form";
import Illustrator from "../Illustrator";
import { TextInput } from "../TextInput";
export default function Signin() {
  return (
    <div className={classes.signup}>
      <h1>Create an Account</h1>
      <div className={classes.column}>
        <Illustrator />
        <Form>
          <TextInput
            type="email"
            placeholder="Enter Email"
            icons={<MdAlternateEmail />}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icons={<MdLockOutline />}
          />
          <Checkbox />
          <Button text="Login" />
          <p>
            already have an account?<a href="">Sign up</a> instead
          </p>
        </Form>
      </div>
    </div>
  );
}
