/* Q1 Write a program named greeter.js that greets 'Victor' three times. 
Your program should use a variable and not hard code the string value 'Victor' 
in each greeting. Here's an example run of the program:
$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
*/
let timeOfDay = ['Morning', 'Afternoon', 'Evening'];
let name = 'Victor';
for (let i = 0; i < timeOfDay.length; i++){
    console.log(`Good ${timeOfDay[i]} ${name}`)
}


/* Q2 Write a program named age.js that includes someone's age and then calculates 
and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
*/

function age(currAge){
    console.log(`You are ${currAge} years old`)
    console.log(`In 10 years, you will be ${currAge + 10} years old.`)
    console.log(`In 20 years, you will be ${currAge + 20} years old.`)
    console.log(`In 30 years, you will be ${currAge + 30} years old.`)
    console.log(`In 40 years, you will be ${currAge + 40} years old.`)
}
age(20);

/* Q3 What happens when you run the following program? Why do we get that result?
{
  let foo = 'bar';
}

console.log(foo);

We get a Reference error saying that foo is not defined, because the varible foo only exists 
within the scope of the brackets, not globally
*/


/* Q4 What happens when you run the following code? Why?


const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

We get a type error because we are reassigning the value of a constant variable, which is not allowed
*/


/* Q5 Take a look at this code snippet:
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

What does this program log to the console? Why?

It logs 'bar' to the console because foo was assigned to bar in the global scope.  The foo in brackets has its own scope
*/


/* Q6 Will this program produce an error when run? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

No, for the same reasons as question 5, scope
*/







