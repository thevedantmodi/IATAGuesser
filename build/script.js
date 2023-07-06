import { EASY_CODES } from "./codes.js";
import data from './IATAairports.json'

console.log(data);

// const airports = require('../node_modules/airport-codes')

// console.log(airports.findWhere({ iata: 'LAX' }).get('name'));


let guess = ""
let chosen = ""
const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input-field");
const enter = document.getElementById("enter-btn");
const output = document.getElementById("output");

function printCode () {
    chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]
    IATA_code.innerHTML = chosen
}

function checkGuess (guess) {
    console.log(`Guess is ${guess} and code is ${chosen}`)
    if (guess == chosen) {
        console.log("Correct")
    }
}

printCode()

input.addEventListener("keypress", () => {
    if (event.code == "Enter") {
        console.log("enter clicked")
        enter.click()
    }
})

enter.addEventListener("click", () => {
    guess = input.value
    input.value = ""
    checkGuess(guess)
})

