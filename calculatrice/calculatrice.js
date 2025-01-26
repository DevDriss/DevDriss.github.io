// Variables to hold the current state
let currentNumber = '';
let previousNumber = '';
let operator = null;

// Append a number to the current input
function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

// Set the operator for the calculation
function setOperator(op) {
    if (currentNumber === '') return; // Prevent setting operator without a number
    if (previousNumber !== '') calculateResult();
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

// Perform the calculation
function calculateResult() {
    if (previousNumber === '' || currentNumber === '' || operator === null) return;

    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error'; // Prevent division by zero
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    operator = null;
    updateDisplay();
}

// Clear the calculator display
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateDisplay();
}

// Update the calculator display
function updateDisplay() {
    const display = document.getElementById('calculator-display');
    display.value = currentNumber || previousNumber || '0';
}
