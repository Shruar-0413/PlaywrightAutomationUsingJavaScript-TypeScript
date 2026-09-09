//Objects
var Customer = {
    firstName: "Shruthi",
    lastName: "Mani"
};

//dot notation
Customer.firstName = "Aswini";
//bracket notation
Customer['lastName']="Venkatesh";
console.log(`${Customer.firstName} ${Customer.lastName}`);

//Arrays
var cars = ["BMW", "Volvo", "Toyota"];
console.log(cars[0]); // Output: BMW
console.log(cars[1]); // Output: Volvo
console.log(cars[2]); // Output: Toyota
cars[0] = "Mercedes";
console.log(cars[0]); // Output: Mercedes