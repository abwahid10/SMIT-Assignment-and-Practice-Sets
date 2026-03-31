// no # 01
let firstName = "Abdul";
let lastName = "Wahid";

let fullName = firstName + " " + lastName;

console.log("Hello, " + fullName + "! Welcome!");

// no # 02
let mobileModel = "Google pixel 7";

let lengthOfInput = mobileModel.length;

console.log("My mobile model is: " + mobileModel + "Length of input: " + lengthOfInput);

// no # 03
{let word = "Pakistani";

let index = word.indexOf("n");

console.log("String: " + word + 
          "Index of 'n': " + index);
        }

// no # 04
{let word = "Hello World";

let lastIndex = word.lastIndexOf("l");

console.log("String: " + word + 
      "Last index of 'l': " + lastIndex);
}

// no # 05
{
    let word = "Pakistani";

let character = word.charAt(3);

console.log("String: " + word + 
      "Character at index 3: " + character);
}

    // no # 06
{
    let firstName = "Abdul";
let lastName = "Wahid";

let fullName = firstName.concat(" ", lastName);

console.log("Hello, " + fullName + "! Welcome!");

}
// no # 07
{let word = "Hyderabad";

let newWord = word.replace("Hyder", "Islam");

console.log("Original word: " + word + "Updated word: " + newWord);
}
// no # 08
let message = "Ali and Sami are best friends. They play cricket and football together.";

let updatedMessage = message.replaceAll("and", "&");

console.log("Original message: " + message + "Updated message: " + updatedMessage);
    
  // no # 09
let str = "472";

let num = Number(str);

console.log("Value: " + str + " | Type: " + typeof str);
console.log("Value: " + num + " | Type: " + typeof num);

 // no # 10
 {
let userInput = "peanuts";

let upperCaseInput = userInput.toUpperCase();

console.log("Original input: " + userInput);
console.log("In capital letters: " + upperCaseInput);
 }
    //   no# 11
{
let userInput = "javascript";

let titleCaseInput = userInput
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("Original input: " + userInput);
console.log("In title case: " + titleCaseInput);
}
 // no # 12
{var num1 = 35.36;

var strNum = num1.toString();

var result = strNum.replace(".", "");

console.log("Original number: " + num1  + "After conversion and removing dot: " + result);
}

// no # 13
{
let username = prompt("Enter your username:");

function isValidUsername(name) {
    for (let i = 0; i < name.length; i++) {
        let code = name.charCodeAt(i);
        if (code === 33 || code === 44 || code === 46 || code === 64) {
            return false; 
        }
    }
    return true; 
}

while (!isValidUsername(username)) {
    username = prompt("Invalid username! Please enter a valid username without [@ , . !]:");
}

console.log("Your username is: " + username);
}

// no # 14
{
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let searchItem = prompt("Enter the item you want to search:");

let lowerCaseSearch = searchItem.toLowerCase();

let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === lowerCaseSearch) {
        found = true;
        break;
    }
}
if (found) {
    console.log(searchItem + " is available in the bakery.");
} else {
    console.log(searchItem + " is not available in the bakery.");
}
}
 // no # 15
{
function isValidPassword(password) {

    if (password.length < 6) {
        return false;
    }

    let firstCharCode = password.charCodeAt(0);
    if (firstCharCode >= 48 && firstCharCode <= 57) { 
        return false;
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let code = password.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) { 
            hasLetter = true;
        } else if (code >= 48 && code <= 57) { 
            hasNumber = true;
        }
    }
    return hasLetter && hasNumber;
}


let password = prompt("Enter your password (at least 6 characters, must contain letters and numbers, cannot start with a number):");

while (!isValidPassword(password)) {
    password = prompt("Invalid password! Please enter a valid password:");
}

console.log("Password accepted!");}


 // no # 16
{
var university = "University of Karachi";

var arr = university.split(""); 

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
}

// no # 17
{
let userInput = "Pakistan";

let lastChar = userInput.charAt(userInput.length - 1);

console.log("Pakistan")
console.log("The last character of your input is: " + lastChar);
}


// no # 18
{
let str = "The quick brown fox jumps over the lazy dog";

let lowerStr = str.toLowerCase();

let words = lowerStr.split(" ");

let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
console.log(str)
console.log('The word "the" occurs ' + count + ' times in the string.');
}