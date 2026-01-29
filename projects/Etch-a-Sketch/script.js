// 
// Find the outer box in the HTML where the grid will live
const container = document.querySelector('.gridContainer');

// We want 16 x 16 = 256 small squares
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div'); // make a new <div> for each square
    square.classList.add('square'); // Give it a class so CSS can style it
    container.appendChild(square);  // Put this square inside the container

}

console.log("Hello, Etch-a-Sketch!");