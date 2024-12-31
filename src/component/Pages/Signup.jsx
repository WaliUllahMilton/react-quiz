import { FaRegUser } from "react-icons/fa";
import {
  MdAlternateEmail,
  MdLockOutline,
  MdOutlineLockClock,
} from "react-icons/md";
import classes from "../../style/Signup.module.css";
import { Button } from "../Button";
import Form from "../Form";
import Illustrator from "../Illustrator";
import { TextInput } from "../TextInput";
export default function Signup() {
  return (
    <div className={classes.signup}>
      <h1>Create an Account</h1>
      <div className={classes.column}>
        <Illustrator />
        <Form>
          <TextInput
            type="text"
            placeholder="Enter Name"
            icons={<FaRegUser />}
          />
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
          <TextInput
            type="password"
            placeholder="confirm password"
            icons={<MdOutlineLockClock />}
          />
          <Button text="Submit Now" />
          <p>
            already have an account?<a href="">Login</a> instead
          </p>
        </Form>
      </div>
    </div>
  );
}
