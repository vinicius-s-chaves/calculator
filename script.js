let firstNumber = 0;
let secondNumber = 0;
let operator = null;

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let pressedOperator = false;
let printedResult = false;

// Check if any number is pressed
numbers.forEach((number) => number.addEventListener("click", () => {
    if (pressedOperator || printedResult) {
        display.textContent = '';
        pressedOperator = false;
        printedResult = false;
        operators.forEach((signal) => signal.classList.remove("pressed"));
    };
    if (operator === null) {firstNumber += number.textContent}
    else {secondNumber += number.textContent};
    
    printOperation(number);
}));

// Check if any operator is pressed
operators.forEach((signal) => {
    signal.addEventListener("click", () => {
        if (operator !== null) {
            showResult();
            firstNumber = display.textContent;
        };
        pressedOperator = true;
        operator = signal.textContent;
        signal.classList.toggle("pressed");
    });
});

// Prints the pressed button on the display
function printOperation(button) {
    let digit = document.createElement('h2');
    digit.style["padding"] = 0;
    digit.style["margin"] = 0;
    digit.textContent = button.textContent;

    display.appendChild(digit);
};

// Show result when press equal
equal.addEventListener("click", showResult);

function showResult() {
    let first = parseFloat(firstNumber);
    let second = parseFloat(secondNumber);
    
    let result = document.createElement("h2");
    result.style["padding"] = 0;
    result.style["margin"] = 0;
    result.textContent = operate(first, operator, second);
    
    clearContent();
    printedResult = true;
    firstNumber = result.textContent;
    display.appendChild(result);
};

// Clear the display and the variables
clear.addEventListener("click", clearContent);

function clearContent() {
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    pressedOperator = false;
    printedResult = false;
    operators.forEach((signal) => signal.classList.remove("pressed"));
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
        case '%':
            return module(a, b);
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

function module(a, b) {
    return a % b;
};