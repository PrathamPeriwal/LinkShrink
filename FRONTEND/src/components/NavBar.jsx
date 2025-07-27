import React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice";
import { logoutUser } from "../api/user.api";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Debug: Log the user data
  console.log("Navbar - isAuthenticated:", isAuthenticated);
  console.log("Navbar - user:", user);

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: "/" });
    } catch (error) {
      console.error("Logout failed:", error);
      dispatch(logout());
      navigate({ to: "/" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg backdrop-blur-sm fixed w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-105"
            >
              ⚡ LinkShrink
            </Link>
          </div>

          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {(user?.user?.name || user?.name)
                          ?.charAt(0)
                          .toUpperCase() || "U"}
                      </span>
                    </div>
                    <span className="text-white font-medium">
                      {user?.user?.name || user?.name || "User"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
