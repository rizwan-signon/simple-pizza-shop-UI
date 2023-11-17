import React from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function Pizza() {
  return (
    <div className=" flex">
      {pizzaData.map((ele) => {
        return (
          <div className=" bg-green-100 m-3 p-4 rounded-2xl text-black">
            <h1 className=" text-xl"> Name:{ele.name}</h1>

            <img className="rounded-2xl" src={ele.photoName} alt="nothing" />
            <h2>ingredients:{ele.ingredients}</h2>
            <h3>{ele.soldOut}</h3>
            <h2> price:{ele.price}</h2>
          </div>
        );
      })}
    </div>
  );
}
