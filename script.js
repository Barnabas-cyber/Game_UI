// js script
//score counting variables
let playerScore = 0, computerScore = 0, moves = 0;

// function to decide the winner 
function playerRound(playerSelection, computerSelection) {
    //empty string
    let results = '';
    //rock or paper 
    if (playerSelection.toUpperCase() == computerSelection) {
        results.textContent = `It is a tie!`
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'paper') {
        results.textContent = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}}`
        computerScore++;
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'rock') {
        results.textContent = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
    }
    //paper or scissors
    if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'scissors') {
        results = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'paper') {
        results.textContent = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
    }
    // rock or scissors
    if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'rock') {
        results = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'scissors') {
        results.textContent = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
    }

    return results;
}


//calling the game function
// game()



