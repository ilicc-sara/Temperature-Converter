"use strict";
import "./style.css";

const inputCels = document.querySelector(".celsius");
const inputFar = document.querySelector(".farenheit");
const inputKel = document.querySelector(".kelvin");

const form = document.querySelector(".container");

let cels;
let far;
let kel;

let activeTemp;

inputCels.addEventListener("input", function (e) {
  cels = Number(e.target.value);
  activeTemp = "celsius";

  // console.log(cels);
});

inputFar.addEventListener("input", function (e) {
  far = Number(e.target.value);
  activeTemp = "farenheit";
});

inputKel.addEventListener("input", function (e) {
  kel = Number(e.target.value);
  // umesto kelvin stavim data atribute na input u html i onda procitati taj atribut da bi se dodelila vrednost active tempu
  activeTemp = "kelvin";
});

const convertTemp = function (activeTemp) {
  console.log(activeTemp);

  const convertCels = function (cels) {
    // console.log((cels * (9 / 5) + 32).toFixed(2));
    // console.log((cels + 273.15).toFixed(2));
    // console.log(cels);
    inputFar.value = Math.round(cels * (9 / 5) + 32);
    inputKel.value = Math.round((cels + 273.15).toFixed(2));
  };

  const convertFar = function (far) {
    console.log(far);
    inputCels.value = Math.round(((far - 32) * 5) / 9);
    inputKel.value = Math.round(((far - 32) * 5) / 9 + 273.15);

    // inputCels.value = 20;
    // inputKel.value = 20;
  };

  const convertKel = function (kel) {
    console.log(kel);
    inputCels.value = Math.round(kel - 273.15);
    inputFar.value = Math.round((kel - 273.15) * 1.8 + 32);

    // inputCels.value = 30;
    // inputFar.value = 30;
  };

  if (activeTemp === "celsius") {
    convertCels(cels);
  }
  if (activeTemp === "farenheit") {
    convertFar(far);
  }
  if (activeTemp === "kelvin") {
    convertKel(kel);
  }
};

//

form.addEventListener("submit", function (e) {
  e.preventDefault();
  convertTemp(activeTemp);
});

/*
  if (e.target.className === `celsius`) {
    inputFar.value = (cels * (9 / 5) + 32).toFixed(2);
    inputKel.value = (cels + 273.15).toFixed(2);
    //console.log(e.target.className);
  }

  if (e.target.className === `farenheit`) {
    inputCels.value = (((far - 32) * 5) / 9).toFixed(2);
    inputKel.value = (((far - 32) * 5) / 9 + 273.15).toFixed(2);
  }

  if (e.target.className === `kelvin`) {
    inputCels.value = (kel - 273.15).toFixed(2);
    inputFar.value = ((kel - 273.15) * 1.8 + 32).toFixed(2);
  }
    */
