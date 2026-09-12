/*
===========================================================
        DOM MANIPULATION PRACTICE — SOLUTIONS
===========================================================

How to use:
    - Keep this file as script.js
    - Open the HTML file in your browser.
    - Open DevTools → Console to see console.log() output.

The main DOM workflow is:

    1. Select an HTML element
    2. Store it in a variable
    3. Listen for an event
    4. Change/manipulate the element

Example:

    const button = document.querySelector("#myButton");

    button.addEventListener("click", function () {
        // Do something
    });

===========================================================
*/


/*
===========================================================
Q1. SELECT ELEMENT BY ID AND CHANGE TEXT
===========================================================

HTML:
    <h3 id="heading">Original Heading</h3>

IMPORTANT:
    document.getElementById("heading")
    searches the HTML document for an element with id="heading".

    textContent
    changes the text inside the element.
*/

const heading = document.getElementById("heading");

heading.textContent = "DOM Practice Started";


/*
===========================================================
Q2. SELECT ALL ELEMENTS WITH A CLASS
===========================================================

HTML:
<p class="text">Paragraph One</p>
<p class="text">Paragraph Two</p>
    <p class="text">Paragraph Three</p>

querySelectorAll()
    returns ALL matching elements.

Since we have multiple paragraphs, we need a loop.

forEach()
    runs the function once for every element.
*/

const paragraphs = document.querySelectorAll(".text");

paragraphs.forEach(function (paragraph) {

    paragraph.style.fontSize = "20px";

});


/*
===========================================================
Q3. SELECT THE FIRST MATCHING ELEMENT
===========================================================

querySelector()
    returns only the FIRST matching element.

If there are 3 elements with class="text",
only the first one will be selected.
*/

const firstParagraph = document.querySelector(".text");

firstParagraph.textContent = "First Paragraph Changed";


/*
===========================================================
Q4. COUNT LI ELEMENTS
===========================================================

We want all <li> elements inside #fruitList.

The selector:

    "#fruitList li"

means:

    Find every <li> inside the element with id="fruitList".

.length
    gives the number of elements in the collection.
*/

const fruitItems = document.querySelectorAll("#fruitList li");

console.log("Number of fruits:", fruitItems.length);


/*
===========================================================
Q5. PRACTICE MULTIPLE DOM OPERATIONS
===========================================================

When the button is clicked:

    1. Change heading
    2. Change all paragraphs
    3. Change first list item
*/

const selectionButton = document.getElementById("selectionBtn");

selectionButton.addEventListener("click", function () {

    // Change heading
    heading.textContent = "Selection Button Clicked";

    // Change all paragraphs
    paragraphs.forEach(function (paragraph, index) {

        paragraph.textContent = `Paragraph ${index + 1} changed`;

    });

    // Change first fruit
    const firstFruit = document.querySelector("#fruitList li");

    firstFruit.textContent = "Updated Fruit";

});


/*
===========================================================
Q6. CHANGE TEXT WHEN BUTTON IS CLICKED
===========================================================

addEventListener()

Syntax:

    element.addEventListener("event", function () {

    });

"click" means the function runs when the element is clicked.
*/

const changeTextButton = document.getElementById("changeTextBtn");
const changeText = document.getElementById("changeText");

changeTextButton.addEventListener("click", function () {

    changeText.textContent = "Text successfully changed!";

});


/*
===========================================================
Q7. CHANGE IMAGE SOURCE
===========================================================

An <img> element has a "src" attribute.

We can directly access it using:

    image.src

Then assign a new URL.
*/

const practiceImage = document.getElementById("practiceImage");
const changeImageButton = document.getElementById("changeImageBtn");

changeImageButton.addEventListener("click", function () {

    practiceImage.src =
        "https://via.placeholder.com/300x180?text=Image+2";

});


/*
===========================================================
Q8. CHANGE IMAGE ALT ATTRIBUTE
===========================================================

There are two common ways:

    image.alt = "New text";

OR:

    image.setAttribute("alt", "New text");

setAttribute() is useful when working with generic HTML attributes.

Syntax:

    element.setAttribute("attribute", "value");
*/

practiceImage.setAttribute(
    "alt",
    "This is the second practice image"
);


/*
===========================================================
Q9. CHANGE HREF
===========================================================

An <a> element has an href attribute.

We can change it directly:

    link.href = "URL";

Or using:

    link.setAttribute("href", "URL");
*/

const practiceLink = document.getElementById("practiceLink");

practiceLink.href = "https://www.github.com";


