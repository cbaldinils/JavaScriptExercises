/* Q1 In the following code, what are the final length values for array1, array2, array3, array4, and array5?

Copy Code
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

4, 5, 0, 3, 101
*/

/* Q2 Log all of the even values from myArray to the console.

*/
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

for (let i = 0; i < myArray.length; ++i){
    if (myArray[i] % 2 === 0){
        console.log(myArray[i]);
    }
}

/* Q3 Let's make the problem a little harder. In this problem, we're again interested in even numbers,
 but this time the numbers are in nested arrays in a single outer array.
*/
myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

for (let i = 0; i < myArray.length; i++){
    for (let j = 0; j < myArray[0].length; j++){
        if (myArray[i][j] % 2 === 0){
            console.log(myArray[i][j]);
        }
    }
}

/* Q4 Let's try another variation on the even-numbers theme.
We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new 
array that contains one element for each element in the original array. If the element is an even value, 
then the corresponding element in the new array should contain the string 'even'; otherwise, the element 
in the new array should contain 'odd'.

*/
myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];

let evenOdd = myArray.map(value => {
    if (value % 2 === 0){
        return 'even';
    }
    return 'odd';
})

/* Q5 Write a findIntegers function that takes an array argument and returns an array that contains 
only the integers from the input array. Use the filter method in your function.

*/

function findIntegers(arr){
    return arr.filter(value => Number.isInteger(value));
}

/* Q6 Use map and filter to first determine the lengths of all the elements in an array of string values, 
then discard the even values (keep the odd values).
*/

function oddLengths(arr){
    arr = arr.map(str => str.length);
    arr = arr.filter(val => val % 2 === 1);
    return arr;
}

/* Q7 Use reduce to compute the sum of the squares of all of the numbers in an array:

*/

function sumOfSquares(arr){
    return arr.reduce((accumulator, value) => {
        return accumulator += value ** 2;
    }, 0)
}

/* Q8 Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function reduceOdds(arr){
    return arr.reduce((accumulator, value) => {
        if (value.length % 2 === 1){
            accumulator.push(value.length);
        }
        return accumulator;
    }, [])
}

/* Q9 Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

*/
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);


/* Q10 Write some code to replace the value 6 in the following array with 606:

*/

let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];

arr[1][3] = 606;