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
let a = '';
let operator = '';
let b = '';
let calculated;
let historyContent = '';

const userInput = document.getElementById('input');
const keypad = document.getElementById('keypad');
const history = document.getElementById('history');

keypad.addEventListener('click', (event) => {

    let target = event.target;
    let prevBoxShadow = target.style.boxShadow;
    target.style.boxShadow = '0px 0px grey';

    if (state === 'a' && target.classList.contains('digit')) {
        a += target.value;
        userInput.textContent = a;
    } else if (target.classList.contains('operator')) {
        state = 'operate';
        operator = target.value;
    } else if (state === 'operate' && target.classList.contains('digit')) {
        b += target.value;
        userInput.textContent = b;
        console.log(b);
    } else if (target.id === 'equals') {
        history.textContent = a + operator + b;
        calculated = operate(Number(a), operator, Number(b));
        a = calculated;
        b = '';
        operator = '';
        state = 'operate';
    }

    userInput.textContent = a + operator + b;

    setTimeout(() => { target.style.boxShadow = prevBoxShadow; }, 100);

});