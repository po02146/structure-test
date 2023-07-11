import React, { useContext } from "react";
import UserTable from "./UserTable";
import { userContext } from "@/contexts/UserContextProvider";

interface UserSectionProps {
  style?: React.CSSProperties;
}

const UserSection = (props: UserSectionProps) => {
  const context = useContext(userContext);

  return (
    <div className="flex">
      <UserTable />
      <button
        className="self-baseline ml-10"
        onClick={async () => {
          context?.usersHook.create(3, "test");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default UserSection;
