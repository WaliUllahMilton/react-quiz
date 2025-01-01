/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/Button";
import { Checkbox } from "../component/Checkbox";
import Form from "../component/Form";
import { TextInput } from "../component/TextInput";
import { useAuth } from "../context/AuthContext";
export default function signinForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email == "" || password == "") {
      return setError("email or password empty");
    }
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("faild to login please try with correct info");
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        icons={<MdAlternateEmail />}
      />
      <TextInput
        type="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        icons={<MdLockOutline />}
      />
      <Checkbox
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        text="agree to the terms and conditions"
      />
      <Button text="Login" type="submit" />
      {error && <p className="error">{error}</p>}
      <p>
        Don't have an account?<a href="">Sign up</a> instead
      </p>
    </Form>
  );
}
