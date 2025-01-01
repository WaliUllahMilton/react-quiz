import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import {
  MdAlternateEmail,
  MdLockOutline,
  MdOutlineLockClock,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/Button";
import { Checkbox } from "../component/Checkbox";
import Form from "../component/Form";
import { TextInput } from "../component/TextInput";
import { useAuth } from "../context/AuthContext";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password don't match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("faild to create an account");
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Name"
          icons={<FaRegUser />}
        />
        <TextInput
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          icons={<MdAlternateEmail />}
        />
        <TextInput
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          icons={<MdLockOutline />}
        />
        <TextInput
          required
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
          icons={<MdOutlineLockClock />}
        />
        <Checkbox
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
          text="agree to the terms and conditions"
        />
        <Button text="Submit Now" type="submit" disabled={loading} />
        {error && <p className="error">{error}</p>}
        <p>
          already have an account?<a href="">Login</a> instead
        </p>
      </Form>
    </div>
  );
}
