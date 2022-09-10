// js script

const game = () => {
    //score counting global variables
    let playerScore = 0, computerScore = 0, moves = 0;


    // function to start the game
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']

        //function that calclautes the moves
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 10) % 3;
                const computerChoice = computerOptions[choiceNumber];

                // Function for the game winner
                playerRound(this.innerText, computerChoice)

                // Calling function after 10 moves
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }

    // Function to decide winner
    const playerRound = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.player-count');
        const computerScoreBoard = document.querySelector('.computer-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = ' It is a tie!'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Player wins!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Ends!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore && playerScore == 5) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
        }
        else if (playerScore < computerScore && computerScore == 5) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'No winner!';
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    // Calling playGame function inside game
    playGame();

}

// Calling the game function
game();



