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
        <h1 className=" bg-green-700 inline text-2xl p-2 rounded-xl">
          {decision}
        </h1>
      </h1>
    </div>
  );
}
