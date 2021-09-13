let playerTurn = true;
let playerScore = 0;
let botScore = 0;

const playerScoreElement = document.getElementById('player-score');
const botScoreElement = document.getElementById('bot-score');

const playerDice = document.getElementById('player-dice');
const botDice = document.getElementById('bot-dice');

document.getElementById('btn').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    playerDice.textContent = '-';
    botDice.textContent = '-';
    
    if (playerTurn) {
        playerScore += randomNumber;
        playerScoreElement.textContent = playerScore;
        playerDice.textContent = randomNumber;
    } else {
        botScore += randomNumber;
        botScoreElement.textContent = botScore;
        botDice.textContent = randomNumber;
    }
    playerTurn = !playerTurn;
})