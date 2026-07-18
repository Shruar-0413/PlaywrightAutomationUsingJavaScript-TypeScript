// ======================
// var Example
// ======================
var employeeName = "Shruthi";
console.log("Initial var value:", employeeName);

// Redeclaration allowed
var employeeName = "John";
console.log("Redeclared var value:", employeeName);

// Reassignment allowed
employeeName = "Sam";
console.log("Reassigned var value:", employeeName);


// ======================
// let Example
// ======================
let age = 25;
console.log("Initial let value:", age);

// Reassignment allowed
age = 30;
console.log("Reassigned let value:", age);

// Uncommenting the below line will cause an error
// let age = 35;


// ======================
// const Example
// ======================
const country = "India";
console.log("Const value:", country);

// Uncommenting the below line will cause an error
// country = "USA";


// ======================
// Block Scope Example
// ======================
if (true) {
    var x = 10;
    let y = 20;
    const z = 30;

    console.log("Inside block:");
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
}

console.log("Outside block:");
console.log(x); // Accessible because var is function-scoped

// Uncommenting these will cause errors
// console.log(y);
// console.log(z);