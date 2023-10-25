/* Q1 Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages.
*/
let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('How old are you? '));
console.log(`You are ${age} years old.`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}


/* Q2 Write a function that computes and returns the factorial of a number by using a for loop. 
The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
*/

function factorial(number){
    let res = 1
    while (number !== 1){
        res *= number;
        number -= 1;
    }
    return res;
}

/* Q3 The following code causes an infinite loop (a loop that never stops iterating). Why?
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

Because counter = 1 is reassining counter to 1 every loop, rather than checking for equality
*/

/* Q4 Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

There is no error.  i += 1 returns the value.  So 1,2,3,4,5 are logged to the console, and i is incremented 
every loop, despite not being the 3rd argument of the for loop.
*/


/* Q5 The following code uses a randomNumberBetween function to generate a number between its first and second arguments. 
It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call 
randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

*/

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let tries = 0;
  let result;
  
  do {
    result = randomNumberBetween(1, 6);
    tries += 1;
  } while (result <= 2);
  
  console.log('It took ' + String(tries) + ' tries to get a number greater 2');


/* Q6 Reimplement the factorial function from exercise 2 using recursion. 
Once again, you may assume that the argument is always a positive integer.

*/

function factorial(number){
    if (number === 1){
        return 1
    }
    return number * factorial(number -1);
}

console.log(factorial(4));
