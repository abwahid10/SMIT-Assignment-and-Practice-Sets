// no # 01
{
       let num = 3.45;

    console.log("Number:", num);
    console.log("Round off value:", Math.round(num));
    console.log("Floor value:", Math.floor(num));
    console.log("Ceil value:", Math.ceil(num));
}

// no # 02
{
        let num = -2.67;

    console.log("Number:", num);
    console.log("Round off value:", Math.round(num));
    console.log("Floor value:", Math.floor(num));
    console.log("Ceil value:", Math.ceil(num));

}

// no # 03
let num = -4;  

let absValue = Math.abs(num);

console.log("The absolute value of " + num + " is " + absValue);

// no # 04
{
let dice = Math.floor(Math.random() * 6) + 1;

console.log("The dice shows: " + dice);
}

// no # 05
{
let toss = Math.floor(Math.random() * 2);

if (toss === 0) {
    console.log("The coin shows: Heads");
} else {
    console.log("The coin shows: Tails");
}
}

// no # 06
{
let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random number between 1 and 100: " + randomNumber);
}

// no # 07
{
let userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

let weight = parseFloat(userInput);

console.log("Your weight is: " + weight + " kilograms");
}

// no # 08
{
let secretNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the secret number " + secretNumber + "!");
} else {
    console.log("Sorry! The secret number was " + secretNumber + ". Try again!");
}
}