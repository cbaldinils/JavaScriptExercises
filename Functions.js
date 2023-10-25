/* Q1 What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

1 is logged to the console.  Functions have their own scope, so let bar = 2 does not affect the global assignment
of bar to 1 when console.log is called in the global scope.
*/

/* Q2 In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. 
Use the return values to greet the user with their full name.

*/

function getName(question) {
    let readlineSync = require('readline-sync');
    let name = readlineSync.question(question);
    return name;
  }
  
  let firstName = getName('What is your first name? ');
  let lastName = getName('What is your last name? ');
  console.log(`Hello, ${firstName} ${lastName}!`);


/* Q3 Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

  Copy Code
  $ node multiply.js
  Enter the first number: 3.141592653589793
  Enter the second number: 2.718281828459045
  3.141592653589793 * 2.718281828459045 = 8.539734222673566
  */

 function getNum(question) {
    let readlineSync = require('readline-sync');
    let name = readlineSync.question(question);
    return name;
  }
  
  let num1 = Number(getNum('Enter the first number '));
  let num2 = getNum('Enter the second number ');
  console.log(`${num1} * ${num2} = ${num1 * num2}`);

/* Q4 What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

Nothing is logged, because the fucntion returns undefined before the console.log function logs Yipeee!!!!
*/


/* Q5 What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

This also logs nothing, as console.log is never called
*/

/* Q6 In the code shown below, identify the following items:

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);


the function arguments
    2,3,4
the function body
    let result = num1 * num2 * num3;
    return result;
the function declaration
    function multiplyNumbers(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
    }
the function invocation
    multiplyNumbers(2, 3, 4);
the function name
    multiplyNumbers
the function parameters
    (num1, num2, num3)
the function return value
    result

*/


/* Q7 Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

The code will log Hello then undefined because a second argument was not passed into the function
*/

/* Q8 Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

it will log 42 and 3.1415, the 3rd argument is ignored
*/


/* Q9 Identify all of the variables named on each line of the following code. 
You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).


function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

Line 1: multiply, left, right
Line 2: product, left, right
Line 3: product
Line 6: getNumber, prompt
Line 7: parseFloat, question, prompt
Line 10: left, getNumber
Line 11: right, getNumber
Line 12: console, left, right, multiply
*/

/* Q10 Using the code from Exercise 9, classify each variable name as either global or local. 
For our purposes here, you may assume that the code from Exercise 9 is the entire program.

Global Variables: multiply, getNumber, left, right, console, parseFloat, question.
Local Variables: left, right, product, prompt

*/


/* Q11 Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same 
as the left and right variables on lines 10-12? Explain your reasoning.

No.  The global variables left and right on lines 10-12 are passed by value into the function, not by refrence, so their 
scope within the function is not global, and they are effectively new variables.

*/