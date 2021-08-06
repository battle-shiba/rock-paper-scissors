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
        return 'Tie. No winner.';
    }

    switch(playerSelection)  {

        case 'rock': 
            if (computerSelection=='scissors') {
                return 'You win! Rock beats Scissors';
            }
            else {
                return 'You lose! Paper beats Rock';
            }


        case 'paper': 
            if (computerSelection=='rock') {
                return 'You win! Paper beats Rock';
            }
            else {
                return 'You lose! Scissors beats Paper';
            }

        case 'scissors': 
            if (computerSelection=='paper') {
                return 'You win! Scissors beats Paper';
            }
            else {
                return 'You lose! Rock beats Scissors';
            }

        default:
            return 'Must choose either rock, paper, or scissors';




    }

}
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));