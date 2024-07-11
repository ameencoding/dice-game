"use strict";

const btn = document.querySelector("button");
const img = document.querySelector("img");

let num;

btn.addEventListener("click", function () {
  // generate random number
  num = Math.floor(Math.random() * 6) + 1;

  // delay dice for 3s
  setInterval(function () {
    img.src = `./img/dice-${num}.png`;
  }, 300);
});
