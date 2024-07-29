let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;

    let feedback = '';

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback = 'Please enter a number between 1 and 100.';
    } else if (guess < targetNumber) {
        feedback = 'Too low! Try again.';
    } else if (guess > targetNumber) {
        feedback = 'Too high! Try again.';
    } else {
        feedback = `Congratulations! You guessed the number in ${attempts} attempts.`;
        setTimeout(resetGame, 3000);
    }

    document.getElementById('feedback').innerText = feedback;
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').innerText = '';
    document.getElementById('guess').value = '';
}
