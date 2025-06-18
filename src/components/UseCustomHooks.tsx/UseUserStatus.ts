import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStatus = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    setUsers([]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { users, fetchUser, loading };
};
