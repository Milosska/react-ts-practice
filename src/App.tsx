import React, { useState, useEffect } from "react";
import axios from "axios";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
// import UserList from "./components/UserList";
import EventsExample from "./components/EventsExample";
import { IUser, ITodo } from "./types/types";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
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

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onClick={(num) => {
          console.log("Click! -", num);
        }}
      >
        <p>Add some text!</p>
        <button>Click me!</button>
      </Card>

      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />

      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
      {/* <UserList users={users} /> */}

      <EventsExample />
    </div>
  );
}

export default App;