/*
===========================================================
Q10. GET VALUE FROM INPUT
===========================================================

VERY IMPORTANT:

For an <input>, the user's typed data is stored in:

    input.value

NOT:

    input.textContent

Example:

    <input id="nameInput">

If the user types:

    Anish

Then:

    nameInput.value

returns:

    "Anish"
*/

const nameInput = document.getElementById("nameInput");
const showNameButton = document.getElementById("showNameBtn");
const nameOutput = document.getElementById("nameOutput");

showNameButton.addEventListener("click", function () {

    const name = nameInput.value;

    nameOutput.textContent = name;

});


/*
===========================================================
Q11. CHANGE CSS USING JAVASCRIPT
===========================================================

We can access CSS through:

    element.style

Example:

    box.style.backgroundColor = "red";

Notice:

CSS:
    background-color

JavaScript:
    backgroundColor

JavaScript uses camelCase for CSS properties.
*/

const colorBox = document.getElementById("colorBox");
const colorButton = document.getElementById("colorBtn");

colorButton.addEventListener("click", function () {

    colorBox.style.backgroundColor = "red";

});


/*
===========================================================
Q12. TOGGLE A CSS CLASS
===========================================================

HTML contains:

    .hidden {
        display: none;
    }

classList.toggle("hidden")

means:

    If the class exists → remove it
    If the class doesn't exist → add it

This is extremely useful for:

    - Show/hide
    - Dark mode
    - Menus
    - Modals
    - Tabs
    - Accordion
*/

const toggleClassButton =
    document.getElementById("toggleClassBtn");

toggleClassButton.addEventListener("click", function () {

    colorBox.classList.toggle("hidden");

});


/*
===========================================================
Q13. HIDE / SHOW ELEMENT
===========================================================

We can use classList.toggle()
instead of manually changing style.display.

The HTML already contains:

    .hidden {
        display: none;
    }
*/

const hideText = document.getElementById("hideText");
const hideShowButton = document.getElementById("hideShowBtn");

hideShowButton.addEventListener("click", function () {

    hideText.classList.toggle("hidden");

});


/*
===========================================================
Q14. INCREASE FONT SIZE
===========================================================

We need the current font size first.

getComputedStyle()
    gets the actual CSS value from the browser.

Example:

    font-size: 16px

parseInt()
    converts:

        "16px"

    into:

        16

Then we add 2.
*/

const fontText = document.getElementById("fontText");
const increaseFontButton =
    document.getElementById("increaseFont");

increaseFontButton.addEventListener("click", function () {

    const currentSize =
        parseInt(getComputedStyle(fontText).fontSize);

    fontText.style.fontSize = (currentSize + 2) + "px";

});


/*
===========================================================
Q15. DECREASE FONT SIZE
===========================================================
*/

const decreaseFontButton =
    document.getElementById("decreaseFont");

decreaseFontButton.addEventListener("click", function () {

    const currentSize =
        parseInt(getComputedStyle(fontText).fontSize);

    fontText.style.fontSize = (currentSize - 2) + "px";

});


/*
===========================================================
Q16. DARK / LIGHT MODE
===========================================================

The easiest approach is:

    classList.toggle()

We create a class in JavaScript and toggle it.

For example, you could add this CSS:

    body.dark {
        background: black;
        color: white;
    }

Then JavaScript only needs:

    document.body.classList.toggle("dark");

This is generally cleaner than changing many individual
styles from JavaScript.
*/


const themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});


/*
NOTE:

For Q16, add this to your CSS if you want the dark mode
to visibly work:

    body.dark {
        background: black;
        color: white;
    }
*/


/*
===========================================================
Q17. CREATE A NEW LI
===========================================================

This is one of the MOST IMPORTANT DOM concepts.

createElement()
    creates a brand-new HTML element using JavaScript.

appendChild()
    adds that element to another element.

Workflow:

    Input
      ↓
    Get value
      ↓
    createElement()
      ↓
    Add content
      ↓
    appendChild()
*/

const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

addItemButton.addEventListener("click", function () {

    const itemText = itemInput.value;

    const li = document.createElement("li");

    li.textContent = itemText;

    dynamicList.appendChild(li);

    itemInput.value = "";

});


/*
===========================================================
Q18. ADD DELETE BUTTON TO EACH LI
===========================================================

Now we create TWO elements:

    <li>
    <button>

Then put the button inside the li.

*/

addItemButton.addEventListener("click", function () {

    const itemText = itemInput.value.trim();

    // Don't create an empty item
    if (itemText === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = itemText;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);

    dynamicList.appendChild(li);

    itemInput.value = "";

});


