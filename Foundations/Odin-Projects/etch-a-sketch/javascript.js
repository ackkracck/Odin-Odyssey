// Get elements
const sketch = document.getElementById('sketch');

// Variables
let held = false;
let gridSize = 16;
let color = 'black';

// Functions
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

function draw(event) {
    if (event.target.className === 'pixel') {
        event.target.style.backgroundColor = color;
    }
}

// Pointer hold handling
sketch.addEventListener('pointerdown', () => held = true);
sketch.addEventListener('pointerover', event => {
    if (held === true) draw(event);
});
sketch.addEventListener('pointerup', () => held = false);

// Initialize grid
createPixelGrid(gridSize, gridSize);