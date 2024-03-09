import React from "react";

const Todo = () => {
  return (
    <div className="px-[10%] mt-10">
      <form className="flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Add a task here ..."
          className="px-4 py-2 w-[400px] rounded-lg outline-none"
        />
        <button className="bg-gray-500 px-4 py-3 rounded-lg text-white">
          Add
        </button>
      </form>

      <ul></ul>
    </div>
  );
};

export default Todo;
