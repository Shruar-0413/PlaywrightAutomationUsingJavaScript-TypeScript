// var - function scoped, can be re-declared and updated
var name = "John";
console.log("var name:", name);
name = "Jane";
console.log("var name updated:", name);
var name = "Bob";
console.log("var name re-declared:", name);

// let - block scoped, can be updated but not re-declared
let age = 25;
console.log("let age:", age);
age = 30;
console.log("let age updated:", age);
//let age = 35; // Error: Identifier 'age' has already been declared

// const - block scoped, cannot be updated or re-declared
const city = "New York";
console.log("const city:", city);
// city = "Los Angeles"; // Error: Assignment to constant variable
// const city = "Boston"; // Error: Identifier 'city' has already been declared
