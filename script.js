var secretNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;

function checkGuess() {
	var guess = document.getElementById("guess").value;
	guessCount++;

	if (guess == secretNumber) {
		document.getElementById("message").innerHTML = "Congratulations, you guessed the secret number in " + guessCount + " tries!";
	} else if (guess > secretNumber) {
		document.getElementById("message").innerHTML = "Your guess is too high. Try again.";
	} else if (guess < secretNumber) {
		document.getElementById("message").innerHTML = "Your guess is too low. Try again.";
	}

	if (guessCount >= 10) {
		document.getElementById("message").innerHTML = "Sorry, you have reached the maximum number of tries. The secret number was " + secretNumber + ".";
		document.getElementById("guess").disabled = true;
	}
}
