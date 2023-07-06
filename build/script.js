import { CODES } from "./codes.js";

const IATA_code = document.getElementById("IATA-code");


function printCode () {
    let chosen = CODES[Math.floor(Math.random() * CODES.length)]
    IATA_code.innerHTML = chosen
}

printCode()