import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { Link, useParams, useLocation } from "react-router-dom";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<IUser>(
          "https://jsonplaceholder.typicode.com/users/" + params.id
        );
        setUser(response.data);
      } catch (e) {
        alert(e);
      }
    };

    fetchUser();
  }, [params]);

  return (
    <div>
      <Link to={location.state.from}> Go back</Link>
      {user && (
        <>
          <h1>{user.name} user page</h1>
          <p>{user.email}</p>
          <p>
            {user.name} lives in {user.address?.city} at
            {user.address?.street} street
          </p>
        </>
      )}
    </div>
  );
};

export default UserItemPage;
