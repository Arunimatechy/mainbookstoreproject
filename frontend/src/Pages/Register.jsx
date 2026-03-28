import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dp = useDispatch();

  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInput = (e) =>{
    const {name,value} = e.target;
    setFormdata((prev) => ({...prev,[name]:value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {username,email,password} = formdata;

    if(!username || !email || !password){
      return alert("No details provided");
    }

    const result = await dp(registerUser(formdata));

    if (registerUser.fulfilled.match(result)) {
      alert("User registered successfully");
      navigate("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl flex flex-col gap-5 border border-gray-200"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Create Account
        </h1>

        <input 
          type="text" 
          placeholder="Enter your name"  
          value={formdata.username} 
          name="username" 
          onChange={handleInput}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <input 
          type="email"
          placeholder="Enter your email address" 
          value={formdata.email} 
          name="email" 
          onChange={handleInput}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <input 
          type="password"
          placeholder="Enter your password" 
          value={formdata.password} 
          name="password" 
          onChange={handleInput}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <button 
          type="submit"
          className="bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200"
        >
          Register
        </button>

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <span 
            onClick={() => navigate('/login')}
            className="cursor-pointer text-black font-medium hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;