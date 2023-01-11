const prompt = require("prompt-sync")();    // imported prompt to take user input

let food = prompt("Price of the food: ")                        //price for the food
let tip = prompt("How much tip you want to give (in %): ")      //total tip in %
let totalTip = Number(food) * Number(tip) / 100                 //total tip on the food's price
let finalBill = Number(food) + totalTip                         //total bill including tip
console.log("Your total will be: ", finalBill,"$");

/* the output will be like
Price of the food: 2500 ⬅️
How much tip you want to give (in %): 25 ⬅️

Output: Your total will be: 3125$
*/