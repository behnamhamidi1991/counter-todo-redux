import React from "react";

const Counter = () => {
  return (
    <div className="text-white">
      <div className="text-6xl">0</div>
      <div className="btns flex gap-3 mt-10">
        <button className="bg-green-600 px-4 py-2 rounded-md font-semibold">
          increment +
        </button>
        <button className="bg-red-600 px-4 py-2 rounded-md font-semibold">
          decrement -
        </button>
        <button className="bg-gray-500 px-4 py-2 rounded-md font-semibold">
          increment by 3
        </button>
        <button className="bg-gray-600 px-4 py-2 rounded-md font-semibold">
          decrement by 3
        </button>
        <button className="bg-blue-600 px-4 py-2 rounded-md font-semibold">
          increment by 5
        </button>
        <button className="bg-blue-800 px-4 py-2 rounded-md font-semibold">
          decrement by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
