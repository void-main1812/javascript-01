const prompt = require('prompt-sync')();       // importing prompt for user input

let weather = prompt("How's the weather outside ?") //asking the user about the weather


// suggesting some solutions to the user according to the weather entered 
if (weather.toLocaleLowerCase() == "rainy") {
    console.log("Just Grab an umbrella 🌂")
}

else if (weather.toLocaleLowerCase() == "sunny") {
    console.log("Get your sunglasses 😎")
}

else {
    console.log("enter a valid input 🚫");
}