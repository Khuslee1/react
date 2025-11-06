"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const dec = () => {
    setCount(count - 1);
  };
  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <button
          onClick={inc}
          className="flex justify-center items-center text-black"
        >
          +
        </button>
        <div className="flex">{count}</div>
        <button
          onClick={dec}
          className="flex justify-center items-center text-black"
        >
          -
        </button>
      </div>
    </div>
  );
};
