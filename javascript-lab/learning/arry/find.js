const number = [12,20,34,54,65]

const found = number.find(function(num){
    return num>25
})

console.log(found);

const result = number.find(num => num>100);
console.log(result);

const users = [
    {id:1, name:"alice"},
    {id:2, name:"Bod"},
    {id:3, name:"charlie"}
]

const user = users.find(u =>u.id === 2)
console.log(user)

