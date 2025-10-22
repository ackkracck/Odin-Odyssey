// Get elements
const sketch = document.getElementById('sketch');
const grid16 = document.getElementById('grid16');
const grid32 = document.getElementById('grid32');
const eraser = document.getElementById('eraser');
const clearButton = document.getElementById('clear-button');
const currentColor = document.getElementById('current-color');

// Grid setup
let background = 'white';
let color = 'black';

function createPixelGrid(height, width) {
    for (let i = 1; i < height; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 1; j < width; j++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
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
    if (event.target.className === 'pixel') {
        event.target.style.backgroundColor = color;
    }
}

// Drawing
let held = false;
sketch.addEventListener('pointerdown', () => held = true);
sketch.addEventListener('pointerleave', () => held = false);
sketch.addEventListener('pointerdown', (event) => draw(event));
sketch.addEventListener('pointerover', event => {
    if (held === true) draw(event);
});

// Initialize grid
createPixelGrid(16, 16);

// Eraser handler
eraser.addEventListener('click', () => color = background);

// Clear grid
clearButton.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = background);
});

// Current color handler
currentColor.addEventListener('click', () => {
    color = 'black';
});

// Grid size handler
grid16.addEventListener('click', () => {
    destroyPixelGrid();
    createPixelGrid(16, 16);
});

grid32.addEventListener('click', () => {
    destroyPixelGrid();
    createPixelGrid(32, 32);
});