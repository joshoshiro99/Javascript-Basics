//Initial setup
let buttons = document.querySelectorAll('button');
buttons.forEach(
    function(node) {
        node.addEventListener('click', buttonListener);
    }
);
let playerScore= 0; 
const playerScoreElement = document.querySelector(".player_score");
let compScore = 0; 
const compScoreElement = document.querySelector(".comp_score");

//runs the main logic of the game
function buttonListener () {
	let playerSelection = this.className;
	
	let result = playRound(playerSelection);
	//announce a winner after 5 points
	const resultsElement = document.createElement("p");

	if(result){
		playerScore++;
		playerScoreElement.innerText = playerScore;
		if (playerScore >= 5 && playerScore > compScore){
			winLogic(1);
		}
	}
	else if(!result){
		compScore++;
		compScoreElement.innerText = compScore;
		if (compScore >= 5 && playerScore < compScore){
			winLogic(0);
		}
	}
	else {
		resultsElement.innerText = 'TIE';
	}
	
	document.body.appendChild(resultsElement);

}

function winLogic(winner) {
	let winMessage = '';
	if(winner){
		winMessage = 'Congrats! You won!';
	}
	else {
		winMessage = 'You lost!';
	}
	alert(winMessage);
}

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

function playRound(playerSelection) {
	//playerSelection = playerSelection.toLowerCase();
	let computerSelection = getComputerChoice();
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
