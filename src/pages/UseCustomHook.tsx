import React from "react";
import { useUserStatus } from "../components/UseCustomHooks.tsx/UseUserStatus";

const UseCustomHook: React.FC = () => {
  const { users, fetchUser, loading } = useUserStatus();

  const updateData = () => {
    fetchUser();
  };

  return (
    <>
      <button className="text-blue-500 hover:bg-amber-300 border-2 p-2 rounded-2xl" onClick={updateData}>
        Refresh Data {loading ? "Loading..." : "Done"}
      </button>
      <h1 className="text-2xl font-bold">UseCustomHook</h1>
      <p>Used UseCustomHook to fetch users from the API</p>

      <ul className="list-disc list-inside">
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseCustomHook;
