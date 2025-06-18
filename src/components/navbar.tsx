import React from "react";
import { Link } from "react-router-dom";

const navbar: React.FC = () => {
  return (
    <ul className="flex gap-4 p-4">
      <li className="text-2xl">
        <Link to="/">Home</Link>
      </li>
      <li className="text-2xl">
        <Link to="/about">About</Link>
      </li>
      <li className="text-2xl">
        <Link to="/reducer">useReducer</Link>
      </li>
      <li className="text-2xl">
        <Link to="/usecallback">useCallBack</Link>
      </li>
    </ul>
  );
};

export default navbar;
