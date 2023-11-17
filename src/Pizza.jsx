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
    <div className="grid grid-cols-3 p-4 m-4 ">
      {pizzaData.map((pizza) => {
        return (
          <div className=" m-4">
            <img
              className="h-32 w-32 rounded-md"
              src={pizza.photoName}
              alt="not found"
            />
            <div>
              <h1 className=" font-bold">{pizza.name}</h1>
              <h2 className=" font-serif text-xs">{pizza.ingredients}</h2>
              <h2>{pizza.price}</h2>
              <h2>{pizza.soldOut}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
