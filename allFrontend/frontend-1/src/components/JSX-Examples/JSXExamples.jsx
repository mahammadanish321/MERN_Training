import './JSXExamples.css';

function JSXExamples() {
    const name = "Alice";
    const age = 25;

    const calculations = {
        sum: (a, b) => a + b,
        multiply: (a, b) => a * b,
    };

    const expression = age + calculations.sum(5, 10) * calculations.multiply(2, 3);
    const hobbies = ["Reading", "Coding", "Hiking"];
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="jsx-examples">
            <h2>JSX Expressions</h2>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Age in 5 years: {age + 5}</p>
            <p>Name uppercase: {name.toUpperCase()}</p>
            <p>Today: {currentDate}</p>
            <p>Hobbies: {hobbies.join(", ")}</p>
            <p>Random number: {Math.floor(Math.random() * 100)}</p>
        </div>
    );
}

export default JSXExamples;