/*
===========================================================
Q19. DELETE ONLY THE CLICKED LI
===========================================================

Here we use:

    li.remove()

Because the button is inside the li,
we can access its parent using:

    deleteButton.parentElement

Then remove it.

IMPORTANT:

The event listener is attached to the button
when that button is created.
*/

deleteButton = null; // Explanation only; see corrected version below.


/*
The clean implementation is:

    const deleteButton = document.createElement("button");

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

This works because "li" belongs to the current iteration.
*/


/*
===========================================================
CORRECT Q17–Q20 COMBINED VERSION
===========================================================
*/

addItemButton.addEventListener("click", function () {

    const itemText = itemInput.value.trim();

    if (itemText === "") {
        return;
    }

    // Create li
    const li = document.createElement("li");

    // Add text
    li.textContent = itemText;

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    // Delete this specific li
    deleteButton.addEventListener("click", function () {

        li.remove();

    });

    // Add button to li
    li.appendChild(deleteButton);

    // Add li to list
    dynamicList.appendChild(li);

    // Clear input
    itemInput.value = "";

});


/*
===========================================================
Q20. CLEAR ALL ITEMS
===========================================================

innerHTML = ""

removes all children inside an element.

*/

const clearListButton =
    document.getElementById("clearListBtn");

clearListButton.addEventListener("click", function () {

    dynamicList.innerHTML = "";

});


/*
===========================================================
Q21. CREATE A CARD DYNAMICALLY
===========================================================

We get values from two inputs:

    cardTitle
    cardDescription

Then create:

    <div>
        <h3>Title</h3>
        <p>Description</p>
    </div>
*/

const cardTitle = document.getElementById("cardTitle");
const cardDescription =
    document.getElementById("cardDescription");

const createCardButton =
    document.getElementById("createCardBtn");

const cardContainer =
    document.getElementById("cardContainer");

createCardButton.addEventListener("click", function () {

    const title = cardTitle.value.trim();
    const description = cardDescription.value.trim();

    if (title === "" || description === "") {
        return;
    }

    const card = document.createElement("div");

    card.classList.add("card");

    const titleElement = document.createElement("h3");

    titleElement.textContent = title;

    const descriptionElement =
        document.createElement("p");

    descriptionElement.textContent = description;

    card.appendChild(titleElement);

    card.appendChild(descriptionElement);

    cardContainer.appendChild(card);

    cardTitle.value = "";
    cardDescription.value = "";

});


/*
===========================================================
Q22. COUNTER
===========================================================

The important part is the STATE.

We keep the current counter value inside:

    count

Then every button modifies count.

Finally we update the DOM.
*/

let count = 0;

const counter = document.getElementById("counter");

const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");
const resetButton = document.getElementById("resetBtn");


plusButton.addEventListener("click", function () {

    count++;

    counter.textContent = count;

});


minusButton.addEventListener("click", function () {

    count--;

    counter.textContent = count;

});


resetButton.addEventListener("click", function () {

    count = 0;

    counter.textContent = count;

});


/*
===========================================================
Q23. CHARACTER COUNTER
===========================================================

input event:
    Runs whenever the user changes the input.

For textarea:

    messageBox.value

gives the current text.

.length
    gives the number of characters.
*/

const messageBox =
    document.getElementById("messageBox");

const charCount =
    document.getElementById("charCount");

messageBox.addEventListener("input", function () {

    charCount.textContent = messageBox.value.length;

});


/*
===========================================================
Q24 + Q25. MOUSEOVER / MOUSEOUT
===========================================================

mouseover:
    Mouse enters the element.

mouseout:
    Mouse leaves the element.
*/

const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {

    mouseBox.style.backgroundColor = "orange";

});

mouseBox.addEventListener("mouseout", function () {

    mouseBox.style.backgroundColor = "lightblue";

});


/*
===========================================================
Q26. MOUSE COORDINATES
===========================================================

mousemove:
    Runs continuously while the mouse moves.

event.clientX
    X coordinate relative to the browser viewport.

event.clientY
    Y coordinate relative to the browser viewport.

The "event" object is automatically passed to
the event handler.
*/

const mousePosition =
    document.getElementById("mousePosition");

mouseBox.addEventListener("mousemove", function (event) {

    mousePosition.textContent =
        `X: ${event.clientX}, Y: ${event.clientY}`;

});


/*
===========================================================
Q27. KEYBOARD EVENT
===========================================================

keydown:
    Runs when a key is pressed.

event.key:
    tells us which key was pressed.
*/

const keyboardInput =
    document.getElementById("keyboardInput");

const keyOutput =
    document.getElementById("keyOutput");

keyboardInput.addEventListener("keydown", function (event) {

    keyOutput.textContent =
        `You pressed: ${event.key}`;

});


