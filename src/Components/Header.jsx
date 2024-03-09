import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white flex flex-col items-center">
      <h1 className="text-2xl">React Redux Todo App</h1>
      <ul className="flex gap-4 mt-4  ">
        <Link to="/" className="hover:text-orange-400">
          Homepage
        </Link>
        <Link to="/todo" className="hover:text-orange-400">
          TodoApp
        </Link>
        <Link to="/counter" className="hover:text-orange-400">
          Counter
        </Link>
        <Link to="/about" className="hover:text-orange-400">
          About
        </Link>
      </ul>
    </header>
  );
};

export default Header;
