const newDeckBtn = document.getElementById('new-deck-btn');
const drawCardBtn = document.getElementById('draw-card-btn');
const cardsContainer = document.getElementById('cards-container');
const remainingEl = document.getElementById('remaining');
const winnerTextEl = document.getElementById('display-winner');
const myScoreEl = document.getElementById('my-score');
const botScoreEl = document.getElementById('bot-score');
let deckId = '';
let remaining = '';
let myScore = 0;
let botScore = 0;

newDeckBtn.addEventListener('click', () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
            remaining = data.remaining;
            remainingEl.textContent = remaining;
            winnerTextEl.textContent = 'Draw a card';
        })
})

drawCardBtn.addEventListener('click', () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.cards.length; i++) {
                cardsContainer.children[i].innerHTML = `
                <img src="${data.cards[i].image}"/>
                `
            }
            determineWinner(data.cards[0], data.cards[1])
            remaining = data.remaining
            remainingEl.textContent = remaining;
        })
})

function determineWinner(myCard, botCard) {
    const allCards = ['1', '2', '3', '4', '5', '6', '7', 
        '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'
    ];
    const myCardValue = allCards.indexOf(myCard.value); 
    const botCardValue = allCards.indexOf(botCard.value); 

    if (myCardValue > botCardValue) {
        winnerTextEl.textContent = 'You Won!';
        myScore++;
        myScoreEl.textContent = myScore;
    } else if (botCardValue > myCardValue) {
        winnerTextEl.textContent = 'The Bot Won!';
        botScore++;
        botScoreEl.textContent = botScore;
    } else {
        winnerTextEl.textContent = "It's War";
    }
}