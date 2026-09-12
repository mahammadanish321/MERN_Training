// TODO: Complete Exercise 2

// Step 1: Arithmetic operators
const a = 15;
const b = 4;
console.log("Addition: " + (a + b));
console.log("multiplication: " + (a * b));
console.log("divition: " + (a % b));
console.log("Subtract: " + (a - b));



// Step 2: checkAccess function
function checkAccess(age, hasID) {
    // TODO: Return "Access granted" or "Access denied"
    if (age<=18 || hasID ==true){
        return("Access denied")
    }
    else{
        return("Access granted")
    }
}


console.log(checkAccess(20, true));
console.log(checkAccess(17, true));
console.log(checkAccess(22, false));






// Step 3: Ternary operator
const num = 7;
const parity = num%2 === 0? "even": "odd";
console.log(num + " is " + parity);









// Step 4: getGrade function
function getGrade(score) {
    let grade =""
    // TODO: Return "A", "B", "C", "D", or "F"
    switch (true) {
        case score >= 90:
            grade = "A";
            break;

        case score >= 80:
            grade = "B";
            break;

        case score >= 70:
            grade = "C";
            break;

        case score >= 60:
            grade = "D";
            break;

        default:
            grade = "F";
    }

    return grade;
}

console.log("Score 95: " + getGrade(95));
console.log("Score 82: " + getGrade(82));
console.log("Score 74: " + getGrade(74));
console.log("Score 65: " + getGrade(65));
console.log("Score 50: " + getGrade(50));
