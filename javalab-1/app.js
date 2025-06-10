let leaderboard = [];

function startGame() {
    let playerCount = prompt("How many players are playing?");
    let players = [];
    let playerGuesses = {};
    let unlimitedGuesses = false; // Default to limited guesses

    // Ask if the player wants unlimited guesses or 4 guesses
    let guessMode = prompt("Do you want to play with unlimited guesses? (yes/no)").toLowerCase();
    if (guessMode === "yes") {
        unlimitedGuesses = true;
    }

    // Function to generate a random number between 1 and 100
    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    // Ask each player for their name and set their secret number
    for (let i = 0; i < playerCount; i++) {
        let playerName = prompt("Player " + (i + 1) + ", enter your name:");
        let secretNumber = prompt(playerName + ", set your secret number (or leave empty for a random number between 1 and 100):");
        if (secretNumber === "") {
            secretNumber = getRandomNumber();
        } else {
            secretNumber = parseInt(secretNumber);
        }

        players.push({ name: playerName, secretNumber: secretNumber });
        playerGuesses[playerName] = [];
    }

    // Function to track guesses and provide feedback
    function guessNumber(player) {
        let guesses = 0;
        let guess;
        while (unlimitedGuesses || guesses < 4) {  // Unlimited guesses or 4 guess limit
            guess = parseInt(prompt(player.name + ", guess the number:"));
            playerGuesses[player.name].push(guess);
            guesses++;

            if (guess === player.secretNumber) {
                alert(player.name + ", you guessed the number correctly in " + guesses + " guesses!");
                // Record the result in the leaderboard
                leaderboard.push({ name: player.name, guesses: guesses });
                break;
            } else if (guess < player.secretNumber) {
                alert("Your guess is too low! Try again.");
            } else {
                alert("Your guess is too high! Try again.");
            }

            if (!unlimitedGuesses && guesses === 4) {
                alert(player.name + ", you have used all your guesses. The correct number was: " + player.secretNumber);
                // Even if they didn't win, record their result in the leaderboard
                leaderboard.push({ name: player.name, guesses: guesses });
                break;
            }
        }
    }

    // Game loop for each player
    for (let i = 0; i < players.length; i++) {
        guessNumber(players[i]);
    }

    // Display leaderboard after the game
    function displayLeaderboard() {
        if (leaderboard.length === 0) {
            alert("No leaderboard results yet.");
            return;
        }

        let leaderboardString = "Leaderboard: \n";
        leaderboard.sort((a, b) => a.guesses - b.guesses);
        leaderboard.forEach(player => {
            leaderboardString += player.name + ": " + player.guesses + " guesses\n";
        });
        alert(leaderboardString);
    }

    // Ask if they want to play again (yes/no prompt)
    let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain === "yes") {
        leaderboard = []; // Reset leaderboard for the new game
        startGame(); // Restart the game if the user wants to play again
    } else {
        displayLeaderboard(); // Show the leaderboard at the end of the game
    }
}

startGame();
