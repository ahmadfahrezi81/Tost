import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => (count += 1));
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => (count -= 1));
    }
  };
  return (
    <div className="flex font-sans items-center justify-between">
      <div>
        <button
          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
          type="button"
          onClick={decrease}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <span className="rounded-lg py-1 px-7 mx-1 w-20 text-white">{counter}</span>

        <button
          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
          type="button"
          onClick={increase}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="text-sm font-medium align-middle">
        Reserving for <span>{counter}</span> diners
      </div>
    </div>
  );
};

export default Counter;
