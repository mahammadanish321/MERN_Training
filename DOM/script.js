const heding = document.getElementById("heading");
const elements = document.querySelectorAll(".text");
const firstParagraph = document.querySelector(".text")
const list = document.querySelectorAll("#fruitList li")


console.log("Number of fruits:", list.length)

elements.forEach(element=>{
    element.style.fontSize = '20px';
});

firstParagraph.textContent = "slkdjflsdjflsakjdfsl"

heding.textContent = "DOM Practice Started";

