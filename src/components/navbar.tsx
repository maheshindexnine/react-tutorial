import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./UseContext/ThemeContext";
import { useAuth } from "./UseContext/AuthContext";

const navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex justify-between items-center mx-10">
      <div>
        <ul className="flex gap-4 p-4">
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/reducer">useReducer</Link>
          </li>
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/usecallback">useCallBack</Link>
          </li>
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/usememo">useMemo</Link>
          </li>
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/usecustomhook">useCustomHook</Link>
          </li>
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/images">Images</Link>
          </li>
          <li className="text-lg hover:scale-110 hover:animate-bounce">
            <Link to="/usecontext">useContext</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="text-lg tracking-widest flex gap-4">
          {theme === "dark" ? (
            <li className="text-lg hover:scale-110 hover:animate-bounce cursor-pointer bg-neutral-200 py-1 px-2 rounded-2xl text-black">
              Light
            </li>
          ) : (
            <li className="text-lg hover:scale-110 hover:animate-bounce cursor-pointer bg-neutral-800 py-1 px-2 rounded-2xl text-white">
              Dark
            </li>
          )}
          <li className="text-lg hover:scale-110 hover:animate-bounce cursor-pointer">
            {isAuthenticated ? `Welcome, ${user}` : "Login"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
