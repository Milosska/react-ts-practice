import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import OtherPage from "./pages/OtherPage";
import UserPage from "./pages/UserPage";
import TodosPage from "./pages/TodosPage";
import UserItemPage from "./pages/UserItemPage";

function App() {
  return (
    <BrowserRouter>
      <ul style={{ display: "flex", gap: 20, listStyle: "none" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<OtherPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
