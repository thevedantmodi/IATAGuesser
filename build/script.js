import { EASY_CODES } from "./codes.js";

let guess = ""
let chosen = ""
let used = []
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
        enter.click()
    }
})

enter.addEventListener("click", () => {
    guess = input.value
    input.value = ""
    checkGuess(guess)
})

function printCode () {


    generateCode()
    used.push(chosen)


    IATA_code.innerHTML = chosen
}

function generateCode() {
    chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]

    if (!used.includes(chosen)) {
        return
    } else {
        console.log("Generating again!")
        generateCode()
    }
}

function checkGuess (guess) {
    if (guess === toCity(chosen)) {
        toastr.success("Correct!")
        printCode()
    } else {
        toastr.error("Wrong! That's a strike!")
    }
}

function toCity (code) {
    const port = airports.get(code)
    return port.city
}