import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <li style={{ padding: "15px", outline: "1px solid blue" }}>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </li>
  );
};

export default TodoItem;
