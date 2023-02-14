import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router";
import Posts from "./pages/PostsPage";
import Todos from "./pages/TodosPage";
import Users from "./pages/UsersPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
