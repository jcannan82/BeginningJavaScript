// your notes here!
console.log("hello world!");

// Practice exercise 5
let dayRate = 1650;
let daysWorked = 19;
let amountToPay = dayRate * daysWorked;
console.log("total amount to pay is $" + amountToPay);


// Practice exercise 7
let burritoPrice = 5.99;
let taxRate = 0.09;

console.log("Tax Rate is:");
let tax = burritoPrice * taxRate;
console.log(tax);

console.log("Price of burrito is:");
let totalCost = burritoPrice + tax;
//=> 6.529100000000001
totalCostRound = totalCost * 100;
totalCostRound = Math.round(totalCostRound);
totalCostRound = totalCostRound / 100;
console.log(totalCostRound);
// This step rounds up but also factors in 4 decimal places when rounding

