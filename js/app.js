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
let countDisplay = document.getElementById('movesCounter');
let cardsMatchedCount = 0;
let cardsSelectedCount = 0;
let cardsMatchCheck = [];
let card1Address = "";
let card2Address = "";
let card1 = "";
let card2 = "";


// Function declarations *************************************************************************


// Function to check selected cards for a match
function matchCards(card) {
    // Change card to open state to show that it has been selected
    card.setAttribute('class', 'card open show');
	// Assign card to index zero of the card check array
    if (cardsMatchCheck.length === 0) {
		card1Address = card;
        card1 = card.firstElementChild.className;
		cardsMatchCheck[0] = card.firstElementChild.className;
	// Assign card to index one of the card match array
    } else if (cardsMatchCheck.length === 1) {
		card2Address = card;
        card2 = card.firstElementChild.className;
		cardsMatchCheck[1] = card.firstElementChild.className;
    }
    //Check for card matched
	if (cardsMatchCheck.length === 2) {
		if (card1 === card2) {
			card1Address.setAttribute('class', 'card match');
			card2Address.setAttribute('class', 'card match');
			cardsMatchCheck = [];
			moveCount++;
			countDisplay.innerHTML = moveCount;
			console.log('moveCount = ' + moveCount); // Just for dev testing
			return;
		} else {
			setTimeout(function() {
				card1Address.setAttribute('class', 'card');
				card2Address.setAttribute('class', 'card');
			}, 1000);
			// Reset the card match array for the next selected pair of cards
			cardsMatchCheck = [];
			moveCount++;
			countDisplay.innerHTML = moveCount;
			console.log('moveCount = ' + moveCount); // Just for dev testing
			return;
		}
		moveCount++;
		console.log('moveCount = ' + moveCount); // Just for dev testing
	}
}



/*/ Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
	console.log('array.length = ' + array.length); // manual test code
	console.log('array = ' + array.element); // Manual test code

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
*/


// Programme code ********************************************************************************

// Gather cards from deck for array assignment
availableCards = document.getElementsByClassName('card');

// Initialise the deck
for (let i = 0; i < availableCards.length; i++) {
	availableCards[i].setAttribute('class', 'card');
}

// Initialise symbol deck
const symbolDeck = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'];


// Shuffle the deck	// DOES NOT WORK - write an alternative !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// Add event listeners using event delegation
for (let i = 0; i < availableCards.length; i++) {
        availableCards[i].addEventListener('click', function respondToTheClick() {
			// Check to ensure that the card has not been matched or selected already
            if (availableCards[i].classList.value === 'card') {
                if (cardsSelectedCount === 0) {
					// Pass the selected card to the matchCards() function
					matchCards(availableCards[i]);
            }
        }
		});
}



/*
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */