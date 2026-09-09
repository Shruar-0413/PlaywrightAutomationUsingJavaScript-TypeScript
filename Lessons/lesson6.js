/*Conditional statements are used to perform different actions based on different conditions.
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
*/

//if hour between 6am and 12pm: Good morning!
//if hour between 12pm and 6pm: Good afternoon!
//otherwise: Good evening!

var hour = 17;
if (hour>= 6 && hour < 12){
    console.log('Good morning!');
} else if (hour>= 12 && hour < 18){
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}