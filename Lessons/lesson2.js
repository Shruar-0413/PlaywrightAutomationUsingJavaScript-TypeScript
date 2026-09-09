//Concatination and Interpolation
var price = 50;
var itemName = "Table";
//Concatination
var msgtoPrint1 = "The price of " + itemName + " is " + price + " dollars"; 
console.log(msgtoPrint1);

//Interpolation
var msgtoPrint2 = `The price of ${itemName} is ${price} dollars`;
console.log(msgtoPrint2);