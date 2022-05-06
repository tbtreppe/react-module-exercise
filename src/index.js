import React from "react";
import ReactDOM from "react-dom/client";
import { choice, remove } from "./helpers";
import { fruits } from "./foods";

let fruit = choice(fruits);
console.log(`I would like one ${fruit} please.`);
console.log(`Here you go: ${fruit}`);
console.log("Delicious! May I have another?");

let remaining = remove(fruit, fruits);

console.log(`I am sorry, we are all out. We have ${remaining.length} left.`);

const root = ReactDOM.createRoot(document.getElementById("root"));
