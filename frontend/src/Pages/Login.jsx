




import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/authSlice";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser(form));

    if (loginUser.fulfilled.match(result)) {
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm flex flex-col gap-5 border border-gray-200"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Welcome Back
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleInput}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleInput}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
