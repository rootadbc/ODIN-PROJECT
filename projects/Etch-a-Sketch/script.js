// Grab the grid container from the HTML
const container = document.querySelector('.gridContainer');


// Reusable function to create a grid of (size × size) squares
function makeGrid(size) {

  // 1. Clear out any existing squares in the container
  container.innerHTML = '';

  // 2. Calculate how big each square should be (percentage of container)
  //    Example: size = 16 → 100 / 16 = 6.25%
  const squareSize = 100 / size;

  // 3. Create size × size new squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');   // Make a new <div> for each square
    square.classList.add('square');                 // Give it a class so CSS can style it

    // Set the height and width (via flex-basis) based on the calculated size
    square.style.height = `${squareSize}%`;
    square.style.flex = `0 0 ${squareSize}%`;

    // Start with 0% darkness for this square (we will darken it on each hover)
    square.dataset.darkness = '0';

    // Put this square inside the container
    container.appendChild(square);
  }
}


// 4. Add the hover "draw" behavior using event delegation
//    One listener on the container handles all current and future squares
container.addEventListener('mouseover', (event) => {

  // Only react if the hovered element is a .square
  if (!event.target.classList.contains('square')) return;

  // The specific square we are currently over
  const square = event.target;

  // First time we touch this square, give it a random base RGB color
  if (!square.dataset.baseColor) {
    const r = Math.floor(Math.random() * 256);  // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Store base color (as "r,g,b") in a data attribute
    square.dataset.baseColor = `${r},${g},${b}`;
    // Ensure darkness starts at 0
    square.dataset.darkness = square.dataset.darkness || '0';
  }

  // Read current darkness (0.0 to 1.0). 0 = original color, 1 = full black
  let darkness = Number(square.dataset.darkness);

  // Increase darkness by 0.1 (10%) up to a max of 1
  if (darkness < 1) {
    darkness += 0.1;
    if (darkness > 1) darkness = 1;
    square.dataset.darkness = darkness.toString();
  }

  // Get the saved base color back as numbers
  const [r, g, b] = square.dataset.baseColor.split(',').map(Number);

  // Compute how much of the original color is left (1 - darkness)
  // factor = 1 → original color, factor = 0 → fully black
  const factor = 1 - darkness;

  // Mix the base color with black; each channel shrinks by factor
  const dr = Math.round(r * factor);
  const dg = Math.round(g * factor);
  const db = Math.round(b * factor);

  // Apply the new darker color to the square
  square.style.backgroundColor = `rgb(${dr}, ${dg}, ${db})`;
});


// 5. Build the initial 16×16 grid when the page loads
makeGrid(16);


// 6. Get a reference to the button at the top of the page
const resizeBtn = document.querySelector('#resizeBtn');


// 7. When the button is clicked, ask the user for a new grid size
resizeBtn.addEventListener('click', () => {

  // Show a popup asking for squares per side (e.g., 16, 32, 64)
  let input = prompt('Squares per side? (1–100)');

  // If the user pressed Cancel, stop here and keep the current grid
  if (input === null) return;

  // Convert the input string to an integer number
  let size = parseInt(input, 10);

  // Validate the number: must be between 1 and 100
  if (Number.isNaN(size) || size <= 0 || size > 100) {
    alert('Please enter a number between 1 and 100.');
    return; // Do not change the grid if the input is invalid
  }

  // Build a brand new grid with the requested size
  makeGrid(size);
});


// 8. Just a console message so you know the script ran
console.log('Hello, Etch-a-Sketch!');
