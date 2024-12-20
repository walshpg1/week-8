// track score vars
let userScore = 0;
let computerScore = 0;

// Function for single round
function playRound(userChoice) {
    // Array of valid choices
    const choices = ["rock", "paper", "scissors"];

    // computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner of the round
    if (userChoice === computerChoice) {
        alert(`It's a tie! You both chose ${userChoice}.`);
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        userScore++;
        alert(`You win this round! ${userChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        alert(`You lose this round! ${computerChoice} beats ${userChoice}.`);
    }

    // Update the scores on page
    document.getElementById("game-result").textContent =
        `Score: You ${userScore} - ${computerScore} Computer`;

    // Check if there’s a winner
    if (userScore === 3 || computerScore === 3) {
        displayFinalResult();
    }
}

// Function to display the final result
function displayFinalResult() {
    const resultElement = document.getElementById("game-result");
    if (userScore === 3) {
        resultElement.style.fontSize = "200px";
        resultElement.style.color = "white";
        resultElement.textContent = "Winner Winner Chicken Dinner!";
    } else {
        resultElement.style.fontSize = "200px";
        resultElement.style.color = "red";
        resultElement.textContent = "Loser!!!";
    }

    // Disable buttons after game ends
    const buttons = document.querySelectorAll(".choice-button");
    buttons.forEach(button => button.disabled = true);
}

// Add event listeners to the choice buttons
const buttons = document.querySelectorAll(".choice-button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        playRound(userChoice);
    });
});
