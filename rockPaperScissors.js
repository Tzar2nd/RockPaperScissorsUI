let compScore = 0;
let playerScore = 0;

function computerPlay() {
    let compPlay = Math.floor(Math.random() * 3 + 1)
    
    switch(compPlay) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function capitalize(s) {
    return s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log("Draw! Rock vs Rock. Boom");
        return("draw");
    }
    
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You lose! Paper eats Rock");
        return("lose");
    }

    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win! Rock blunts Scissors");
        return("win");
    }

    if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win! Paper eats Rock");
        return("win");
    }

    if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log("Draw! Paper vs Paper. Crinkly");
        return("draw");
    }

    if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You lose! Paper snapped up by Scissors");
        return("lose");
    }

    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose! Scissors blunted by Rock");
        return("lose");
    }

    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win! Scissors eats up Paper");
        return("win");
    }
    
    if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log("Draw! Scissors *ching ching* Scissors");
        return("draw");
    }
}

function game(playerSelection) {    
    if (playerScore < 5 && compScore < 5) {

        // display computer icon
        computerSelection = computerPlay();
        compResult = document.getElementById('computer-result')
        compResult.style.backgroundImage = "url(/icons/" + computerSelection.toLowerCase() + ".svg)";
        compResult.style.visibility = 'visible';
        compResult.style.opacity = '100';

        // play game sound
        new Audio('/sounds/kick.wav').play();

        switch (playRound(playerSelection, computerSelection)) {
            case "win":
                playerScore += 1; 
                document.getElementById('player-score').textContent = playerScore;
                document.getElementById('result-message').textContent = "You won this round!";
                break;
            case "lose":
                compScore += 1;
                document.getElementById('computer-score').textContent = compScore;
                document.getElementById('result-message').textContent = "You lost this round :(";
                break;
            case "draw":
                document.getElementById('result-message').textContent = "DRAW!"
                break;
        }
    }

    if (playerScore >= 5 || compScore >= 5) {
        if (playerScore >= 5) {
            document.getElementById('result-message').textContent = "YOU WON THE GAME! Play again?";
        } 

        if (compScore >= 5) {
            document.getElementById('result-message').textContent = "YOU LOST TO THE COMPUTER :( Play again?";
        }
        resetButton = document.getElementById('play-again-button')
        resetButton.style.visibility = 'visible';
        resetButton.style.opacity = '100';
        resetButton.addEventListener('click', () => resetGame());
    }

}

function resetGame() {
    playerScore = 0;
    compScore = 0;

    document.getElementById('play-again-button').style.opacity = '0';
    document.getElementById('play-again-button').style.visibility = 'hidden';
    document.getElementById('player-score').textContent = 0;
    document.getElementById('computer-score').textContent = 0;
    document.getElementById('result-message').textContent = "";

    compResult = document.getElementById('computer-result')
    compResult.style.backgroundImage = "url(/icons/" + computerSelection.toLowerCase() + ".svg)";
    compResult.style.visibility = 'hidden';
    compResult.style.opacity = '0';
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => 
    button.addEventListener('click', () => game(button.getAttribute('button-key'))));


//game(prompt("Rock, Paper or Scissors? Huh?" ));  