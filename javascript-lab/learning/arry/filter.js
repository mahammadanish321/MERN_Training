const number = [1,2,3,4,5,6]

const evens = number.filter(num => num%2 === 0);
console.log(evens);

const greaterThanFive = number.filter(num => num> 5);
console.log(greaterThanFive);

const products = [
    {name:"Laptop",price:"12342",inStock:true},
    {name:"phone",price:"23424",inStock:false},
    {name:"Tablet",price:"142",inStock:true},
    {name:"Monitor",price:"2356",inStock:true},
]

const available = products.filter
(product => product.inStock)
const affordable = products.filter(product => product.price <7000 && product.inStock);
console.log(affordable);

