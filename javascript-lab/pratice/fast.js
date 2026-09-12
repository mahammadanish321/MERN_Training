// TODO: Complete Exercise 1

// Step 1-5: Declare variables
const fullName = "Alice";
let age = 20;
const isStudent = true;
let hobby;
const emptyValue = null;

// Step 6: Log each variable and its type
console.log("fullName: " + fullName + ", type: " + typeof fullName);
// TODO: Log age, isStudent, hobby, and emptyValue with their types

// Step 7: Reassign age and log it
// TODO: Reassign age to 21 and log the new value
age = 21
console.log("The new age is:",age)

// Step 8: Try to reassign fullName (will error)
try {
    fullName = "anish"
} catch (error) {
    console.log("error found")
    console.log("Error: " + error.message);
}




