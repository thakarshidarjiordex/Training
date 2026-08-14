"use strict";
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
// Calculator variables
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;
// Display number
function displayNumber(value) {
    if (waitingForSecondNumber) {
        display.value = value;
        waitingForSecondNumber = false;
    }
    else {
        display.value += value;
    }
}
// Select operator
function selectOperator(selectedOperator) {
    firstNumber = Number(display.value);
    operator = selectedOperator;
    waitingForSecondNumber = true;
}
// Calculate result
function calculate() {
    if (firstNumber === null ||
        operator === null) {
        return;
    }
    const secondNumber = Number(display.value);
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                display.value = "Error";
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }
    display.value = String(result);
    firstNumber = null;
    operator = null;
}
// Clear calculator
function clearCalculator() {
    display.value = "";
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
}
// Number buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (value !== undefined) {
            displayNumber(value);
        }
    });
});
// Operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (value !== undefined) {
            selectOperator(value);
        }
    });
});
// Equal button
equalButton.addEventListener("click", () => {
    calculate();
});
// Clear button
clearButton.addEventListener("click", () => {
    clearCalculator();
});
