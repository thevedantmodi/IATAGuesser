import { EASY_CODES } from "./codes.js";

let guess = ""
const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input-field");
const enter = document.getElementById("enter-btn");
const output = document.getElementById("output");

function printCode () {
    let chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]
    IATA_code.innerHTML = chosen
}

printCode()

input.addEventListener("keypress", () => {
    if (event.code == "Enter") {
        alert("Enter key pressed")
        enter.click()
    }
})

enter.addEventListener("click", () => {
    guess = input.value
    input.value = ""
    output.innerHTML = guess
})