const historyDisplay = document.getElementById('history');
const inputDisplay = document.getElementById('input');
const keypad = document.getElementById('keypad');

let numA = '0';
let numB = '';
let state = null; // 1 for numA, 2 for operator, 3 for numB
let operator = null;

// numA = 0
// Start in state 1
// if digit pressed in state 1, append numA
// if operator pressed while numA === 0, state = 2, operator = selection
// if operator pressed, keep changing operator to selection
// if digit pressed in state 2, switch to state 3 and append numB with selections
// if digit pressed in state 3, append numB
// if operator pressed in state 3, calculate result, display result 
// set numA to result, set numB to 0, set operator to null, set state to 2
// if equals (if numA, operator and numB) pressed state = 4, clear and go to state 1 with new numA
// if operator pressed in state 4, state = 2, 

function calculate(a, operator, b) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') {
        if (b === 0) {
            return 'Error';
        } else {
            return a / b;
        }
    }
}

function clearAll() {
    numA = '';
    numB = '';
    state = null;
    operator
    historyDisplay.textContent = '';
    inputDisplay.textContent = '';

    console.log('Cleared');
    return;
}

function deleteHandler() {
    //pass
}

keypad.addEventListener('click', (event) => {
    key = event.target;

    console.log('click event triggered', event.target);

    // key click visual
    let prevShadow = key.style.boxShadow;
    key.style.boxShadow = '0px 0px';
    setTimeout(() => { key.style.boxShadow = prevShadow }, 100);

    // Logic
});