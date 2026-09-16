const student = {
    name:"anish",
    age: 20,
    course:"MERN",
    'fovorite color': "red"
}

console.log(Object.keys(student));
console.log(Object.keys(student));
console.log(Object.keys(student));

for (const [key,value]of Object.entries(student)){
    console.log(`${key}: ${value}`);
}


const defaults = {theme:'light',language:'en',fontSize:14};
const userperfs = {theme:'dark',fontSize:16};
const settings = Object.assign({},defaults, userPrefs);

const settings2 = {...defaults,...userperfs}
console.log(settings2);


console.log(settings2);


console.log('name' in student);
console.log('email' in student);
console.log(student.hasOwnProperty('name'));




