import React from "react";
import { useState } from "react";

export const Person = () => {
  //   const [state, setState] = useState(initialValue);
  const [name, setname] = useState("Daniel");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setname("Atanda");
  };

  const decrement = () => {
    setCount(count >= 1 ? count - 1 : 0);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello my name is {name}
      <button onClick={ handleClick} type="button">
        Click o change name
      </button>
      <div className="flex gap-5">
        <button
          onClick={ decrement}
          className="bg-yellow-400 h-10 rounded-xl px-10 text-lg py-2"
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={ increment}
          className="bg-yellow-400 h-10 rounded-xl px-10 text-lg py-2"
        >
          +
        </button>
      </div>
    </div>
  );
};
