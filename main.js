"use strict";
import "./style.css";

const inputCels = document.querySelector(".celsius");
const inputFar = document.querySelector(".farenheit");
const inputKel = document.querySelector(".kelvin");

const form = document.querySelector(".container");

let cels;
let far;
let kel;

inputCels.addEventListener("input", function (e) {
  cels = Number(e.target.value);
  console.log(cels);
});

inputFar.addEventListener("input", function (e) {
  far = Number(e.target.value);
  console.log(far);
});

inputKel.addEventListener("input", function (e) {
  kel = Number(e.target.value);
  console.log(kel);
});

form.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && e.target.className === `celsius`) {
    inputFar.value = (cels * (9 / 5) + 32).toFixed(2);
    inputKel.value = (cels + 273.15).toFixed(2);
    //console.log(e.target.className);
  }

  if (e.key === "Enter" && e.target.className === `farenheit`) {
    inputCels.value = (((far - 32) * 5) / 9).toFixed(2);
    inputKel.value = (((far - 32) * 5) / 9 + 273.15).toFixed(2);
  }

  if (e.key === "Enter" && e.target.className === `kelvin`) {
    inputCels.value = (kel - 273.15).toFixed(2);
    inputFar.value = ((kel - 273.15) * 1.8 + 32).toFixed(2);
  }
});
