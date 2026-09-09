var customerFirstName: string = "Shruthi";
var customerLastName: string = "Geethanjali";
var customerAge: number = 27;

type Customer = {firstName: string, lastName: string, active: boolean};
var firstCustomer: Customer = {
    firstName: "Shruthi",
    lastName: "Geethanjali",
    active: true
}
console.log(firstCustomer.firstName); // Output: Shruthi
console.log(firstCustomer.lastName); // Output: Geethanjali
console.log(firstCustomer.active); // Output: true  

/*the key difference is that JavaScript enforces data correctness only at runtime, 
while TypeScript adds compile-time type checking that helps prevent many data-related errors before the code runs.
Example:

let age: number = 25;
let age = "twenty-five"; // Valid
// age = "twenty-five"; // Valid in JavaScript, but TypeScript will throw an error because the type of age is number, not string.
The variable can change type at any time. This flexibility can lead to unexpected bugs.

let age: number = 25;
age = "twenty-five"; // Error
TypeScript prevents assigning incompatible data types.
*/
