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

fetch('IATAairports.json')
  .then(response => response.json())
  .then(IATAairports => {
    // Work with the retrieved JSON data
    console.log(IATAairports);
    main()
  })
  .catch(error => {
    console.error('Error:', error);
  });

function main () {

    printCode(chosen)
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

function printCode (chosen) {
    chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]
    IATA_code.innerHTML = chosen
}

function checkGuess (guess) {
    console.log(`Guess is ${guess} and code is ${chosen}`)
    if (guess == chosen) {
        console.log("Correct")
    }
}