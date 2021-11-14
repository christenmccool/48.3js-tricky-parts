function guessingGame() {
  let answer = Math.floor(Math.random() * 100);
  let won = false;
  let numGuesses = 1;

  return function guess(num) {
    if (won) {
      return "The game is over, you already won!";
    }
    if (num === answer) {
      won = true;
      return `You win! You found ${answer} in ${numGuesses} guesses.`
    } else if (num < answer) {
      numGuesses++;
      return `${num} is too low!`;
    } else {
      numGuesses++;
      return `${num} is too high!`;
    }
  }
}

module.exports = { guessingGame };

