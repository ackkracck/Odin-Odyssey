function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}



function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Error: unknown operator';
    }
}


// I want to...
// get the selected value
// get the operator
// get the other value
// display the result

let state = 'a';
let input = '';
let a = '';
let operator = '';
let b = '';
let output;
let calculated;
let current;

const userInput = document.getElementById('input');
const keypad = document.getElementById('keypad');
const history = document.getElementById('history');

keypad.addEventListener('click', (event) => {

    let target = event.target;
    current = target.value;

    if (state === 'a' && target.classList.contains('digit')) {
        a += target.value;
        console.log(a);
    } else if (target.classList.contains('operator')) {
        state = 'operate';
        operator = target.value;
        console.log(operator);
    } else if (state === 'operate' && target.classList.contains('digit')) {
        b += target.value;
        console.log(b);
    } else if (target.id === 'equals') {
        calculated = operate(Number(a), operator, Number(b));
        console.log(calculated);
        a = calculated;
        b = '';
        operator = '';
        state = 'operate';
    }

    if (target.classList.contains('digit')) {
        userInput.textContent = target.value;
    }

    history.textContent = a + operator + b;

});