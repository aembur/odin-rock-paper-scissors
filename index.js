const choices = ["Rock", "Paper", "Scissors"];
const rounds = 5;


function game() {
	let score = [0, 0] // player score, computer score

	for (let i = 0; i < rounds; i++) {
		let result = playRound(getplayerChoice, getComputerChoice);

		console.log(result[1]) // print round outcome

		if (result[0] == -1) {
			score[1]++ // increment computer score
		} elif (result[0] == 1) {
			score[0]++ // increment player score
		}

		console.log("Player " + score[0] + " : " + score[1] + " Computer") // print current score
	}

	// end of game
	if (score[0] > score[1]) {
		console.log("You win!")
	} else {
		console.log("You lose!")
	}
}


// Takes in two ints (0, 1, 2) and returns the result in an array [outcome (0 = tie, 1 = player win, -1 computer win), string to be printed]
function playRound(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) { // tie
		return [0, "Tie! You both chose " + choices[playerChoice] + "."]
	}

	// the choices array is sorted so that idx will lose against idx + 1 % 3 (since it wraps around):
	// [rock (0) < paper (1) < scissors (2) < rock (0) ...]
	if (playerChoice + 1 % 3 == computerChoice) { // computer win
		return [-1, "You lose! " + choices[computerChoice] + " beats " + choices[playerChoice] + "."]
	} else { // player win
		return [-1, "You win! " + choices[playerChoice] + " beats " + choices[computerChoice] + "."]
	}
}


function getComputerChoice() {
	return Math.floor(Math.random() * choices.length);
}


function getplayerChoice() {
	while (true) { // keep asking player for input until a valid choice is received
		let playerInput = prompt("Input your choice:");
		let choice = choices.findIndex((element) => element == playerInput.toLowerCase());

		// findIndex returns -1 if the playerInput doesn't match any of the valid choices
		if (choice == -1) {
			console.log("Invalid choice. Please choose between \"Rock\", \"Paper\", or \"Scissors\"(case insensitive).")
		} else { // otherwise, findIndex returns the index of element that matches playerInput
			return choice
		}
	}
}