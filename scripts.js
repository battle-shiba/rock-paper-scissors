function computerPlay() {
    let value = Math.floor(Math.random()*3);

    switch(value) {

        case 0:
            return 'rock';
            
        case 1:
            return 'paper';

        case 2:
            return 'scissors';
        

    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    

    if (playerSelection==computerSelection) {
        return 'Tie.';
    }

    switch(playerSelection)  {

        case 'rock': 
            if (computerSelection=='scissors') {
                playerWins++;
                return 'Player scores. Rock beats Scissors';
                
            }
            else {
                computerWins++;
                return 'Computer scores. Paper beats Rock';
            }


        case 'paper': 
            if (computerSelection=='rock') {
                playerWins++;
                return 'Player scores. Paper beats Rock';
            }
            else {
                computerWins++;
                return 'Computer scores. Scissors beats Paper';
            }

        case 'scissors': 
            if (computerSelection=='paper') {
                playerWins++;
                return 'Player scores. Scissors beats Paper';
            }
            else {
                computerWins++;
                return 'Computer scores. Rock beats Scissors';
            }

        




    }

}

const buttons = document.querySelectorAll('button');
const gameContainer = document.querySelector('#game-container');



let playerWins = 0;
let computerWins = 0;

function endGame() {
    playerWins = 0;
    computerWins = 0;
    score.textContent=playerWins+'-'+computerWins;
}
function game() {
    
    let result;
    
    const score = document.createElement('div');
    score.textContent=playerWins+'-'+computerWins;
    gameContainer.appendChild(score);

    buttons.forEach( (button) => {

        button.addEventListener('click', function() {
            let computerSelection = computerPlay();
            result = playRound(button.id, computerSelection);
            score.textContent=playerWins+'-'+computerWins+' '+result;  
            
            if (playerWins==5) {
                alert('You win!' + ' ' + playerWins+'-'+computerWins);
                endGame();
            }

            if (computerWins==5) {
                alert('You lose!' + ' ' + playerWins+'-'+computerWins);
                endGame();
            }

            
            });
    });
    


    
}

game();