/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //constates palos:

  const palos = ["♠", "♣", "♥", "♦"];

  //variables de numeros:
  const numberCar = ["A", "J", "Q", "K", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //function randomSelection(params):
  function randomSelection(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
  }
  //variables aleatorias:
  /*if (palosCardRand === "♥" || palosCardRand === "♦") {
    return palosCardRand + numberCardRand, "color: red;";
  } else {
    console.log(palosCardRand + numberCardRand);
  }*/

  let palosCardRand = randomSelection(palos);
  let color = palosCardRand === "♥" || palosCardRand === "♦" ? "red" : "black";
  let numberCardRand = randomSelection(numberCar);
  console.log(palosCardRand, numberCardRand);

  let renderCard = document.querySelector("#renderCard");

  let html2 = `<div class="card container text-center">
      <div class="row">
        <div class="symbolUp col-4 align-self-start">
          <h2 style= "color: ${color}">${palosCardRand}</h2>
        </div>
        <div class="number col-4 mx-auto align-self-center">
          <h1 style= "width: 100%">${numberCardRand}</h1>
        </div>
        <div class="symbolDown col-4 align-content-end">
          <h2 style="color : ${color}" ; >${palosCardRand}</h2>
        </div>
      </div>
    `;
  renderCard.innerHTML = html2;

  function cambiarCarta() {
    location.reload();
  }
};
