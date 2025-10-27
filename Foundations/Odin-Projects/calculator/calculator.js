const historyDisplay = document.getElementById('history');
const inputDisplay = document.getElementById('input');
const keypad = document.getElementById('keypad');

let numA = '0';
let numB = '';
let state = 1; // 1 for numA, 2 for operator, 3 for numB, 4 for handling equals
let operator = '';
let result = '';

// numA = 0
// Start in state 1
// if digit pressed in state 1, append numA
// if operator pressed while state = 2, operator = selection
// if operator pressed, keep changing operator to selection
// if digit pressed in state 2, switch to state 3 and append numB with selections
// if digit pressed in state 3, append numB
// if operator pressed in state 3, calculate result, display result 
// set numA to result, set numB to 0, set operator to null, set state to 2
// if equals (if numA, operator and numB) pressed state = 4, clear and go to state 1 with new numA
// if operator pressed in state 4, state = 2,

function handleInput(event) {
    if (!event.target.matches('button')) return;
    if (event.target.classList.contains('digit')) {
        handleDigit(event)
        return;
    }
    if (event.target.classList.contains('operator') && event.target.id !== 'equals') {
        handleOperator(event)
        return;
    }
    if (event.target.id === 'equals') {
        if (numA && operator && numB) {
            result = calculate(numA, operator, numB);
            chainEquals();
        }
        return;
    } 
    if (event.target.id === 'period') {
        //pass
    }
    if (event.target.id === 'clear') {
        resetAll();
        return;
    }
    return;
}

function handleDigit(event) {
    if (state === 1 && numA === '0') {
        numA = event.target.value;
        return;
    }
    if (state === 1 && numA !== '0') {
        numA += event.target.value;
        return;
    }
    if (state === 2) {
        state = 3;
        numB += event.target.value;
        return
    }
    if (state === 3) {
        numB += event.target.value;
        return;
    }
    if (state === 4) {
        resetAll();
        numA = event.target.value;
        state = 1;
    }
    return;
}

function handleOperator(event) {
    if (state === 1) {
        state = 2;
        operator = event.target.value;
        return;
    } if (state === 2) {
        operator = event.target.value;
        return;
    } if (state === 3) {
        result = calculate(numA, operator, numB);
        chainInputs(event);
        return;
    } if (state === 4) {
        operator = event.target.value;
        state = 2;
    }
    return;
}

function chainInputs(event) {
    displayHistory();
    numA = String(result);
    numB = '';
    operator = event.target.value;
    state = 2;
}

function chainEquals() {
    displayHistory();
    numA = String(result);
    numB = '';
    operator = '';
    state = 4;
}

function resetAll() {
    numA = '0';
    numB = '';
    state = 1;
    operator = '';
    result = '';
    resetHistory();
    return;
}

function displayHistory() {
    historyDisplay.textContent = numA + operator + numB;
    return;
}

function resetHistory() {
    historyDisplay.textContent = '';
}

function displayIO() {
    inputDisplay.textContent = numA + operator + numB;
    return;
}

function calculate(a, operator, b) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') {
        if (b === 0) {
            return a / b; // 'Error';
        } else {
            return a / b;
        }
    }
}

function deleteHandler() {
    //pass
}
displayIO();

keypad.addEventListener('click', (event) => {
    key = event.target;

    console.log('click event triggered', event.target);

    // key click visual
    let prevShadow = key.style.boxShadow;
    key.style.boxShadow = '0px 0px';
    setTimeout(() => { key.style.boxShadow = prevShadow }, 100);

    // Logic
    console.log(`numA: ${numA}, operator: ${operator}, numB: ${numB}`);
    handleInput(event);
    displayIO();
});