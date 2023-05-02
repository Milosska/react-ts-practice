import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li style={{ padding: "15px", outline: "1px solid grey" }}>
      {user.id}. {user.name} lives in {user.address?.city} at
      {user.address?.street} street
    </li>
  );
};

export default UserItem;
