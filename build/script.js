import { CODES } from "./codes.js";

function printCode () {
    console.log(CODES[Math.floor(Math.random() * CODES.length)])
}
