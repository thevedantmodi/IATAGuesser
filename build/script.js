import { EASY_CODES } from "./codes.js";

const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input");
const enter = document.getElementById("enter-btn");

function printCode () {
    let chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]
    IATA_code.innerHTML = chosen
}


printCode()