/*
===========================================================
Q28–Q32. TO-DO LIST
===========================================================

Now we're combining everything we've learned:

    - value
    - createElement
    - textContent
    - appendChild
    - addEventListener
    - remove
    - classList
*/

const todoInput =
    document.getElementById("todoInput");

const addTodoButton =
    document.getElementById("addTodoBtn");

const todoList =
    document.getElementById("todoList");


addTodoButton.addEventListener("click", function () {

    const taskText = todoInput.value.trim();

    // Prevent empty task
    if (taskText === "") {
        return;
    }

    // Create li
    const li = document.createElement("li");

    // Create task text
    const taskTextElement =
        document.createElement("span");

    taskTextElement.textContent = taskText;


    // Create Complete button
    const completeButton =
        document.createElement("button");

    completeButton.textContent = "Complete";


    // Create Delete button
    const deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";


    /*
    Complete button:

    We don't delete the task.
    We simply add/remove a CSS class.

    You can create a CSS class such as:

        .completed {
            text-decoration: line-through;
        }
    */

    completeButton.addEventListener("click", function () {

        taskTextElement.classList.toggle("completed");

    });


    // Delete task
    deleteButton.addEventListener("click", function () {

        li.remove();

    });


    // Build the li
    li.appendChild(taskTextElement);

    li.appendChild(completeButton);

    li.appendChild(deleteButton);


    // Add li to list
    todoList.appendChild(li);


    // Clear input
    todoInput.value = "";

});


/*
===========================================================
Q33–Q35. IMAGE GALLERY
===========================================================

querySelectorAll()
    gets all thumbnails.

Then we loop through them.

When one is clicked:

    mainImage.src = clickedImage.src

*/

const galleryImages =
    document.querySelectorAll(".gallery img");

const mainImage =
    document.getElementById("mainImage");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        mainImage.src = image.src;

    });

});


/*
===========================================================
Q36–Q38. TABS
===========================================================

Our HTML uses:

    data-tab="home"

This gives us a custom data attribute.

We can access it using:

    button.dataset.tab

Example:

    data-tab="home"

becomes:

    button.dataset.tab

which gives:

    "home"
*/

const tabButtons =
    document.querySelectorAll(".tabBtn");

const tabContents =
    document.querySelectorAll(".tabContent");


tabButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /*
        First hide every tab.
        */

        tabContents.forEach(function (content) {

            content.classList.add("hidden");

        });


        /*
        Find which tab was clicked.

        Example:

            data-tab="about"

        gives:

            "about"
        */

        const tabId = button.dataset.tab;


        /*
        Now find the content having that ID.

        Example:

            tabId = "about"

        becomes:

            document.getElementById("about")
        */

        const selectedTab =
            document.getElementById(tabId);


        /*
        Remove hidden class from selected tab.
        */

        selectedTab.classList.remove("hidden");

    });

});


/*
===========================================================
Q39–Q41. ACCORDION
===========================================================

Each question has a corresponding answer.

HTML structure:

    <button class="question">
        Question
    </button>

    <p class="answer hidden">
        Answer
    </p>

The question and answer are siblings.

So:

    question.nextElementSibling

gets the answer immediately after the button.
*/

const questions =
    document.querySelectorAll(".question");


questions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer =
            question.nextElementSibling;

        answer.classList.toggle("hidden");

    });

});


/*
===========================================================
Q42–Q44. LIVE SEARCH
===========================================================

We listen to the "input" event.

That means the search runs while the user types.

Example:

    Search: "phone"

We compare the search text with every product.
*/

const searchInput =
    document.getElementById("searchInput");

const products =
    document.querySelectorAll("#productList li");


