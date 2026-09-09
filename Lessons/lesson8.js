//Declarative function are hoisted, 
//meaning they can be called before they are defined in the code. 
// This is because the JavaScript engine reads the entire function declaration before executing any code.

helloOne(); // This will work because the function is hoisted
function helloOne() {
       console.log("Hello, one!");
}

//anonymous function expression is not hoisted, 
// meaning it cannot be called before it is defined in the code.
// This is because the JavaScript engine reads the code line by line and does not hoist function expressions.

//helloTwo(); // This will not work because the function is not hoisted
var helloTwo = function() {
    console.log("Hello, Two!");
}
helloTwo(); // This will work because the function is defined before it is called

//Arrow function expression is also not hoisted,
// meaning it cannot be called before it is defined in the code.
// This is because the JavaScript engine reads the code line by line and does not hoist arrow function expressions.

//helloThree(); // This will not work because the function is not hoisted
var helloThree = () => {
    console.log("Hello, Three!");
}
helloThree(); // This will work because the function is defined before it is called

//Function with arguments
var printName = (name) => {
    console.log(name);
}
printName("Shruthi"); // This will print "Shruthi" to the console

//Function with return value
function multiplyByTwo(number) {
    var result = number * 2;
    return result;
}
var myResult = multiplyByTwo(5); // This will return 10
console.log(myResult); // This will print 10 to the console

//import Function from another file
import { printAge } from '../helpers/printHelper.js';
printAge(27); // This will print 27 to the console

//import everything from another file
import * as printHelper from '../helpers/printHelper.js';
printHelper.printAge(30); // This will print 30 to the console