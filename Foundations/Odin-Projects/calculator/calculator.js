const historyDisplay = document.getElementById('history');
const inputDisplay = document.getElementById('input');
const keypad = document.getElementById('keypad');

let numA = '0';
let numB = '';
let state = 1; // 1 for numA, 2 for operator, 3 for numB, 4 for handling equals
let operator = '';
let result = '';

function numOnlyNegative(num) {
    return num === '-';
}

function numOnlyPeriod(num) {
    return num === '.';
}

function numEmpty(num) {
    return num === '';
}

function numZero(num) {
    return num === '0';
}

function handleInput(event) {
    if (!event.target.matches('button')) return;

    if (event.target.classList.contains('operator') && event.target.id !== 'equals') {
        handleOperator(event)
        return;
    }
    if (event.target.classList.contains('digit')) {
        handleDigit(event)
        return;
    }
    if (event.target.id === 'equals') {
        numB = appendZeroIfEndDecimal(numB);
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
    if (event.target.id === 'delete') {
        handleDelete(event);
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
        if (numZero(numA) || numEmpty(numA)) {
            numA = '0.';
            return;
        }
        if (numOnlyNegative(numA)) {
            numA = '-0.';
            return;
        }
        if (numA.includes(event.target.value)) return;
    }
    if (state === 2) {
        numB = '0.';
        state = 3;
        return;
    }
    if (state === 3) {
        if (numZero(numB) || numEmpty(numB)) {
            numB = '0.';
            return;
        }
        if (numOnlyNegative(numB)) {
            numB = '-0.';
            return;
        }
        if (numB.includes(event.target.value)) return;
    }
    handleDigit(event);
    return;
}

function handleDigit(event) {
    let value = event.target.value;

    if (state === 1 && (numEmpty(numA) || numZero(numA))) {
        numA = value;
        return;
    }
    if (state === 1) {
        numA += value;
        return;
    }
    if (state === 2) {
        state = 3;
        numB += value;
        return
    }
    if (state === 3) {
        numB += value;
        return;
    }
    if (state === 4) {
        resetAll();
        numA = value;
        state = 1;
        return;
    }
    return;
}

function appendZeroIfEndDecimal(num) {
    if (num.length > 1 && num[num.length - 1] === '.') {
        return num += '0';
    }
    return num;
}

function handleOperator(event) {
    let value = event.target.value;

    if (state === 1) {
        if (checkNegativePressed(event)) {
            handleNegatives(event);
            return;
        }
        if (numOnlyNegative(numA) || numOnlyPeriod(numA)) return;
        numA = appendZeroIfEndDecimal(numA);
        state = 2;
        operator = value;
        return;
    }
    if (state === 2) {
        if (checkNegativePressed(event)) {
            handleNegatives(event);
            return;
        }
        operator = value;
        return;
    }
    if (state === 3) {
        if (numOnlyNegative(numB) || numOnlyPeriod(numB)) return;
        numB = appendZeroIfEndDecimal(numB);
        result = calculate(numA, operator, numB);
        chainInputs(event);
        return;
    }
    if (state === 4) {
        operator = value;
        state = 2;
        return;
    }
    return;
}

function checkNegativePressed(event) {
    if (event.target.id === 'subtract') {
        if ((state === 1 && (numZero(numA) || numEmpty(numA))) || (state === 2 && numEmpty(numB))) {
            return true;
        }
    }
    return false;
}

function handleNegatives(event) {
    if (state === 1) {
        numA = '-';
        return;
    }
    if (state === 2) {
        numB = '-';
        state = 3;
        return;
    }
    return;
}

function chainInputs(event) {
    displayHistory();
    numA = String(result);
    numB = '';
    operator = event.target.value;
    state = 2;
    return;
}

function chainEquals() {
    displayHistory();
    numA = String(result);
    numB = '';
    operator = '';
    state = 4;
    return;
}

function handleDelete() {
    if (state === 1) {
        if (numA.length <= 1) {
            numA = '0';
            return;
        }
        numA = numA.slice(0, -1);
        return;
    }
    if (state === 2) {
        operator = '';
        state = 1;
        return;
    }
    if (state === 3) {
        if (numEmpty(numB)) {
            operator = '';
            state = 1;
            return;
        }
        numB = numB.slice(0, -1);
    }
    return;
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

function assembleOutput() {
    return numA + operator + numB;
}

function displayHistory() {
    historyDisplay.textContent = assembleOutput();
    return;
}

function resetHistory() {
    historyDisplay.textContent = '';
}

function displayIO() {
    inputDisplay.textContent = assembleOutput();
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

displayIO();

keypad.addEventListener('click', (event) => {
    let key = event.target;

    // key click visual
    let prevShadow = key.style.boxShadow;
    key.style.boxShadow = '0px 0px';
    setTimeout(() => { key.style.boxShadow = prevShadow }, 100);

    // Logic
    try {
        handleInput(event);
    } catch (e) {
        console.error(e);
    }

    displayIO();

    console.log(`state: ${state},\nnumA: ${numA},\noperator: ${operator},\nnumB: ${numB}`);
});