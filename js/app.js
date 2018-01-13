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
    // Change card to open state
    card.setAttribute('class', 'card open show');
    if (cardsMatchCheck.length === 0) {
		card1Address = card;
        card1 = card.firstElementChild.className;
		cardsMatchCheck[0] = card.firstElementChild.className;
        console.log('card1 is ' + card1); // Test message for development only
    } else if (cardsMatchCheck.length === 1) {
		card2Address = card;
        card2 = card.firstElementChild.className;
		cardsMatchCheck[1] = card.firstElementChild.className;
		
        console.log('card2 is ' + card2); // Test message for development only
    }
    //Check for card matched
	if (cardsMatchCheck.length === 2) {
		if (card1 === card2) {
			console.log('EXITO!');
			card1Address.setAttribute('class', 'card match');
			card2Address.setAttribute('class', 'card match'); // How do I address the original card?
			return;
		} else {
			console.log('NO JODA!');
			card1Address.setAttribute('class', 'card');
			card2Address.setAttribute('class', 'card');
			return;
		}
	}
	//INITIALISE VARIABLES AGAIN FOR NEXT CARD MATCH CHECK
	
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
                if (cardsSelectedCount === 0) {
                    console.log('Passing card'); // Test message for development only
					matchCards(availableCards[i]);
            }
        }
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