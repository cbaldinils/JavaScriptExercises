/* Q1 Concatenate two or more strings, one with your first name and one with your last, 
to create a string with your full name as its value. For example, if your name is John Doe, 
think about how you can put 'John' and 'Doe' together to get 'John Doe'.
*/

let fullName = 'Charlie' + ' Baldini';


// Q2 Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

let ones, tens, hundreds, thousands;
let curr = 4936;

ones = curr % 10;
curr = Math.floor(curr / 10);
tens = curr % 10;
curr = Math.floor(curr / 10);
hundreds = curr % 10;
curr = Math.floor(curr / 10);
thousands = curr % 10;


// Q3 Identify the data type for each of the following values:
/* 'true'
false
1.5
2
undefined
{ foo: 'bar' }
*/

// String
// Boolean
// Number
// Number
// undefined
// object


// Q4 Explain why this code logs '510' instead of 15.
// console.log('5' + 10);

// Every epression with a string using the '+' operator will be coerced into a string


// Q5 Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

console.log(Number('5') + 10)


// Q6 Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
// The value of 5 + 10 is 15.

console.log(`The value of 5 + 10 is ${Number('5') + 10}`)


/* Q7 Will an error occur if you try to access an array element with an index 
that is greater than or equal to the length of the array? For example:
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
*/

// No, it will not result in an error, it will return undefined


// Q8 Create an array named names that contains a list of pet names. For instance:

let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];


// Q9 Create an object named pets that contains a list of pet names and the type of animal. For instance:

let animals = {
    asta: 'dog',
    butterscotch: 'cat',
    pudding: 'cat',
    neptune: 'fish',
    darwin:	'lizard'
}


// Q10 What value does the following expression evaluate to?
// 'foo' === 'Foo'
// false because both strict and loose equality are case sensitive


// Q11 What value does the following expression evaluate to?
// parseInt('3.1415')
// 3, because parsing a float to an integer will give you the floor of the number

// Q12 What value does the following expression evaluate to?
// '12' < '9'
// true, because it compares one value at a time left to right and '1' is less than '9'