
// Find the outer box in the HTML where the grid will live
const container = document.querySelector('.gridContainer');

// We want 16 x 16 = 256 small squares
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div'); // make a new <div> for each square
    square.classList.add('square'); // Give it a class so CSS can style it
    container.appendChild(square);  // Put this square inside the container

}

// Single listener on the container (event delegation )
// option 1

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')) {
        event.target.classList.add('drawn');
    }
});






// /// Select all the small grid squares
// const squares = document.querySelectorAll('.square');

// squares.forEach(square => {
 
//   square.addEventListener('mouseenter', () => {  // HOVER: this is what should draw
//     console.log('hovered');
//     square.classList.add('drawn');      // change color on hover
//   });

// });

console.log("Hello, Etch-a-Sketch!");

const testSquares = document.querySelectorAll('.square');