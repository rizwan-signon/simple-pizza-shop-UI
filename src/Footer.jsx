import React from "react";
export default function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const closed = 22;
  const isOpen = hour >= open && hour <= closed;

  const decision = isOpen ? "open" : "closed";
  return (
    <div>
      <h1 className="text-center m-4">
        we,re currently open {new Date().toLocaleString()}{" "}
        <span className=" bg-yellow-700 inline text-bold p-1 rounded-sm">
          {decision}
        </span>
      </h1>
      <div class="flex items-center justify-center">
        <button class=" bg-yellow-300 text-black font-bold py-2 px-4 rounded-xl">
          order now
        </button>
      </div>
    </div>
  );
}
