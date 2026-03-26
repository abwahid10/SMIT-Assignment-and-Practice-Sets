// alert("Welcome to our website! Glad you're here.");



// alert("Assalam-o-Alaikum,! Kaise hain aap?");
 


// no # 03
let favoriteSnack = "chocolate chip";
let currentAge = 18;
let maxAge = 90;
let amountPerDay = 3;

let yearsRemaining = maxAge - currentAge;
let totalNeeded = yearsRemaining * 365 * amountPerDay;

console.log("You will need " + totalNeeded + " " + 
            favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
const person = { name: "abdul" };
person.name = "wahid";
console.log(person);

// no # 04

var colors = ["Red", "Green", "Blue"];
console.log("Initial Colors: ", colors);

var colorStart = "purple";
colors.unshift(colorStart);
console.log("After adding to start: ", colors);

var colorEnd = "yellow";
colors.push(colorEnd);
console.log("After adding to end: ", colors);

colors.unshift("brown", "Pink");
console.log("After adding two more to start: ", colors);

colors.shift();
console.log("After deleting first color: ", colors);

colors.pop();
console.log("After deleting last color: ", colors);
