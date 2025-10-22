// Get elements
const sketch = document.getElementById('sketch');
const grid16 = document.getElementById('grid16');
const grid32 = document.getElementById('grid32');
const eraser = document.getElementById('eraser');
const clearButton = document.getElementById('clear-button');
const colorsMenu = document.getElementById('colors-menu');

// Grid initialization setup
let background = 'white';
let color = 'black';

// Main functions
function createPixelGrid(height, width) {
    for (let i = 1; i <= height; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 1; j <= width; j++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            row.appendChild(pixel);
        }
        sketch.appendChild(row);
    }
}

function destroyPixelGrid() {
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}

function draw(event) {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = color;
    }
}

// Eraser handler
eraser.addEventListener('click', () => color = background);

// Clear grid
clearButton.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = background);
});

// Drawing
let held = false;
sketch.addEventListener('pointerdown', () => held = true);
sketch.addEventListener('pointerup', () => held = false);
sketch.addEventListener('pointerleave', () => held = false);
sketch.addEventListener('pointerdown', (event) => draw(event));
sketch.addEventListener('pointerover', event => {
    if (held === true) draw(event);
});

// Initialize grid
createPixelGrid(16, 16);

// Grid size handler
function setGridSize(size) {
    destroyPixelGrid();
    createPixelGrid(size, size);
}
grid16.addEventListener('click', () => setGridSize(16));
grid32.addEventListener('click', () => setGridSize(32));

// Color picker
const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');

function pickColor(element) {
    element.addEventListener('click', (event) => {
        let hidden = document.createElement('input');
        let chosenColor = event.target.style.backgroundColor;
        hidden.className = 'color-picker';
        hidden.type = 'color';
        hidden.click();
        hidden.addEventListener('input', () => {
            chosenColor = hidden.value
            element.style.backgroundColor = chosenColor;
            color = chosenColor;
        });
    });
}

colorsMenu.addEventListener('click', (event) => {
    color = event.target.style.backgroundColor;
});

pickColor(firstColor);
pickColor(secondColor);
pickColor(thirdColor);