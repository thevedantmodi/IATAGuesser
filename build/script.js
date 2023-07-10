import { EASY_CODES } from "./codes.js";

let guess = ""
let chosen = ""
let used = []
let score = 0
let strikes = 0
let score_strikes_str = ""
let results = ""
const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input-field");
const enter = document.getElementById("enter-btn");
const score_strikes = document.getElementById("score-strikes");
const share = document.getElementById("share-msg");
const copy = document.getElementById("copy-button");

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

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(results);
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
    toastr.success("Copied to clipboard!")
})

function trackScore () {
    score_strikes_str = `Score: ${score}    Strikes: ${strikes}`
    score_strikes.innerHTML = score_strikes_str
}

function gameOver() {
    if (strikes >= 3) {
        results = `Wow! I just played IATAGuesser and got a score of ${score}`

        share.hidden = false
        copy.hidden = false
        enter.hidden = true

        share.innerHTML = results
    }
}

function printCode () {
    generateCode()
    used.push(chosen)
    IATA_code.innerHTML = chosen
}

function generateCode() {
    chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]
    while (used.includes(chosen)) {
        chosen = EASY_CODES[Math.floor(Math.random() * EASY_CODES.length)]
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