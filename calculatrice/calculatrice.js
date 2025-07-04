//vqriables to hold current state
let currentNumber = '';
let previousNumber = '';
let operator = null;
// Appends number to  input
function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

//set operator for calculation, af
function setOperator(op) {
    if (currentNumber === '') return; //blocks opeerator settign without any number 
    if (previousNumber !== '') calculateResult();
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

// do the calculation
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
            result = num2 !== 0 ? num1 / num2 : 'Error'; // if division by 0, blocks
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    operator = null;
    updateDisplay();
}

// clears display
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateDisplay();
}

// update calculator display
function updateDisplay() {
    const display = document.getElementById('calculator-display');
    display.value = currentNumber || previousNumber || '0';
}
