const prompt = require("prompt-sync")();    // imported prompt to take user input

let food1 = prompt("Price of the food: ")                        //price for the food
let tip1 = prompt("How much tip you want to give (in %): ")      //total tip in %
let totalTip = Number(food1) * Number(tip1) / 100                 //total tip on the food's price
let finalBill = Number(food1) + totalTip                         //total bill including tip
console.log("Your total will be: ", finalBill,"$");

/* the output will be like
Price of the food: 2500 ⬅️
How much tip you want to give (in %): 25 ⬅️

Output: Your total will be: 3125$
*/

// Tip calculator using function 😉

let food2 = prompt("Price for the food: ")
let tip2 = prompt("How much tip you want to give (in %): ") 

function calculateTip(food, tip)          // initializing function to calculate the tip with two parameters
{
    let totalTip = Number(food) * Number(tip) / 100     // calculating total tip amount
    let finalBill = Number(food) + Number(totalTip);    // calculating final bill
    console.log("Your total will be: ", finalBill, "$");// printing the total bill
}

calculateTip(food2, tip2);      // calling the function to calculate the tip