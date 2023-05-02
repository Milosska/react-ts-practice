import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import List from "../components/List";
import UserItem from "../components/UserItem";
import { Link, useLocation } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <Link to={`/users/${user.id}`} state={{ from: location }}>
          <UserItem key={user.id} user={user} />
        </Link>
      )}
    />
  );
};

export default UserPage;
