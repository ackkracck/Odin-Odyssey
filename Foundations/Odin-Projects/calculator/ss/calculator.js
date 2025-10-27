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
            return 'ERROR';
    }
}

let state = 'a';
let a = '';
let operator = '';
let b = '';
let calculated;
let historyContent = '';

let signA;
let signB;

const userInput = document.getElementById('input');
const keypad = document.getElementById('keypad');
const history = document.getElementById('history');

keypad.addEventListener('click', (event) => {
    let prevBoxShadow = event.target.style.boxShadow;
    event.target.style.boxShadow = '0px 0px grey';
    setTimeout(() => { event.target.style.boxShadow = prevBoxShadow; }, 100);

    if (state === 'a' && a === '' && (event.target.value === '+' || event.target.value === '-')) {
        signA = event.target.value;
        console.log(sign);
    } else if (state === 'a' && event.target.classList.contains('digit')) {
        a += event.target.value;
    } else if ((state === 'a' && a !== '' && event.target.classList.contains('operator') 
                && event.target.value !== '=') || (state === 'operate' && event.target.classList.contains('operator'))) {
        state = 'operate';
        operator = event.target.value;
    } else if ((state === 'operate' || state === 'b') && event.target.classList.contains('digit')) {
        state = 'b';
        b += event.target.value;
    } else if (state === 'b' && b !== '' && event.target.classList.contains('operator')) {
        state = 'a';
        history.textContent = signA + a + operator + b;
        calculated = operate(Number(sign + a), operator, Number(b));
        sign = '';
        a = calculated;
        b = '';
        operator = event.target.id === 'equals' ? '' : event.target.value; 
    }

    userInput.textContent = sign ? sign + a + operator + b: a + operator + b;

    console.log(state);
    console.log(`a: ${a}, operator: ${operator}, b: ${b}`);

});

let prevState;
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', (event) => {
    let prevBoxShadow = event.target.style.boxShadow;
    event.target.style.boxShadow = '0px 0px';
    setTimeout(() => {
        event.target.style.boxShadow = prevBoxShadow;
    }, (100));

    switch (state) {
        case 'a':
            a = a.slice(0, -1);
            prevState = state;
            console.log(prevState);
            break;
        case 'b':
            b = b.slice(0, -1);
            prevState = state;
            console.log(prevState);
            break;
        case 'operator':
            operator = '';
            state = prevState;
            console.log(prevState);
            break;
    }

    userInput.textContent = a + operator + b;
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', (event) => {
    let prevBoxShadow = event.target.style.boxShadow;
    event.target.style.boxShadow = '0px 0px';
    setTimeout(() => {
        event.target.style.boxShadow = prevBoxShadow;
    }, (100));
    state = 'a';
    a = '';
    b = '';
    operator = '';
    document.getElementById('history').textContent = '';
    document.getElementById('input').textContent = '';
});