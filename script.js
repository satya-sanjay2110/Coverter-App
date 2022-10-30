
const inputEl = document.getElementById("input-el");
const btn = document.getElementById("btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

btn.addEventListener("click", function () {
    let num = inputEl.value;
    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
    */
    // length
    let feet = num * 3.281;
    let meters = num / 3.281;
    lengthEl.textContent = `${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meters.toFixed(3)} meters`;

    // volume
    let gallons = num * 0.264;
    let liters = num / 0.264;
    volumeEl.textContent = `${num} liters = ${gallons.toFixed(3)} gallons | ${num} gallons = ${liters.toFixed(3)} liters`;

    // mass
    let pounds = num * 2.204;
    let kilograms = num / 2.204;
    massEl.textContent = `${num} kilogram = ${pounds.toFixed(3)} pounds | ${num} pound = ${kilograms.toFixed(3)} kilograms`;
})