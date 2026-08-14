const display = document.getElementById("display") as HTMLInputElement;

const numberButtons =
    document.querySelectorAll(".number");

const operatorButtons =
    document.querySelectorAll(".operator");

const clearButton =
    document.getElementById("clear") as HTMLButtonElement;

const equalButton =
    document.getElementById("equal") as HTMLButtonElement;


// Calculator variables

let firstNumber: number | null = null;

let operator: string | null = null;

let waitingForSecondNumber = false;


// Display number

function displayNumber(value: string): void {

    if (waitingForSecondNumber) {

        display.value = value;

        waitingForSecondNumber = false;

    } else {

        display.value += value;
    }
}


// Select operator

function selectOperator(selectedOperator: string): void {

    firstNumber = Number(display.value);

    operator = selectedOperator;

    waitingForSecondNumber = true;
}


// Calculate result

function calculate(): void {

    if (
        firstNumber === null ||
        operator === null
    ) {
        return;
    }

    const secondNumber = Number(display.value);

    let result: number;


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

function clearCalculator(): void {

    display.value = "";

    firstNumber = null;

    operator = null;

    waitingForSecondNumber = false;
}


// Number buttons

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const value =
            (button as HTMLButtonElement).dataset.value;

        if (value !== undefined) {

            displayNumber(value);
        }
    });

});


// Operator buttons

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const value =
            (button as HTMLButtonElement).dataset.value;

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