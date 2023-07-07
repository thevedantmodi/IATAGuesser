import { EASY_CODES } from "./codes.js";

let guess = ""
let chosen = ""
let used = []
let score = 0
let strikes = 0
let score_strikes_str = ""
const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input-field");
const enter = document.getElementById("enter-btn");
const score_strikes = document.getElementById("score-strikes");
const results = document.getElementById("results");
const popup = document.querySelector(".popup")

let airports = new Map()

fetch('IATAairports.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (let port of data) {
        airports.set(port.iata, port)
    }
    turn()
  })
  .catch(error => {
    console.error('Error:', error);
  });

function turn () {
    gameOver()
    trackScore()
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

function trackScore () {
    score_strikes_str = `Score: ${score}    Strikes: ${strikes}`
    score_strikes.innerHTML = score_strikes_str
}

function gameOver() {
    if (strikes >= 3) {
        results.innerHTML = `Wow! I just played IATAGuesser and got a score of ${score}`
        popup.classList.toggle("show");
    }
}

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
        console.log(`The repeat was ${chosen}`)
        generateCode()
    }
}

function checkGuess (guess) {
    if (guess === toCity(chosen)) {
        correct()
    } else {
        strike()
    }
    turn()
}

function correct () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1500",
        "timeOut": "1700",
        "extendedTimeOut": "1500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    toastr.success("Correct!")
    score++
    console.log(score)
}

function strike () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1500",
        "timeOut": "1700",
        "extendedTimeOut": "1500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    toastr.error(`Wrong! ${chosen} is the code for ${toCity(chosen)}`)
    score++
    strikes++
}

function toCity (code) {
    const port = airports.get(code)
    return port.city
}