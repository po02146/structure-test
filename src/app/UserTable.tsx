import { userContext } from "@/contexts/UserContextProvider";
import React, { useContext } from "react";

interface UserTableProps {
  style?: React.CSSProperties;
}

const UserTable = (props: UserTableProps) => {
  const users = useContext(userContext)?.usersHook.users;

  return (
    <div className="flex flex-col" style={props.style}>
      {users?.map((item) => (
        <span>{item.name}</span>
      ))}
    </div>
  );
};

export default UserTable;
