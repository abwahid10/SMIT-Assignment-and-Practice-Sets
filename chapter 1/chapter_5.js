//  CHAPTER #NO 05 ALL ANSWERS
 // NO #01
    {var num1 = 3;
     var num2 = 5;
var sum = num1 + num2;
console.log("Sum of " + num1 + " and " + num2 + " is " + sum);}

// NO #02
{ let num1 = 3;
  let num2 = 5;
        let addition = num1 + num2;
        let subtraction = num1 - num2;
        let multiplication = num1 * num2;
        let division = num1 / num2;
        let modulus = num1 % num2; 

        console.log("Subract of " + num1 + " and " + num2 + " is " + subtraction);
        console.log("Multiply of " + num1 + " and " + num2 + " is " + multiplication);
        console.log("Divide of " + num1 + " and " + num2 + " is " + division);
        console.log("Reminder of " + num1 + " and " + num2 + " is " + modulus )}

        // NO #03
        {let myVar;
            console.log("Value after variable declaration is: " + myVar);
            myVar = 5;
            console.log("Initial value: " + myVar );
            myVar++;
            console.log("Value after increment is: " + myVar);
            myVar = myVar + 7;
            console.log("Value after addition is: " + myVar);
            myVar--;
            console.log("Value after decrement is: " + myVar);
            let remainder = myVar % 3;
            console.log("The remainder is : " + remainder);}
            
            
            // NO #04
            {let ticketPrice = 600;
                let totalCost = ticketPrice * 5;
                console.log("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");}
                
                // NO #05
                {let num = parseInt("Enter a number to display its multiplication table:");
                    for (let i = 1; i <= 10; i++) {
                        let result = num * i;
                        console.log(num + " x " + i + " = " + result);
                    }}
                    
                    // NO #05
                   {let priceItem1 = 650;
                    let priceItem2 = 100;
                    let quantityItem1 = 3;
                    let quantityItem2 = 7;
                    let shippingCharges = 100;
        let totalCostItem1 = priceItem1 * quantityItem1;
        let totalCostItem2 = priceItem2 * quantityItem2;
        let totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

// Output the receipt
console.log("Shopping Cart");
console.log(`Price of item 1 is ${priceItem1}`);
console.log(`Quantity of item 1 is ${quantityItem1}`);
console.log(`Price of item 2 is ${priceItem2}`);
console.log(`Quantity of item 2 is ${quantityItem2}`);
console.log(`Shipping Charges ${shippingCharges}`);
console.log(`Total cost of your order is ${totalCost}`);}

   // NO #06
   {let totalMarks = 980;
    let marksObtained = 804;
    
    let percentage = (marksObtained / totalMarks) * 100;
    
    console.log("Marks Sheet");
    console.log("Total marks: " + totalMarks );
    console.log("Marks obtained: " + marksObtained );
    console.log("Percentage: " + percentage + "040816326" + "%");}
    
    // NO #07
    {let usDollars = 10;
        let saudiRiyals = 25;
        
        let totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);
        
        console.log("Currency in PKR");
        console.log("Total Currency in PKR: " + totalPKR );}
    
        // NO #08
        {let initialNumber = 7;
            
            let result = ((initialNumber + 5) * 10) / 2;
            
            console.log("Initial Number: " + initialNumber);
            console.log("Result after (adding 5, multiplying by 10, and dividing by 2): " + result);}
            
            // NO #08
            {let currentYear = 2026;
                let birthYear = 2007;
                
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

console.log("Current Year: " + currentYear );
console.log("Birth Year: " + birthYear);
console.log("your age is " +   age2 + " years old.");}

// NO #08
{let radius = 20;
    let pi = 3142;
    
    let circumference = 2 * pi * radius;
    let area = pi * (radius * radius);
    
console.log("Radius of a circle: " + radius );
console.log("The circumference is: " + circumference );
console.log("The area is: " + area);
}

// NO #09
{let favoriteSnack = "chocolate chip";
let currentAge = 18;
let maxAge = 90;
let amountPerDay = 3;

let yearsRemaining = maxAge - currentAge;
let totalNeeded = yearsRemaining * 365 * amountPerDay;

console.log("You will need " + totalNeeded + " " + 
            favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");}

            