/*
 * JavaScript for Memory Game project for the Udacity FEWD Nanodegree course.
 * Author: Seamus Connolly
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
let timer = "";
const reset = document.getElementById('reset');


// Function declarations *************************************************************************


// Star rating function
function starRating(moveCount) {
		if(moveCount === 14) {
			let star = document.getElementById('star3');
			star.className = "fa fa-star-o";
		} else if(moveCount === 18) {
			let star = document.getElementById('star2');
			star.className = "fa fa-star-o";
		} else if(moveCount >= 24) {
			let star = document.getElementById('star1');
			star.className = "fa fa-star-o";
		}
		return;
}

function resetStars() {
	// Reset the rating stars to full
	document.getElementById('star1').className = "fa fa-star";
	document.getElementById('star2').className = "fa fa-star";
	document.getElementById('star3').className = "fa fa-star";
}


// Function to check selected cards for a match
function matchCards(card) {
    // Change card to open state to show that it has been selected
    card.setAttribute('class', 'card open show');
	// Assign card to index zero of the card check array
    if (cardsMatchCheck.length === 0) {
		card1Address = card;
        card1 = card.firstElementChild.className;
		cardsMatchCheck[0] = card.firstElementChild.className;
		// If this is the first time in then start the timer *************************************************************************
		if(moveCount === 0) {
			let sec = 0;
			function pad ( val ) { 
			return val > 9 ? val : "0" + val; 
			}

		timer = setInterval( function() {
			document.getElementById('seconds').innerHTML=pad(++sec%60);
			document.getElementById('minutes').innerHTML=pad(parseInt(sec/60,10));
			}, 1000);

		}
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
			// Reset the card match array for the next selected pair of cards
			cardsMatchCheck = [];
			moveCount++;
			starRating(moveCount);
			countDisplay.innerHTML = moveCount;
			cardsMatchedCount += 2;
			// Announce the win
			if (cardsMatchedCount === 16) {
				clearInterval(timer);
				let sec = document.getElementById('seconds').innerHTML;
				let min = document.getElementById('minutes').innerHTML;
				setTimeout(function() { // From here call the time and store in a variable for display in the win confirmation modal ********************************************************
					if(confirm('Congratulations, you win!' + ' ' + 'Time elapsed = ' + min + ':' + sec + '\nDo you wish to play again?')) {
						startGame (availableCards);
					} // for manual testing only. NEEDS TO BE BUILD FOR FINAL VERSION *****************************************
				}, 1000);
			}
			return;
		} else {
			// Wait for this time (0.5s) before non-matching cards are turned back over
			setTimeout(function() {
				card1Address.setAttribute('class', 'card');
				card2Address.setAttribute('class', 'card');
			}, 500);
			// Reset the card match array for the next selected pair of cards
			cardsMatchCheck = [];
			moveCount++;
			starRating(moveCount);
			countDisplay.innerHTML = moveCount;
			return;
		}
		moveCount++;
	}
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Start of game (set up) function
function startGame (availableCards) {
	// Initialise symbol deck
	let symbolDeck = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'];
	shuffle(symbolDeck);
	// Initialise the deck
	for (let i = 0; i < availableCards.length; i++) {
		availableCards[i].setAttribute('class', 'card');
		availableCards[i].firstElementChild.className = symbolDeck[i];
	}
	//Reset star ratings
	resetStars();

	// Add event listeners to cards using event delegation
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
}


// ***********************************************************************************************
// *************************************** Programme code ****************************************
// ***********************************************************************************************


// Gather cards from deck for array assignment
availableCards = document.getElementsByClassName('card');

// Function call to start the game
startGame(availableCards);

// Event Listener for reset button
reset.addEventListener('click', function reset() {
	// Reset variables
	moveCount = 0;
	countDisplay.innerHTML = 0;
	cardsMatchedCount = 0;
	// Statement to clear timer to zero *** the seconds assignment is a bit of a hack
	document.getElementById('seconds').innerHTML='00';
	document.getElementById('minutes').innerHTML=0;
	// Turn all cards face down
	for (let i = 0; i < availableCards.length; i++) {
		availableCards[i].setAttribute('class', 'card');
	}
	// Reset the rating stars to full
	resetStars();
	// Function call to start the game - initialise
	startGame(availableCards);
});