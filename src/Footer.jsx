import { React, useEffect, useState } from "react";
export default function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const closed = 22;
  const isOpen = hour >= open && hour <= closed;
  const timing = isOpen ? "open" : "closed";
  return (
    <div>
      <h1 className="text-center m-4 font-bold">
        we,re currently {timing} {new Date().toLocaleString()}{" "}
        <span
          className={` bg-yellow-300 font-bold inline text-bold px-4 py-2 rounded-xl ${
            isOpen ? " bg-green-500" : " bg-red-700"
          }`}
        >
          {timing}
        </span>
      </h1>
      <div className="flex items-center justify-center">
        <button className=" bg-yellow-300 text-black font-bold py-2 px-4 rounded-xl scale-100 hover:scale-105 duration-200">
          order now
        </button>
      </div>
    </div>
  );
}
