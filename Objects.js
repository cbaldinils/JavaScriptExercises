// Q1 Given the following code, how can you access the name of the person?

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

person.name;
// OR
person['name'];

/* Q2 Which of the following values are valid keys for an object?

1
'1'
undefined
'hello world'
true
'true'

All are valid, as they will all be coerced into strings
*/


/* Q3 Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. 
The object should contain at least 3 elements. You should place your code between the braces in the let statement:
*/
let myArray = {
    0: 1,
    1: 2,
    2: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}


/* Q4 Create an array from the keys of the object obj below, with all of the keys converted to uppercase. 
Your implementation must not mutate obj.

*/
let obj = {
    b: 2,
    a: 1,
    c: 3,
  };

let arr = [];

for (key of Object.keys(obj)){
    arr.push(key.toUpperCase());
}

/* Q5 Create a new object named myObj that uses myProtoObj as its prototype.

*/

let myProtoObj = {
    foo: 1,
    bar: 2,
  };

let myObj = Object.create(myProtoObj);

/* Q6 Which of the following values are primitive values? Which are objects? Which are neither?

"foo" -> primitive
3.1415 -> primitive
[ 'a', 'b', 'c' ] -> object
false -> primitive
foo -> neither
function bar() { return "bar"; } -> object
undefined -> primitive
{ a: 1, b: 2 } -> object

*/

/* Q7 Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
Snippet 2
for (let key in myObj) {
  console.log(key);
}

Both snippets iterate over the keys of myObj, but for..in iterates over all of the object's keys, including those in the prototype object

*/

/* Q8 Create a function that creates and returns a copy of an object. The function should take two arguments: 
the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. 
If you do omit the argument, the function should copy all of the existing keys from the object.

*/

function copyObj(objToCopy, objKeys=[]){
    if (objKeys.length !== 0){
        let res = {};
        objKeys.forEach(key => {
            res[key] = objToCopy[key];
            console.log(key);
        });
        return res
    }
    return {...objToCopy};
}

/* Q9 What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);


it logs hi and hello, because objects are mutable and strings are not
*/

/* Q10
How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

Copy Code
[1, 2, ["a", ["b", false]], null, {}]

primitive - 1,2,a,b,false,null - (6)
objects - 3 array literals 1 object literal

*/

// Q11 Write some code to replace the value 6 in the following object with 606:

let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

obj['bar'][3].xyz = 606;


/* Q12 Consider the following code:

function foo(bar) {
  console.log(bar, bar, bar);
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

*/

function foo(bar) {
    console.log(bar, bar, bar);
  }

foo("hello"); // should print "hello hello hello"
let bar = foo;
bar("hi");    // should print "hi hi hi"

/* Q13 Consider the following code:
function foo(bar) {
  console.log(bar());
}

foo();    // Should print 'Welcome'
foo();    // Should print 3.1415
foo();    // Should print [1, 2, 3]

*/

function foo(bar) {
    console.log(bar());
  }
  
  foo(function() { return "Welcome" });
  foo(function() { return 3.1415 });
  foo(function() { return [1, 2, 3] });


/* Q14 Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

variables -> hello, xyzzy, greeting, name, howdy, foo
object property names -> a, b, c, d
primitive types -> ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace', 'a', 'b', 'c','d'
objects -> hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3,4,5], {}

*/

/* Q15 Identify all of the variables, object property names, primitive values, and objects in the following code. 
This problem is even more challenging than the previous one.

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

variables -> bar, arg1, arg2, foo, qux, result.
object property names -> abc, def, ghi, jkl, mno, pqr, 0, 1, 2, and 3.
primitive values -> 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', and 'Antonina'
'abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', and '3'.
objects -> bar, [1, 2, 3, [4, 5, 6]], [4, 5, 6], qux

*/