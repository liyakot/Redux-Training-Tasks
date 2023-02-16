import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const buttonsNavigate = [
    {
      title: "State Change",
      link: "/",
      active: false,
    },
    { title: "Todo App", link: "/todos", active: false },
    { title: "Async Thunk", link: "/posts", active: false },
  ];

  return (
    <div className="navigates">
      {buttonsNavigate.map((item, key) => (
        <Link to={item.link} key={key}>
          <button
            onClick={() => item.active === true}
            className="button button_navigate"
          >
            {item.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
