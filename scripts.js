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

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while ((playerWins+computerWins)<5) {
        let playerSelection = prompt('Enter rock, paper, or scissors:');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if (result.includes('win')) {
            alert(result);
            playerWins++;
        }

        else if (result.includes('lose')) {
            alert(result);
            computerWins++;
        }

        else {
            alert(result);
        }
    }

    if (playerWins>computerWins) {
        let message = 'Congratulations! You win ' + playerWins+'-'+computerWins;
        alert(message);
        return;
    }

    else {
        let message = 'Sorry! You lost ' + computerWins + '-' + playerWins;
        alert(message);
        return;
    }
}

game();