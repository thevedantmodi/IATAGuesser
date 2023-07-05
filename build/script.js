import { CODES } from "./codes.js";


function printCode () {

    let board = document.getElementById("game-board");

    let codeBody = document.createElement("p");
    let code = CODES[Math.floor(Math.random() * CODES.length)]
    codeBody.innerHTML = `${code}`;
    
    board.appendChild(code);
}

printCode()