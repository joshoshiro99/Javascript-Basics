//rock paper scissors console game
//
//input: player types rock, paper or scissors (case insensitive)
//output: result of player vs computer round
//
//1:Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
//
//2:Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//--Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//
//3:Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
//--Use prompt() to get input from the user.
//
//

function getComputerChoice() {
	let computerChoice = Math.floor(Math.random()*10);
	switch computerChoice:
	 case computerChoice <= 3:
	  return "Rock";
	 case computerChoice >3 && computerChoice <=6:
	  return "Paper";
	 case computerChoice <6;
	  return "Scissors";
}
