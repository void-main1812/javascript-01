// printing your first greet "hello world" in javascript

// console.log("hello world 😄")  //or
// console.log('hello world 😄')      //both of console.log works the same 


/*----------------------------- basics_01 - variables ----------------------------------------------*/
/* there are three ways to define a variable in javaScript
1-let       //declares a variable 🌊
2-const     //declares a constant 🪨
3-var       //not-recommended to use 🚫
*/

// examples 01.Variables
// let name = "your name";
// console.log(name)       //result = your name

// //here i can change the value of name as it is decleared as a variable

// name = "my name"
// console.log(name)       //result = my name



// //examples 02.Constants

// const myDate = 25
// console.log(myDate)     // result = 25

// now if i try to change the value of myDate
// myDate = 35
// console.log(myDate)     //result = Error! - Assignment to constant variable

/*
Note: the method var is not recommended to use nowdays because it can create conflict to the compiler and the compiler will be confused that which variable it should access. However with let method it is a little bit easy as it is closed under what parameters you passed the variable.

If you declared the "let" variable globally then you can access it anywhere in the program but if you have declared it inside of any function then you can only access it inside the variable 
*/