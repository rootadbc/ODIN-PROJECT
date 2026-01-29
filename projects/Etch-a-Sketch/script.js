
// Grab the grid container from the HTML
const container = document.querySelector('.gridContainer');

function makeGrid(size) { // Reusable function to create a grid of (size × size) squares

    // 1. Clear out any existing squares
    container.innerHTML = '';   

    // Calculae how big each square should be (percentage of container)
    const squareSize = 100 / size; // 100 / 16 = 5.25%


  // 2. Create size × size new squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');    // make a new <div> for each square
        square.classList.add('square');                  // Give it a class so CSS can style it
        square.style.height = `${squareSize}%`;    // Set the height based on the calculated size
        square.style.width = `${squareSize}%`;     // Set the width based on the calculated size
        square.style.flex = `0 0 ${squareSize}%`; // Set the flex basis to the calculated size
        
        container.appendChild(square);                   // Put this square inside the container

    }

  // 3. Add the hover "draw" behavior to every new square
    // container.addEventListener('mouseover', (event) => {
    //     if (event.target.classList.contains('square')) {
    //         event.target.classList.add('drawn');
    //     }
    // });

    // Alternative hover method: using mouseenter on each square
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('drawn'); // adds the CSS class that turns it black

        });
    });


};




// Build the initial 16×16 grid when the page loads
makeGrid(16);

// Get a reference to the button at the top of the page
const resizeBtn = document.querySelector('#resizeBtn');

// When the button is clicked, ask the user for a new grid size
resizeBtn.addEventListener('click', () => {
    let input = prompt('square per side? (max 100)');   // Show a popup asking for squares per side (e.g., 16, 32, 64)
    if (input === null) return;  // If the user pressed Cancel, stop here and keep the current grid

    let size = parseInt(input, 10); // Convert the input string to an integer number

    // Validate the number: must be between 1 and 100
    if(Number.isNaN(size) || size <= 0 || size > 100) {
        alert('Please enter a number between 1 and 100.');
        return; // do not change the grid if the input is invalid
    }

    // Build a brand new grid with the requested size
    makeGrid(size);
});


// Just a console message so you know the script ran
console.log('Hello, Etch-a-Sketch!');

// /// Select all the small grid squares
// const squares = document.querySelectorAll('.square');

// squares.forEach(square => {
 
//   square.addEventListener('mouseenter', () => {  // HOVER: this is what should draw
//     console.log('hovered');
//     square.classList.add('drawn');      // change color on hover
//   });

// });

// console.log("Hello, Etch-a-Sketch!");

// const testSquares = document.querySelectorAll('.square');