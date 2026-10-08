let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate an integer from 0 to 9.
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Calculate the distance between two numbers.
const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

// Return true when the human wins, including ties.
const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanDistance = getAbsoluteDistance(humanGuess, target);
  const computerDistance = getAbsoluteDistance(computerGuess, target);

  return humanDistance <= computerDistance;
};

// Increase the winner's score.
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

// Advance to the next round.
const advanceRound = () => {
  currentRoundNumber += 1;
};


// Reset the values before starting the game.
humanScore = 0;
computerScore = 0;
currentRoundNumber = 1;
// Validate the input when Make a Guess is clicked.
document.getElementById('guess').addEventListener('click', event => {
  const input = document.getElementById('human-guess');
  const guess = Number(input.value);

  if (
    input.value === '' ||
    !Number.isInteger(guess) ||
    guess < 0 ||
    guess > 9
  ) {
    alert('Enter a whole number from 0 to 9.');

    // Prevent game.js from processing an invalid guess.
    event.stopImmediatePropagation();
  }
});