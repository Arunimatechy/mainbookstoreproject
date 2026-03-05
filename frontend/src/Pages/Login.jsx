import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../features/authSlice";
const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()
const dp = useDispatch()
  const handleInput = (e) => {
    const{name,value}=e.target
    setForm((prev) => ({...prev,[name]:value}))
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await dp(loginUser(form));

    if (loginUser.fulfilled.match(result)) {
      navigate("/");
    } else {
      console.log("Login failed");
    }
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div>
      <form className="min-h-screen flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <label>username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter the email address"
          value={form.username}
          onChange={handleInput}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter the password"
          value={form.password}
          onChange={handleInput}
        />

        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
