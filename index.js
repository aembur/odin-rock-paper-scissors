let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
	return Math.floor(Math.random() * choices.length);
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
	}

	else { // player win
		return [-1, "You win! " + choices[playerChoice] + " beats " + choices[computerChoice] + "."]
	}
}