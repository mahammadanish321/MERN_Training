const student = {
    name:"anish",
    age: 20,
    course:"MERN",
    'fovorite color': "red"
}

student.course = 'MERN';
student['email']= "anish@gmail.com"
student.age = 21;
delete student.email;

console.log(student);