searchInput.addEventListener("input", function () {

    /*
    Convert search text to lowercase.

    This makes the search case-insensitive.
    */

    const searchText =
        searchInput.value.toLowerCase();


    products.forEach(function (product) {

        /*
        Get product text and convert it to lowercase.
        */

        const productName =
            product.textContent.toLowerCase();


        /*
        includes()

        Example:

            "iphone".includes("phone")

        returns:

            true
        */

        if (productName.includes(searchText)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

});


/*
===========================================================
Q45–Q51. FORM VALIDATION
===========================================================

The most important concept:

    event.preventDefault()

Normally submitting a form refreshes/navigates the page.

preventDefault()
    stops the browser's default form submission.
*/

const practiceForm =
    document.getElementById("practiceForm");

const userName =
    document.getElementById("userName");

const userEmail =
    document.getElementById("userEmail");

const userPassword =
    document.getElementById("userPassword");

const formMessage =
    document.getElementById("formMessage");


practiceForm.addEventListener("submit", function (event) {

    // Stop normal form submission
    event.preventDefault();


    /*
    trim()

    Removes spaces from the beginning and end.

    Example:

        "   Anish   "

    becomes:

        "Anish"
    */

    const name = userName.value.trim();

    const email = userEmail.value.trim();

    const password = userPassword.value;


    /*
    First check username.
    */

    if (name === "") {

        formMessage.textContent =
            "Username is required.";

        return;

    }


    /*
    Check email.

    This is a simple validation pattern.
    */

    if (!email.includes("@")) {

        formMessage.textContent =
            "Please enter a valid email.";

        return;

    }


    /*
    Check password length.
    */

    if (password.length < 6) {

        formMessage.textContent =
            "Password must contain at least 6 characters.";

        return;

    }


    /*
    If we reached here,
    all validation passed.
    */

    formMessage.textContent =
        "Form submitted successfully!";

});


/*
===========================================================
Q52. FINAL TO-DO CHALLENGE
===========================================================

The previous To-Do List already contains the core logic.

The new requirement is to maintain statistics:

    total tasks
    completed tasks

The important concept here is:

    DOM STATE + APPLICATION STATE

A better implementation keeps the task data in JavaScript
and updates the DOM based on that data.

This is the beginning of how frameworks like React work.
*/


/*
===========================================================
Q53. SHOPPING CART — BASIC IMPLEMENTATION
===========================================================

This is a more advanced DOM exercise.

We start with data in an array.
Then JavaScript creates the HTML dynamically.
*/

const shopProducts = [

    {
        name: "Laptop",
        price: 50000
    },

    {
        name: "Phone",
        price: 25000
    },

    {
        name: "Headphones",
        price: 3000
    }

];


/*
At this point, the important lesson is:

    DATA
     ↓
    JavaScript
     ↓
    DOM
     ↓
    User interaction
     ↓
    Update data
     ↓
    Update DOM

This pattern is extremely important for MERN development.
*/


/*
===========================================================
                IMPORTANT DOM PATTERNS
===========================================================

1. SELECT ONE ELEMENT
-----------------------------------------------------------

const element = document.querySelector("#id");


2. SELECT MULTIPLE ELEMENTS
-----------------------------------------------------------

const elements = document.querySelectorAll(".class");


3. CHANGE TEXT
-----------------------------------------------------------

element.textContent = "Hello";


4. GET INPUT VALUE
-----------------------------------------------------------

const value = input.value;


5. CHANGE ATTRIBUTE
-----------------------------------------------------------

element.setAttribute("src", "image.jpg");


6. CHANGE CSS
-----------------------------------------------------------

element.style.backgroundColor = "red";


7. ADD CLASS
-----------------------------------------------------------

element.classList.add("active");


8. REMOVE CLASS
-----------------------------------------------------------

element.classList.remove("active");


9. TOGGLE CLASS
-----------------------------------------------------------

element.classList.toggle("active");


10. CREATE ELEMENT
-----------------------------------------------------------

const div = document.createElement("div");


11. ADD ELEMENT
-----------------------------------------------------------

parent.appendChild(child);


12. REMOVE ELEMENT
-----------------------------------------------------------

element.remove();


13. EVENT
-----------------------------------------------------------

element.addEventListener("click", function () {

});


14. INPUT EVENT
-----------------------------------------------------------

input.addEventListener("input", function () {

});


15. FORM SUBMIT
-----------------------------------------------------------

form.addEventListener("submit", function (event) {

    event.preventDefault();

});


16. GET PARENT
-----------------------------------------------------------

element.parentElement;


17. GET NEXT ELEMENT
-----------------------------------------------------------

element.nextElementSibling;


18. GET DATA ATTRIBUTE
-----------------------------------------------------------

button.dataset.tab;


===========================================================
                 THE DOM MINDSET
===========================================================

Whenever you get a DOM problem, think:

    "What HTML element do I need?"

             ↓

    "How do I select it?"

             ↓

    "What event should trigger the action?"

             ↓

    "What information do I need?"

             ↓

    "What should I change?"

             ↓

    "Do I need to create/remove an element?"

This thought process is more important than memorizing
individual DOM methods.


===========================================================
                MOST IMPORTANT METHODS
===========================================================

You should be comfortable with these:

    querySelector()
    querySelectorAll()
    getElementById()

    textContent
    innerHTML
    value

    style
    classList

    createElement()
    append()
    appendChild()
    remove()

    setAttribute()
    getAttribute()

    addEventListener()

    parentElement
    children
    nextElementSibling
    closest()

    dataset

    preventDefault()

    forEach()


===========================================================
*/