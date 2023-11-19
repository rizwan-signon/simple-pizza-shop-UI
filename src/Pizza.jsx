import React from "react";

const pizzaData = [
  {
    name: "Vegetarian Pizza",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "1600 Rs",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Spicy Chicken Pizza",
    ingredients: "chicken,Tomato and mozarella",
    price: "1800 Rs",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Mashroom pizza",
    ingredients: "mashroom,Tomato, mozarella, spinach, and ricotta cheese",
    price: "2000 Rs",
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "KarachiKrust Pizzas",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "900 Rs",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Margherita Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "1600 Rs",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Chese pizza",
    ingredients: "chese,Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "1600 Rs",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
export default function Pizza() {
  return (
    <div className={`grid grid-cols-3 p-4 m-4 `}>
      {pizzaData.map((pizza) => {
        return (
          <div className={` m-4 ${pizza.soldOut ? " text-red-500" : ""} `}>
            <img
              className="h-32 w-32 rounded-full scale-75 hover:scale-100 ease-in duration-100"
              src={pizza.photoName}
              alt="not found"
            />
            <div>
              <h1 className=" font-bold">{pizza.name}</h1>
              <h2 className=" font-serif text-xs">{pizza.ingredients}</h2>
              <h2 className={`${pizza.soldOut ? " line-through" : ""}`}>
                {pizza.soldOut ? "SOLD OUT" : pizza.price}
              </h2>
              <h2>{pizza.soldOut}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
