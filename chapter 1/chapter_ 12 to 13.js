// no # 01
let input = prompt("Enter a character:");

let code = input.charCodeAt(0);

if (code >= 48 && code <= 57) {
  console.log("The input is a Number.");
}
else if (code >= 65 && code <= 90) {
  console.log("The input is an Uppercase Letter.");
}
else if (code >= 97 && code <= 122) {
  console.log("The input is a Lowercase Letter.");
}
else {
  console.log("Invalid input or special character.");
}

// no # 02 
let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
  console.log(num1 + " is larger.");
} 
else if (num2 > num1) {
  console.log(num2 + " is larger.");
} 
else {
  console.log("Both numbers are equal.");
}

// no # 03
let num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
  console.log("The number is positive.");
} 
else if (num < 0) {
  console.log("The number is negative.");
} 
else {
  console.log("The number is zero.");
}

// no # 04
let char = prompt("Enter a single character:").toLowerCase();

let isVowel =
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u";

console.log(isVowel);

// no # 05
let correctPassword = "12345";

let userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
  console.log("Please enter your password");
}

else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password");
} 
else {
  console.log("Incorrect password");
}
// no # 06
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

// no # 07
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

// Convert and check conditions
if (time >= 0 && time < 1200) {
  console.log("Good Morning");
}
else if (time >= 1200 && time < 1700) {
  console.log("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
  console.log("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
  console.log("Good Night");
}
else {
  console.log("Invalid time format");
}