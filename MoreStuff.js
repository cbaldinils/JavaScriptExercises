// Q1 What does this code log to the console? Why?
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/* it logs [1,4,3] because both array1 and array2 point to the same place in memory,
so modifying one will affect the other
*/


/* Q2 What do the following error message and stack trace tell you?
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)


it tells me that we tried to log the value of greeting to the console on line 4 of exercise2.js, 
but because it wasnt definied, a reference error was thrown
*/

// Q3 Write some code to output the square root of 37.

console.log(Math.sqrt(37));

// Q4 Given a list of numbers, write some code to find and display the largest numeric value in the list.

arr = [1,3,-6,7];
console.log(Math.max(arr));

/* Q5 What does the following function do?

Copy Code
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

it splits a string into an array of words, reverses it, then returns an array with the values of the length of the words

*/


/* Q6 Write a function that searches an array of strings for every element that matches the regular expression 
given by its argument. The function should return all matching elements in an array.

*/
function allMatches(words, pattern) {
    return words.filter((word) => pattern.test(word));
  }

/* Q7 What is exception handling and what problem does it solve?

Exception handling allows the programmer to ignore certain errors thrown, such as invalid input, and have the program continue without crashing

*/

/* Q8 
Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. 
If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. 
You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods, write a function named isNotANumber that returns true if the value passed 
to it as an argument is NaN, false if it is not.

*/

function isNotANumber(value) {
    return value !== value;
  }

/* Q9 Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier 
in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, 
it has 0 and -0. While it's mathematically nonsensical to distinguish between 0 and -0, they are distinct values in JavaScript. 
We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.

There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct:

There are other ways to detect a -0 value. Without using Object.is, write a function that will return true if the argument is -0, 
and false if it is 0 or any other number.

*/

function isNegativeZero(value) {
    return 1 / value === -Infinity;
  }

/* Q10 Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you 
learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers 
with more experience than you have.

Consider this code:

> let x = "5"
> x = x + 1
= "51"
Now, consider this code:

> let y = "5"
> y++
What gets returned by y++ in the second snippet, and why?

The return value is 5 because the ++ operator returns the original value before the increment
*/