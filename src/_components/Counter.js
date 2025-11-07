"use client";
import { useState } from "react";
import { Butt } from "@/_components/Butt";

export const Counter = () => {
  const [input, setInput] = useState([]);
  const [num, setNum] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      {/* <input
        className="h-10 w-40 border border-black p-2"
        placeholder="input"
        onChange={(e) => setInput(e.target.value)}
      /> */}

      <input
        className="h-10 w-40 border border-black p-2"
        placeholder="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button
        onClick={() => {
          setInput([...input, num]);
          setNum("");
        }}
        className="border border-black rounded-xl text-black h-10 w-40 hover:hover:bg-green-200"
      >
        add
      </button>
      {input.map((ele) => {
        return <div key={Math.random()}>{ele}</div>;
      })}
    </div>
  );
};
