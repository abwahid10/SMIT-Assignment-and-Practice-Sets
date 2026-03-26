
// no #01
let studentNames = [];

// no #02
var studentName = new Array();

// no #03
var students = ["Abdul wahid", "abdul waris", "abdul razzaq"];

// no #04
var score = [10, 20, 30, 40];

// no #05
var attendanceStatus = [true, false, true, true];

// no #06
var mixedData = ["abdul wahid", 100, true, null];

// no #07
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log("Qualifications:");
console.log("1) " + qualifications[0]);
console.log("2) " + qualifications[1]);
console.log("3) " + qualifications[2]);
console.log("4) " + qualifications[3]);
console.log("5) " + qualifications[4]);
console.log("6) " + qualifications[5]);
console.log("7) " + qualifications[6]);
console.log("8) " + qualifications[7]);

// no #08
var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480 , 120];
var totalMarks = 500;

console.log("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / totalMarks * 100) + "%");
console.log("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks * 100) + "%");
console.log("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks * 100) + "%");

// no # 10

console.log("Scores of Student: " + scores);

scores.sort(function(a, b) {
  return a - b;
});

console.log("Orderd Scores of Students: " + scores);

// no # 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

let selectedCities = cities.slice(2, 4);

console.log("Cities: " + cities);
console.log("Selected Cities: " + selectedCities);

// no # 12
var arr = ["This ", " is ", " my ", " cat"];

var result = arr.join("");

console.log(result);

// no # 13
let queue = [];

queue.push("Keyboard");
queue.push("mouse");
queue.push("printer");
queue.push("monitor");


console.log("queue");

while (queue.length > 0) {
  console.log("Out" + ":" +queue.shift());
}

// no # 14
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Select Phone Manufacturer</h3>");
document.write("<select>");

for (let i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");