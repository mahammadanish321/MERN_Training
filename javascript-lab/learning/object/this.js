const person ={
    firstName: 'anish',
    lastNmae:'Mahammad Anish',
    age: 20,
    getFullName:function(){
        return `${this.firstName} ${this.lastNmae}`
    },
    greed(){
        return `hello, my name is ${this.getFullName()} and i am ${this.age} year old.`;
    }
}

console.log(person.getFullName());
console.log(person.greed());

