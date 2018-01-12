/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Variable declarations *************************************************************************
// Required Variables
let moveCount = 0;
let cardsSelectedCount = 0;
let cardsMatchedCount = 0;
let cardsArray = [];
let card1 = ""; 
let card2 = "";

// Function declarations *************************************************************************
// Function to check selected cards for a match
function matchCards(card, count) {
    // Change card to open state
    card.setAttribute('class', 'card open show');
    if (count === 0) {
        card2 = card;
        console.log('Ready to check card one');
    } else if (count === 1) {
        card2 = card;
        console.log('Ready to check card two');
    }
    //Check for card matched
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Programme code ********************************************************************************

// Gather cards from deck for array assignment
availableCards = document.getElementsByClassName('card');

// Add event listeners using event delegation
for (let i = 0; i < availableCards.length; i++) {
        availableCards[i].addEventListener('click', function respondToTheClick() {
            if (availableCards[i].classList.value === 'card') {
                console.log('Hidden card ' + cardsSelectedCount);
                if (cardsSelectedCount === 0) {
                    console.log('Passing card one');
                    matchCards(availableCards[i], cardsSelectedCount);
                } else if (cardsSelectedCount === 1) {
                    console.log('Passing card two');
                    matchCards(availableCards[i], cardsSelectedCount);
                }
                cardsSelectedCount++;
            } 
            console.log('A card was clicked.');
        });
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */