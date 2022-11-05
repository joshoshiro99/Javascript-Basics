//rock paper scissors console game
//
//input: player types rock, paper or scissors (case insensitive)
//output: result of player vs computer round
//
//XX1:Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
//
//XX2:Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//--Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//
//3:Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
//--Use prompt() to get input from the user.
//

let buttons = document.querySelectorAll('button');
buttons.forEach(
    function(node) {
        node.addEventListener('click', playRound);
    }
);


//is there a way to get the query selector to apply to all buttons (yes you can apply to all buttons) and apply the class of the node to the subsequent function call? e.g: 
//html:
//<button class='class1'>
//javascript: 
//let buttons = document.queryselector('button');
//
function getComputerChoice() {
	let computerChoice = Math.floor(Math.random()*10);
	switch (computerChoice!=undefined){
	 case computerChoice <= 3:
	  return "rock";
	 case computerChoice >3 && computerChoice <=6:
	  return "paper";
	 case computerChoice > 6:
	  return "scissors";
	}
}

function playRound() {
	//playerSelection = playerSelection.toLowerCase();
	let computerSelection = getComputerChoice();
	let playerSelection = this.className;
	switch (playerSelection) {
		case "rock":
			if (computerSelection == "scissors") {
				return 1;
			}
			else if (computerSelection == "paper") {
				return 0; 
			}
			else {
				return null;
			}
		case "paper":
			if (computerSelection == "scissors") {
				return 0;
			}
			else if (computerSelection == "rock") {
				return 1;
			}
			else {
				return null;
			}
		case "scissors":
			if (computerSelection == "paper") {
				return 1;
			}
			else if (computerSelection == "rock") {
				return 0;
			}
			else {
				return null;
			}
		default:
			return undefined;
	}
}

// function checkPlayerInputisValid(playerSelection) {
// 	if (typeof playerSelection === "string"){
// 		if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return false;
// 	}
// }

/*
function game(){
	let playerSelection = prompt("Please input your selection: ");
	if (playerSelection.toLowerCase() == "exit") return false;
	if (!checkPlayerInputisValid(playerSelection)){
		console.log("Please input a correct value");
		round--;
	} else {
		let computerSelection = getComputerChoice();

		let result = playRound(playerSelection, computerSelection);
		let message;

		if (result == null){
			message = `This was a tie. Both players chose ${playerSelection}.`;
		} else if (result){
			message = `You WIN! ${playerSelection} beats ${computerSelection}.`;
		} else {
			message = `You LOSE! ${computerSelection} beats ${playerSelection}.`;
		} 
		console.log(message)
	}
}
*/