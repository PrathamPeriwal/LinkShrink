import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Animated background elements - dashboard style but different colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Additional smaller orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-gradient-to-r from-emerald-400/15 to-teal-600/15 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gradient-to-r from-rose-400/15 to-pink-600/15 rounded-full blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-4 animate-fade-in">
          <div className="mb-2">
            <span className="inline-block mt-8 text-4xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
            {login ? "Welcome Back" : "Join Us"}
          </h1>
          <p className="text-white/70 text-xs">
            {login
              ? "Sign in to continue your journey"
              : "Create your account today"}
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-5 animate-slide-up glow-purple">
          {login ? (
            <LoginForm state={setLogin} />
          ) : (
            <RegisterForm state={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
