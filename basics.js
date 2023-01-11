// printing your first greet "hello world" in javascript

// console.log("hello world 😄")  //or
// console.log('hello world 😄')      //both of console.log works the same 


/*----------------------------- basics_00 - variables ----------------------------------------------*/
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


/*----------------------------- basics_01 - Data_Types ----------------------------------------------*/
/*
||Mainly there are 3 data types in javaScript||

1. Number
Any kind of number with decimal or without decimal is considered inside the Number data-type. 
For Example: 2, 2.5, 2500 etc.

2. String
Any thing written inside " " or ' ' are considered inside the String data-type.
For Example: '2', 'name', "password@123" etc.

3. Boolean
The boolean data-type consists of only 2 input it is either 0 (false) or 1 (True). Boolean data-type is generally used to check whether a condition is true or not. 
*/


/* ---------------------------------------- Extras ---------------------------------------------- */
/*
|||Maths Methods|||
There are two methods to ease your work in math library in javascript 😄😄

1. math.ceil()
-> math.ceil() is a function which is used to round up a decimal number on the greater side of the number line
For Example: math.ceil(33.25) -> 34

2. math.floor()
-> math.floor() is a function which is used to round up a decimal number on the smaller side of the number line
For Example: math.floor(22.25) -> 22

3. math.random()
-> math.random() is a function which is used to generate a random number between 0 and the desired number.
For Example -> math.random() -> 0.22589656
-----------------------------------------------------------------------------------------------------------
Note:- By default math.random() generates number between 0 and 1 and if you want the number to be between 0 and any other number (say x) then multiply the function by x
i.e. math.random()*3 -> 2.258963259
-----------------------------------------------------------------------------------------------------------
*/