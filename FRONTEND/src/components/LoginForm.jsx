import React, { useState } from "react";
import { loginUser } from "../api/user.api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/authSlice.js";
import { useNavigate } from "@tanstack/react-router";

const LoginForm = ({ state }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(password, email);
      console.log("Login response:", data);
      console.log("User data:", data.user);
      // Ensure we're dispatching the actual user object, not nested
      dispatch(login(data.user));
      navigate({ to: "/dashboard" });
      setLoading(false);
      console.log("signin success");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-1">Sign In</h2>
          <p className="text-white/70 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        {error && (
          <div className="p-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 text-red-100 rounded-lg backdrop-blur-sm animate-shake">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{error}</span>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <label
              className="block text-white/90 text-md font-medium mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm text-md"
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-4 h-4 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label
              className="block text-white/90 text-md font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 backdrop-blur-sm text-md"
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-4 h-4 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`mt-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400/30 text-sm ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            <span className="flex items-center justify-center space-x-2">
              <span className="text-lg">Sign In</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          )}
        </button>

        <div className="text-center">
          <p className="text-white/70 text-sm">
            Don't have an account?{" "}
            <span
              onClick={() => state(false)}
              className="text-blue-300 hover:text-blue-200 cursor-pointer font-medium transition-colors duration-300 hover:underline"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
