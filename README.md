# Memory Game Project

This is a project to apply JavaScript learned in section two of the FEWD Nanodegree course, "Web Programming with JavaScript".

## Game Play

### How to play

At the start of the game you will be presented with a deck containing sixteen cards, face down. Click on a card to turn it over to reveal the symbol on the card. If after selecting two cards, given that they are a match, the cards will remain face up and change colour to green. If they do not match they will return to a face down position. The tip for the game is to remember the position of the cards to aid in matching later cards with them.

### Scoring

The move counter will increment by one after each pair of cards is clicked. The star rating system will decrement from three stars after 14, and from two stars after 18 moves. The number of moves (pairs of cards turned over) is displayed at the top of the deck.

Elapsed time is displayed below the deck. This will commence after the first card is clicked.

The game is won by matching all cards in the deck.

### Starting a new game

This can be initiated by clicking 'OK' in the game won message pop-up or alternatively by clicking on the restart symbol above the deck.

## Original Project Instructions For Development of the Matching Game

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality


## Development Strategy

It's very important that you plan your project before you start writing any code. Break your project down into small pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick by brick.

* Start by building a very simple grid of cards.
	* Don't worry about styling, just get something clickable on the page.
* Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?
	*Add the functionality to handle clicks.
	* This should reveal the hidden side of each card.
* Work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?
* Work on the winning condition. How does your game “know” if a player has won?
* We recommend saving styling until the very end. Allow your game logic and functionality to dictate the styling.


Detailed requirements can be located in the [project rubric](https://review.udacity.com/#!/rubrics/591/view)

## Contributing

[This repository](https://github.com/udacity/fend-project-memory-game) is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
