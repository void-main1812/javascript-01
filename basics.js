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
❗️❗️Note: the method var is not recommended to use nowdays because it can create conflict to the compiler and the compiler will be confused that which variable it should access. However with let method it is a little bit easy as it is closed under what parameters you passed the variable.

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
❗️❗️Note:- By default math.random() generates number between 0 and 1 and if you want the number to be between 0 and any other number (say x) then multiply the function by x
i.e. math.random()*3 -> 2.258963259
-----------------------------------------------------------------------------------------------------------


||| Template Literals |||
Template literals (`${ }`) are used when you want to use variable inside a string in JavaScript.

01. How to use Template literals: 
Suppose you declare a variabe [name = "xyz"]
Now you want to greet the person from name so the programme should be like: 

let name = "xyz"    (defining value for name)
console.log(`Good Morining ${name}! How are you ?`)

and the output will be like: Good Morning xyz! how are you ?  

❗️❗️Note: In the template literal anything written inside ` ` and outside ${} will also be considered as a string and anything written inside ${ } will be considered a variable

*/

/*----------------------------- basics_02 - Functions ----------------------------------------------*/
/*
Functions  -->  Functions in JavaScript or any other language are some blocks of code which is designed to perform a particular task and it is executed when some thing calls it.😉

*/
// Example Function to print my name:

// function myName(name) {     // Here the function is initialized with a parameter name.
//     console.log(name)       // The function will simply print the argument passed to it.
// }

/*
 Example Output:
 myName("myname");    // the function is called with argument myname as name
 Output: myname
 */

/*
 There is one more method to define functions in javaScript. They are called "The Arrow Function" and the syntax is like: 

 function <function name> = (<parameters>) => {
    // here goes the block of code for your function
 } 

 Arrow functions are used because of it's ablity called the implicit return. It makes the code more consise and better to understand.

 for Example: 
 A function to return sum of two variables (say x and y) in traditional method will be like

 function sum(x, y)
 {
    return x+y;
 }

 but if we use the implicit return feature of arrow function the programme will be like ->

 function sum = (x, y) => x+y;

 here it is very much easy for us to understand how the function is working 😄

 ❗️❗️Note: if you remove {} from the arrow function then you dont need to write the return keyword and it will return implicitely. Other by-default arrow functions returns the output explicitely 
*/

/*----------------------------- basics_04 - Arrays ----------------------------------------------*/
/*
Arrays: Array is a data-structure which is used to store similar type of values together.
For example: let groceries = ["🍎", "🥔", "🍌", "🍇"] and much more
*/
