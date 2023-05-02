import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <ul style={{ marginTop: "20px", listStyle: "none" }}>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
};

export default UserList;
