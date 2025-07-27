import React from "react";
import UrlForm from "../components/UrlForm";
import UserUrl from "../components/UserUrl";

const DashboardPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden flex flex-col items-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-violet-600/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Additional depth orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-10 w-28 h-28 bg-gradient-to-r from-teal-400/12 to-emerald-600/12 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-10 w-36 h-36 bg-gradient-to-r from-orange-400/12 to-red-600/12 rounded-full blur-xl animate-pulse delay-1800"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl space-y-8">
        <div className="text-center animate-fade-in">
          <div className="mb-4">
            <span className="inline-block text-4xl mb-2">📊</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Dashboard
          </h1>
          <p className="text-white/70 text-lg">
            Manage and track your shortened URLs with powerful analytics
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl animate-slide-up glow-blue">
          <UrlForm />
        </div>

        <div className="animate-slide-up-delay">
          <UserUrl />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
