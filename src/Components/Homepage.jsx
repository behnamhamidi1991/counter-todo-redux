import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col text-white justify-center">
      <h2 className="text-4xl font-extralight mb-5">Homepage</h2>
      <h3 className="font-light mt-1">Click on one of these projects</h3>
      <ul>
        <li className="list-disc ml-10 mt-2">
          <Link to="/todo">Todo App</Link>
        </li>
        <li className="list-disc ml-10 mt-2">
          <Link to="/counter">Counter App</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
