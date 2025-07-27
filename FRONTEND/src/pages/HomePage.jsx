import React from "react";
import UrlForm from "../components/UrlForm";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden flex flex-col items-center justify-center p-4 pt-20">
      {/* Animated background elements - similar to dashboard but different positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-violet-600/15 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Additional floating orbs for more depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-teal-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-rose-400/10 to-orange-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center mb-12 animate-fade-in">
        <div className="mb-4">
          <span className="inline-block text-5xl -mt-28 animate-bounce">
            ⚡
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent -mt-4 mb-4 leading-tight">
          LinkShrink
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Transform your long URLs into powerful, trackable short links with our
          <span className="text-cyan-300 font-semibold"> lightning-fast </span>
          URL shortener
        </p>
      </div>

      <div className="relative z-10 -mt-4 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-lg animate-slide-up glow-blue">
        <UrlForm />
      </div>
    </div>
  );
};

export default HomePage;
