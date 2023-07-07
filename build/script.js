import { EASY_CODES } from "./codes.js";

let guess = ""
let chosen = ""
const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input-field");
const enter = document.getElementById("enter-btn");
const output = document.getElementById("output");

let airports = new Map()

fetch('IATAairports.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (let port of data) {
        airports.set(port.iata, port)
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
    if (guess === toCity(chosen)) {
        toastr.success("Correct!")
        console.log("Regenerating")
        printCode()
    } else {
        toastr.error("Wrong! That's a strike!")
    }
}

function toCity (code) {
    const port = airports.get(code)
    return port.city
}