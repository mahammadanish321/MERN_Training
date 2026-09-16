const students = [
    { name: "Alice", grade: 92 },
    { name: "Bob", grade: 78 },
    { name: "Charlie", grade: 85 },
    { name: "Diana", grade: 95 },
    { name: "Eve", grade: 65 }
];

const passingGrades = students
    .filter(student => student.grade > 70)
    .map(student => student.grade);

const averageGrade = passingGrades.reduce((total, grade) => total + grade, 0) / passingGrades.length;

console.log(averageGrade);