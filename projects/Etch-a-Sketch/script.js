
// Find the outer box in the HTML where the grid will live
const container = document.querySelector('.gridContainer');

// We want 16 x 16 = 256 small squares
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div'); // make a new <div> for each square
    square.classList.add('square'); // Give it a class so CSS can style it
    container.appendChild(square);  // Put this square inside the container

}


//Select all the small grid squares
const squares = document.querySelectorAll('.square');

// Loop through each square and add hover listener
squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        console.log('hovered');
        square.style.backgroundColor = 'black';
    });
});



console.log("Hello, Etch-a-Sketch!");

const testSquares = document.querySelectorAll('.square');