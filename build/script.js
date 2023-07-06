import { EASY_CODES } from "./codes.js";
// function main ();
// function printCode ();
// function checkGuess ();
let guess = ""
let chosen = ""
const IATA_code = document.getElementById("IATA-code");
const input = document.getElementById("input-field");
const enter = document.getElementById("enter-btn");
const output = document.getElementById("output");
let airports_list = []
let airports = new Map()

fetch('IATAairports.json')
  .then(response => response.json())
  .then(import_data => {
    console.log(import_data);
    let count = 0
    for (let port of import_data) {
        if (count == 43) {
            console.log(typeof port)
            console.log(port.city)
        }
        count++
        airports.set(port.iata, port)
        // airports_list.push(port)
    }
    
    // for (let element in airports_list) {
    //     airports.set(element.iata, element)
    // }

    console.log(`Count is ${count}`)
    
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
    console.log(`Guess is ${guess} and code is ${chosen}`)
    if (toIATA(guess) == chosen) {
        console.log("Correct")
    }

}

function toIATA (city) {
    console.log("running toIATA")
    console.log(airports.has("BOS")) //should be true
}