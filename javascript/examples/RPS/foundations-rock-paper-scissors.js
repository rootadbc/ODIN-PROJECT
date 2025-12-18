
function getComputerChoice() {
    
    // Generate random integer 1, 2, or 3 (equal probability)
    const randomNum = Math.floor(Math.random() * 3) + 1;

    // Map numbers to RPS choices
    if (randomNum === 1) return 'rock';
    if (randomNum === 2) return 'paper';
    return 'scissors';  // randomNum === 3
}


// Write the loggic to get the human choice

function getHumanChoice() {
    
    // Get user input and normalize to lowercase
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    
    // Validate against allowed choices
    if (['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    } else {
        // Handle invalid choice
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}


//Declare the players scores variables - * global scope *
let humanScore = 0;
let computerScore = 0;



// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }


}


    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);// Write the logic to play a full game

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(`Round ${round}: ${result}`);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();     