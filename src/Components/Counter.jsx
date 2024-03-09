import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  inputNumber,
} from "../features/counterSlice/counterSlice";

const Counter = () => {
  const [number, setNumber] = useState("");

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (number) {
      dispatch(inputNumber(number));
      setNumber("");
    }
  };

  return (
    <div className="text-white">
      <div className="text-6xl">{counter}</div>
      <div className="btns flex gap-3 mt-10">
        <button
          className="bg-green-600 px-4 py-2 rounded-md font-semibold"
          onClick={() => dispatch(increment())}
        >
          increment +
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded-md font-semibold"
          onClick={() => dispatch(decrement())}
        >
          decrement -
        </button>
        <button
          className="bg-gray-500 px-4 py-2 rounded-md font-semibold"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          increment by 3
        </button>
        <button
          className="bg-gray-600 px-4 py-2 rounded-md font-semibold"
          onClick={() => dispatch(decrementByAmount(3))}
        >
          decrement by 3
        </button>
        <button
          className="bg-blue-600 px-4 py-2 rounded-md font-semibold"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          increment by 5
        </button>
        <button
          className="bg-blue-800 px-4 py-2 rounded-md font-semibold"
          onClick={() => dispatch(decrementByAmount(5))}
        >
          decrement by 5
        </button>
      </div>
      <form className="mt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          className="px-2 py-1 rounded-md text-[12px] w-[300px] text-black outline-none"
          placeholder="Enter a number ... "
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="bg-purple-700 px-2 py-1 rounded-md ml-2 text-[12px] cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Counter;
