// Return a random choice for the computer: rock, paper or scissors
function getComputerChoice() {
    const randomNum = Math.floor( Math.random() * 3) + 1; // Generate a random integer between 1 and 3 ( inclusive)


    // Map numbers to choices
    if (randomNum === 1) return 'rock';
    if (randomNum === 2) return 'paper';
    return 'scissors'; // when randomNum === 3

}

// Global scores for human and computer, shared scores rounds
let humanScore = 0;
let computerScore = 0;

// DOM references 
const resultDiv = document.querySelector('#results'); // Area where text will be shown
const rockBtn = document.querySelector ('#rock'); // Rock button
const paperBtn = document.querySelector('#paper'); // Paper button
const scissorsBtn = document.querySelector('#scissors'); // Scissors button

 // DOM Manipulation style
resultDiv.style.fontSize = '20px';
resultDiv.style.marginTop = '20px';

rockBtn.style.fontSize = '16px';
rockBtn.style.marginRight = '10px';

paperBtn.style.fontSize = '16px';
paperBtn.style.marginRight = '10px';

scissorsBtn.style.fontSize = '16px';    
scissorsBtn.style.marginRight = '10px';    

// Helper function: Show a message inside the results <div>
function showMessage(text) {
    // Replace the content with the new message
    resultDiv.innerText = text;
}

// Play a single round, update scores and show result
function playRound(humanChoice, computerChoice) {
    // Case where both pick the same option
    if (humanChoice === computerChoice) {
        showMessage (`It's a tie! You both choose ${humanChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`);
        return; // Nothing else to do

    }

    // Determine if human wins
    const humanWins =
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper');

        // if human wins, increment humanScore; otherwise increment computerScore
        if (humanWins) {
            humanScore++;
            showMessage(`You win this round! ${humanChoice} beats ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`

            );
        }

    // After updating scores, check if someone has reached 5 points
    checkForWinner();
}

    // check if either player has reached 5 points and end the game if so
    function checkForWinner() {
        // if neither has 5 yet, just continue playing
        if (humanScore < 5 && computerScore < 5) return;

        // Decode who won based on scores
        if (humanScore > computerScore) {
            showMessage (`Congratulations! You win the game!
                Final score - You: ${humanScore}, Computer: ${computerScore}`
            );
        } else {
            showMessage (`Sorry, the computer wins the game. You lose!
                Final score - You: ${humanScore}, Computer: ${computerScore}`
                );
            }
    

        // Disable button so no more round can be played after the game ends
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

    }

// Event listeners for the buttons
rockBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice(); // get random choice for computer
    playRound('rock', computerChoice); // human chose rock
});

paperBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice(); // get random choice for computer
    playRound('paper', computerChoice); // human chose paper
})

scissorsBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice(); // get random choice for computer
    playRound('scissors', computerChoice); 
})