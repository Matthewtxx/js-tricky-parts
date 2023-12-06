function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);

    let attempts = 0;

    function makeGuess(guess){
        attempts++;

        if (guess < secretNumber) {
            return `Too Low. Attempts: ${attempts}`;
        } else if (guess > secretNumber) {
            return `Too High. Attempts: ${attempts}`;
        } else {
            return `Congratulations! You guessed in ${attempts} attempts.`;
        }
    }
    return makeGuess;
}

module.exports = { guessingGame };
