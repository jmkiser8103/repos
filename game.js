let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;
// Prompt user for a number between 1 and 10, or type 999 to exit.

// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.while (true) {
    userGuess = prompt("Guess a number between 1 and 10, or type 999 to exit:");

    // Convert input to a number
    userGuess = Number(userGuess);

    // Exit condition
    if (userGuess === 999) {
        alert("You exited the game.");
        break;
    }

    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Invalid input. Please enter a number between 1 and 10.");
        continue;
    }

    // Count attempts
    attempts++;

    // Check guess
    if (userGuess === randomNumber) {
        alert(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempt(s).`);
        break;
    } else if (userGuess < randomNumber) {
        alert("Too low! Try again.");
    } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
    }
}
