import React from "react";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/LoginForm";
import AuthPage from "./pages/AuthPage";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/NavBar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
