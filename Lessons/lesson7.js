//Loops
/*
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
*/

// For loop
/* for(statement1, statement2, statement3){
    // Code to be executed
}   */

for(let i=0; i<5; i++){
    console.log("Hello World!", i);
}

//for of loop - used to iterate over iterable objects (arrays, strings, etc.)
var cars = ['BMW', 'Volvo', 'Kia', 'Mercedes'];
for (var car of cars){
    console.log(car);
}

//ES6 forEach loop - used to iterate over arrays
var cars = ['BMW', 'Volvo', 'Kia', 'Mercedes'];
cars.forEach( car => 
{
    console.log(car);
}
)
