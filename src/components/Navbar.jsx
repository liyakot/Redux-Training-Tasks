import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>
        <button className="button_navigate">State Change</button>
      </Link>

      <Link to={"/todos"}>
        <button className="button_navigate">Todo App</button>
      </Link>

      <Link to={"/posts"}>
        <button className="button_navigate">Async Thunk</button>
      </Link>
    </div>
  );
};

export default Navbar;
