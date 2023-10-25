/* Q1 Write a dynamic greeter program named greeter.js. 
The program should ask for your name, then output 
Hello, {name}! where {name} is the name you entered:
*/

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
console.log(`Hello, ${name}!`);

/* Q2 Modify the greeter.js program to ask for the user's first and last names separately, 
then greet the user with their full name.
*/

let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);



/* Q3 Modify the age.js program you wrote in the exercises for the Variables chapter. 
The updated code should ask the user to enter their age instead of hard-coding the age in the program. 
*/

function age(){
    let rlSync = require('readline-sync');
    let currAge = Number(rlSync.question('What is your age? '));
    console.log(`You are ${currAge} years old`)
    console.log(`In 10 years, you will be ${currAge + 10} years old.`)
    console.log(`In 20 years, you will be ${currAge + 20} years old.`)
    console.log(`In 30 years, you will be ${currAge + 30} years old.`)
    console.log(`In 40 years, you will be ${currAge + 40} years old.`)
}
age();