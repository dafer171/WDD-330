//Stack Traces
/*
function three() {
  unicorn();
}
function two() {
  three();
}
function one() {
  two();
}
one();

//console.log(one);
*/

pi = 3.142;
console.log(pi);

/*For this reason, a ninja programmer should ensure that the code they write fails
loudly in development so any errors can be identified and fixed quickly. In
production, a ninja programmer should try to make the code fail gracefully
(although not completely silently ― we still need to know there’s an error), so the
user experience is not affected, if possible. */

/*Strict mode simply requires the following string to be added to the first line of a
JavaScript file:
'use strict';
or only be applied to anything inside that function:
function strictly(){
'use strict';
// function code goes here
}
*/

/*the recommended way:
(function() {
'use strict';
// All your code would go inside this function
}());
*/

/*
Linting tools such as JS Lint, JS Hint, and ES Lint can be used to test the
quality of JavaScript code,
*/

/*
The recommended way to determine browser support for a feature is to use
feature detection. This is done using an if statement to check whether an object or method exists before 
trying to actually call the method.

we would wrap any method calls inside the following if block:

if (window.holoDeck) {
virtualReality.activate();
}
Modernizr is a library that offers an easy way to implement feature detection
and Can I Use?
*/

/* The most basic form of debugging is to use the alert() method to show a dialog
at certain points in the code.
*/

function amIOldEnough(age) {
  if ((age = 12)) {
    alert(age);
    return "No, sorry.";
  } else if (age < 18) {
    return "Only if you are accompanied by an adult.";
  } else {
    return "Yep, come on in!";
  }
}

console.log(amIOldEnough(8));
console.log(amIOldEnough(12));
console.log(amIOldEnough(21));

function amIOldEnough1(age) {
  if (age < 12) {
    alert(age);
    return "No, sorry.";
  } else if (age < 18) {
    return "Only if you are accompanied by an adult.";
  } else {
    return "Yep, come on in!";
  }
}

console.log(amIOldEnough1(8));
console.log(amIOldEnough1(12));
console.log(amIOldEnough1(21));

/*Debugger in Chrome
inspect
Sources
.js
*/

/*
An error object can be created by the host environment when an exception
occurs
const error = new Error();
const error = new Error('Oops, something went wrong');

EvalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
InternalError

These error objects can also be used as constructors to create custom error objects:
const error = new TypeError('You need to use numbers in this function');
*/

/*
The only properties that are generally safe to use
are:
The name property. “Error” or “ReferenceError”.
The message property returns a description of the error 
The stack property will return a stack trace for that error. 
*/

/* Throwing Exceptions
It’s also possible to throw your own exceptions using the
364 JavaScript: Novice to Ninja, 2nd Edition
throw statement. 

*/

function squareRoot(number) {
  "use strict";
  if (number < 0) {
    throw new RangeError("You cannot find the square root of negative numbers");
  }
  return Math.sqrt(number);
}

console.log(squareRoot(121));
//console.log(squareRoot(-1));

/* try, catch, and finally
try 
if an exception occurs it will pass the error object that is thrown onto a catch block
*/

function imaginarySquareRoot(number) {
  "use strict";
  try {
    return String(squareRoot(number));
  } catch (error) {
    return squareRoot(-number) + "i";
  }
}
console.log(imaginarySquareRoot(-49));

function imaginarySquareRoot(number) {
  "use strict";
  let answer;
  try {
    answer = String(squareRoot(number));
  } catch (error) {
    answer = squareRoot(-number) + "i";
  } finally {
    return `+ or - ${answer}`;
  }
}

/*
Test-driven Development
1. Write tests (that initially fail)
2. Write code to pass the tests
3. Refactor the code
4. Test refactored code
5. Write more tests for new features
*/

/*
Testing Frameworks
Jest

To run this test, simply navigate to the folder that contains the file
squareRoot.test.js and enter the following command:
jest -c {}
*/
