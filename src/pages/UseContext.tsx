import React from "react";
import { useTheme } from "../components/UseContext/ThemeContext";
import { useAuth, useAuthDispatch } from "../components/UseContext/AuthContext";

const UseContext = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuth();
  const dispatch = useAuthDispatch();
  return (
    <div className="min-h-screen">
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold">Current Theme: {theme}</h3>
        <button
          className="bg-blue-500 p-2 rounded-md border-3 border-black"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center mt-20">
        <h3>User: {user}</h3>
        <h3>Is Authenticated: {isAuthenticated ? "Yes" : "No"}</h3>
        <div className="flex gap-4 mt-5">
          <button
            className="border-2 mx-2 text-green-400 p-2 rounded-2xl"
            onClick={() => dispatch({ type: "LOGIN", payload: "John Doe" })}
          >
            Login
          </button>
          <button
            className="border-2 mx-2 text-red-400 p-2 rounded-2xl"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
