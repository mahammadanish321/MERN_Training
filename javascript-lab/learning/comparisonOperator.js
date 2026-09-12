const a = 10;
const b = 20;

console.log(a > b); // false
console.log(a < b); // true (Less than)
console.log(a >= 10); // true (Greater than or equal to)
console.log(a <= 9); // false (Less than or equal to)

// Equality
console.log(a == b); // false (Equal to - loose)
console.log(a != b); // true (Not equal to - loose)
console.log(a === b); // false (Strict equal)
console.log(a !== b); // true (Strict not equal)


// Loose equality (==) performs type coercion
console.log(5 == "5");       // true
console.log(0 == false);     // true
console.log(null == undefined); // true
console.log("" == false);    // true

// Strict equality (===) does NOT perform type coercion
console.log(5 === "5");      // false
console.log(0 === false);    // false
console.log(null === undefined); // false
console.log("" === false);   // false




const age = 25;
const hasID = true;

// AND (&&) - true only if BOTH operands are true
console.log(age >= 18 && hasID); // true
console.log(age >= 18 && !hasID); // false

// OR (||) - true if AT LEAST ONE operand is true
console.log(age >= 18 || hasID); // true
console.log(age < 18 || hasID); // true
console.log(age < 18 || !hasID); // false

// NOT (!) - inverts the boolean value
console.log(!true); // false
console.log(!false); // true
console.log(!hasID); // false