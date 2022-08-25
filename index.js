const choices = ["Rock", "Paper", "Scissors"];
const first_to = 5;

let game_state = 1

// player and computer score variables
let pscore = 0;
let cscore = 0;

// text elements
const pscore_e = document.querySelector("#player-score > h1")
const cscore_e = document.querySelector("#computer-score > h1")
const outcome_text = document.querySelector("#round-outcome")

// buttons
const buttons = document.querySelector("#buttons")
buttons.childNodes.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(Number(button.id), getComputerChoice());
	});
});


// Takes in two ints (0, 1, 2) and returns the result in an array [outcome (0 = tie, 1 = player win, -1 computer win), string to be printed]
function playRound(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) { // tie
		outcome_text.textContent = "Tie! You both chose " + choices[playerChoice] + ".";
		return
	}

	// the choices array is sorted so that idx will lose against idx + 1 % 3 (since it wraps around):
	// [rock (0) < paper (1) < scissors (2) < rock (0) ...]
	if ((playerChoice + 1) % 3 === computerChoice) { // computer win
		outcome_text.textContent = "You lose! " + choices[computerChoice] + " beats " + choices[playerChoice] + ".";
		cscore++
		cscore_e.textContent = cscore
		return
	}
	
	else { // player win
		outcome_text.textContent = "You win! " + choices[playerChoice] + " beats " + choices[computerChoice] + ".";
		pscore++
		pscore_e.textContent = pscore
		return
	}
}


function getComputerChoice() {
	return Math.floor(Math.random() * choices.length);
}