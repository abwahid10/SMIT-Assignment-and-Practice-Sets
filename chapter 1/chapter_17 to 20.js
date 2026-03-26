// no # 01
let arr = [];

arr[0] = [];
arr[1] = [];

// no # 02
let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

// no # 03
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// no # 04
let number = parseInt(prompt("Enter table number:"));
let length = parseInt(prompt("Enter table length:"));

for (let i = 1; i <= length; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}

// no # 05
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// no # 06
let counting = "";
for (let i = 1; i <= 15; i++) {
  counting += i + ", ";
}
console.log("Counting: " + counting);

let reverse = "";
for (let i = 10; i >= 1; i--) {
  reverse += i + ", ";
}
console.log("Reverse counting: " + reverse);

let even = "";
for (let i = 0; i <= 20; i += 2) {
  even += i + ", ";
}
console.log("Even: " + even);

let odd = "";
for (let i = 1; i < 20; i += 2) {
  odd += i + ", ";
}
console.log("Odd: " + odd);

let series = "";
for (let i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}
console.log("Series: " + series);

// no #  07
let D = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Welcome to our bakery! What do you want to order?");

userInput = userInput.toLowerCase();

let found = false;

for (let i = 0; i < A.length; i++) {
  if (D[i] === userInput) {
    found = true;
    console.log(userInput + " is available at index " + i + " in our bakery.");
    break;
  }
}

if (!found) {
  console.log("We are sorry. " + userInput + " is not available in our bakery.");
}

// no # 09
let C = [24, 53, 78, 91, 12];

let largest = C[0];

for (let i = 1; i < C.length; i++) {
  if (C[i] > largest) {
    largest = C[i];
  }
}

console.log("The largest number is: " + largest);

// no # 10
let B = [24, 53, 78, 91, 12];

let smallest = B[0];

for (let i = 1; i < B.length; i++) {
  if (B[i] < smallest) {
    smallest = B[i];
  }
}

console.log("The smallest number is: " + smallest);

// no # 11
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}