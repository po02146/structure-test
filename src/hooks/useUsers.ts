import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState<
    {
      id: number;
      name: string;
      username: string;
      email: string;
    }[]
  >([]);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function createUser(id: number, name: string) {

  }

  return {
    users,
    fetch: fetchUsers,
    create: createUser,
  }
};

export default useUsers;
