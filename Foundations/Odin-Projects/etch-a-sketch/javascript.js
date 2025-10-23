// Get elements
const sketch = document.getElementById('sketch');
const grid8 = document.getElementById('grid8');
const grid16 = document.getElementById('grid16');
const eraser = document.getElementById('eraser');
const clearButton = document.getElementById('clear-button');
const colorsMenu = document.getElementById('colors-menu');
const customSize = document.getElementById('custom-size');

// Initialization
let gridSize = 8;
let background = '#ffffff';
let color = '#000000';
document.querySelectorAll('.color-picker').forEach(item => item.style.backgroundColor = item.value);


// Main functions
function createPixelGrid(size) {
    for (let i = 1; i <= size; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 1; j <= size; j++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = background;
            row.appendChild(pixel);
        }
        sketch.appendChild(row);
    }
}

function destroyPixelGrid() {
    sketch.innerHTML = '';
}

function draw(event) {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = color;
    }
}

// Eraser handler
eraser.addEventListener('click', () => {
    color = background
    eraser.style.backgroundColor = '#ff0000';
    eraser.style.color = '#ffffff';
});

// Clear grid
clearButton.addEventListener('click', () => {
    resetGrid(gridSize);
    color = '#000000';
    eraser.style.backgroundColor = '#ffffff';
    eraser.style.color = '#000000';
});

// Drawing
let held = false;
sketch.addEventListener('pointerdown', (event) => {
    held = true;
    draw(event);
});
window.addEventListener('pointerup', () => held = false);
sketch.addEventListener('pointerleave', () => held = false);
sketch.addEventListener('pointerover', event => {
    if (held === true) draw(event);
});

// Initialize grid
createPixelGrid(gridSize);

// Grid size handler
function resetGrid(size) {
    gridSize = size;
    destroyPixelGrid();
    createPixelGrid(gridSize);
    color = '#000000';
    eraser.style.backgroundColor = '#ffffff';
    eraser.style.color = '#000000';
    console.log('reset');
}

grid8.addEventListener('click', () => resetGrid(8));
grid16.addEventListener('click', () => resetGrid(16));

customSize.addEventListener('input', (event) => {
    let userInput = parseInt(event.target.value);
    if (Number.isInteger(userInput) && userInput >= 2 && userInput <= 100) {
        gridSize = userInput;
        resetGrid(userInput);
    }
});

// Color picker
colorsMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('color-picker')) {
        color = event.target.value
        eraser.style.backgroundColor = '#ffffff';
        eraser.style.color = '#000000';
    };
});

colorsMenu.addEventListener('input', (event) => {
    if (event.target.classList.contains('color-picker')) {
        color = event.target.value;
        console.log(color);
        event.target.style.backgroundColor = color;
    }
});