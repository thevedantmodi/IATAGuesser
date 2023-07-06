import { EASY_CODES } from "./codes.js";
// function main ();
// function printCode ();
// function checkGuess ();
let guess = ""
let chosen = ""
const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input-field");
const enter = document.getElementById("enter-btn");
const output = document.getElementById("output");
let airports = []

fetch('IATAairports.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (let port of data) {
        airports.push(port)
    }
    main()
  })
  .catch(error => {
    console.error('Error:', error);
  });

function main () {
    printCode()


}

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

function printCode () {
    chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]
    IATA_code.innerHTML = chosen
}

function checkGuess (guess) {
    console.log(`Guess is ${guess} and code is ${chosen}`)
    if (guess == chosen) {
        console.log("Correct")
    }


    console.log(`Type of airports is ${typeof airports}`)
    console.log(airports[0])
}