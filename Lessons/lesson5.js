//Logical 'AND' operator (&&) - Returns true if both operands are true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Logical 'OR' operator (||) - Returns true if either operand is true
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var ageIsMoreThan18 = false;
var isIndianCitizen = true;
var isEligibleToVote = ageIsMoreThan18 && isIndianCitizen;
console.log('The customer is eligible to vote:' + isEligibleToVote);
var isEligibleToVote = ageIsMoreThan18 || isIndianCitizen;
console.log('The customer is eligible to vote:' + isEligibleToVote);

//Logical 'NOT' operator (!) - Returns true if the operand is false and vice versa
console.log(!true);
console.log(!false);