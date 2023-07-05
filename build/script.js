import { CODES } from "./codes.js";


function printCode () {

    let board = document.getElementById("game-board");

    let code = document.createElement("p");
    code.innerHTML = 'Hi!';
    
    board.appendChild(code);

    console.log(CODES[Math.floor(Math.random() * CODES.length)])
}

printCode()