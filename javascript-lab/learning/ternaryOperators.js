const age = 20;

// Logic check? true : false
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Equivalent if-else:
let status2;
if (age >= 18) {
    status2 = "Adult";
} else {
    status2 = "Minor";
}

// Ternary can be used inline
console.log(age >= 18 ? "You are Adult" : "You are Minor");

const score = 85;
const grade = score >= 90 ? "A" :score >= 80 ? "B" :score >= 70 ? "C" : "F";


console.log(grade);

