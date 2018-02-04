/*
 * @fileOverview JavaScript for Memory Game project for the Udacity FEWD Nanodegree course.
 * @author <a href+"mailto:sghconnolly@gmail.com">Seamus Connolly</a>
 *
 * TODO:
 * Bugs: I still need to work on code to prevent rapid selection of multiple tiles which will currently break the code.
 * Comment: I am sure that the code is unnecessarily verbose.
 * I shall return at a later date once I have learned more JS in order to refactor the code.
 * I have avoided use of jQuery in response to the course content that jQuery is becoming less relevant as JS improves.
 *
 */


/* Variable declarations *************************************************************************/

/** Required Variables */
let moveCount = 0;
let countDisplay = document.getElementById('movesCounter');
let cardsMatchedCount = 0;
let cardsMatchCheck = [];
let card1Address = "";
let card2Address = "";
let card1 = "";
let card2 = "";
let timer = "";
const reset = document.getElementById('reset');
// Two variables to set the moveCount where the star rating will decrement
const twoStars = 14;
const oneStar = 18;


/* Function declarations *************************************************************************/

/** Star rating function
 * @function [starRating]
 * @description This function will evaluate the number of stars to be displayed at end of game
 * @param {number} moveCount This parameter contains the current movecount of turns taken by the player at that time
 * @return {number} This parameter will return the appropriate score (star rating) to the matchCards() function
 */
function starRating(moveCount) {
    let star;
    if (moveCount === twoStars) {
        star = document.getElementById('star3');
        star.className = "fa fa-star-o";
        star = 2;
    } else if (moveCount === oneStar) {
        star = document.getElementById('star2');
        star.className = "fa fa-star-o";
        star = 1;
    }
    return star;
}


/**
* @function [resetStars]
* @description Resets stars rating to game start condition
* @param '' This function accepts no parameters
* @return No value is returned, the return simply passes back flow control
*/
function resetStars() {
    // Reset the rating stars to full
    document.getElementById('star1').className = "fa fa-star";
    document.getElementById('star2').className = "fa fa-star";
    document.getElementById('star3').className = "fa fa-star";
}


/**
 * @function [matchCards]
 * @description Function to check selected pair of cards to check for a match
 * @param {object} card This parameter passes in the user selected card from the availableCards array
 * @return No value is returned, the return just passes back flow control
 */
function matchCards(card) {
    // Change card to open state to show that it has been selected
    card.setAttribute('class', 'card open show');
    // Assign card to index zero of the card check array
    if (cardsMatchCheck.length === 0) {
        card1Address = card;
        card1 = card.firstElementChild.className;
        cardsMatchCheck[0] = card.firstElementChild.className;
        // If this is the first time in then start the timer
        if (moveCount === 0) {
            let sec = 0;
            function pad(val) {
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
                // stops the timer
                clearInterval(timer);
                let sec = document.getElementById('seconds').innerHTML;
                let min = document.getElementById('minutes').innerHTML;
                // Get correct score for game won message
                let score = 3;
                if (moveCount >= twoStars && moveCount < oneStar) {
                             score = 2;
                } else if (moveCount >=oneStar) {
                             score = 1;
                }


                // Call the game won modal after the time indicated by the setTimeout second parameter
                let nounType;
                if (score > 1) {
                             nounType = 'stars';
                } else {
                             nounType = 'star';
                }
                setTimeout(function() {
                    if(confirm('Congratulations, you win!' +
                            '\n\nYou completed the game in ' + moveCount +' moves in a time of ' + min + ':' + sec +
                            '\n\nYou earned ' + score + ' ' + nounType + ' in this game' +
                            '\n\nDo you wish to play again?')) {
                        startGame (availableCards);
                    }
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


/**
 * @function [shuffle]
 * @description This function provides a random shuffle of the cards symbols array. Shuffle function from http://stackoverflow.com/a/2450976 - supplied in starter code from Udacity GitHub site
 * @param {object} array This is an array object passed from the startGame() function
 * @return The shuffled symbol array is returned to the startGame() function
 */
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


/**
 * @function [startGame]
 * @description Start of game (set up) function will shuffle deck and initialise game variables
 * @param {object} availableCards The parameter receives an array object containing an HTMLCollection
 * @return This function does not return a temporaryValue
 */
function startGame(availableCards) {
    let cardsSelectedCount = 0;
    // Initialise symbol deck
    const symbolDeck = [
        'fa fa-linux',
        'fa fa-linux',
        'fa fa-github',
        'fa fa-github',
        'fa fa-apple',
        'fa fa-apple',
        'fa fa-jsfiddle',
        'fa fa-jsfiddle',
        'fa fa-chrome',
        'fa fa-chrome',
        'fa fa-twitter',
        'fa fa-twitter',
        'fa fa-html5',
        'fa fa-html5',
        'fa fa-windows',
        'fa fa-windows'
    ];
    shuffle(symbolDeck);
    // Initialise the deck
    for (let i = 0; i < availableCards.length; i++) {
        availableCards[i].setAttribute('class', 'card');
        availableCards[i].firstElementChild.className = symbolDeck[i];
    }
    //Reset star ratings
    resetStars();
    // Reset variables
    moveCount = 0;
    countDisplay.innerHTML = 0;
    cardsMatchedCount = 0;
    clearInterval(timer);
    // Statement to clear timer to zero *** the seconds assignment is a bit of a hack
    document.getElementById('seconds').innerHTML='00';
    document.getElementById('minutes').innerHTML=0;


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
    // Turn all cards face down
    for (let i = 0; i < availableCards.length; i++) {
        availableCards[i].setAttribute('class', 'card');
    }
    // Reset the rating stars to full
    resetStars();
    // Function call to start the game - initialise
    startGame(availableCards);
});