const historyDisplay = document.getElementById('history');
const inputDisplay = document.getElementById('input');
const keypad = document.getElementById('keypad');

let numA = '0';
let numB = '';
let state = 1; // 1 for numA, 2 for operator, 3 for numB, 4 for handling equals
let operator = '';
let result = '';

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
        handlePeriod(event);
        return;
    }
    if (event.target.id === 'clear') {
        resetAll();
        return;
    }
    return;
}

function handlePeriod(event) {
    if (state === 1) {
        if (numA.includes(event.target.value)) return;
    }
    if (state === 3) {
        if (numB.includes(event.target.value)) return;
    }
    if (state === 2) {
        state = 3;
    }
    handleDigit(event);
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
    } 
    if (state === 2) {
        operator = event.target.value;
        return;
    } 
    if (state === 3) {
        result = calculate(numA, operator, numB);
        chainInputs(event);
        return;
    } 
    if (state === 4) {
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

    // key click visual
    let prevShadow = key.style.boxShadow;
    key.style.boxShadow = '0px 0px';
    setTimeout(() => { key.style.boxShadow = prevShadow }, 100);

    // Logic
    handleInput(event);
    displayIO();
    console.log(`numA: ${numA}, operator: ${operator}, numB: ${numB}`);
});