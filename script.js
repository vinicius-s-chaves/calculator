let firstNumber = 0;
let secondNumber = 0;
let operator = '';

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

// Check if any button is pressed
buttons.forEach((button) => button.addEventListener("click", () => {
    printOperation(button);
}));

// Prints the pressed button on the display
function printOperation(button) {
    let digit = document.createElement('h1');
    digit.textContent = button.textContent;

    display.appendChild(digit);
};

function operate(a, operator, b) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            "Not valid operation";
            break;
    };
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};