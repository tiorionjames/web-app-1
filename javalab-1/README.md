**Keywords**

- Basic Data Types
- Conditionals
- Loops
- Arrays
- Objects
- Chrome `debugger` keyword
- VS Code
- Terminal
- Files / Folder Navigation
- Git & GitLab

**Note:** The information provided here is for your convenience. Please follow along in class and refer to the in-class discussion for what you should be doing.

**Getting started:**

Included in this repo are the following files:

- `app.js` - This is where you will write all of your code
- `index.html` - You will run this HTML file in your browser to run your code
- `style.css` - Ignore for this project. This is to style the page, but your app will not be interacting directly with the webpage.
- `readme.md` - That is what you are reading right now. The file is in markdown format (.md); it's straightforward way to organize text content that Gitlab understands. You don't need to know much more than that about it right now.

# Project: Guessing Game

Create a guessing game that allows users to guess a secret number. You will need to use the built-in “prompt()” function to capture the user input when the program is running. Once you have the user’s input, you can compare it with your secret number and use the built-in “alert()” function to send back the appropriate message.

The functions alert and prompt are built into the web browser. And since our javascript code runs in the web browser, we can use them.

Alert: <https://developer.mozilla.org/en-US/docs/Web/API/Window/alert>

Prompt: <https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt>
(Please read the documentation on prompt, make sure you understand what the
result is and the parameters)

-------------------------------------------------

### Features Checklist

- [ ] Guess Once
- [ ] Guess Again
- [ ] How Many Tries?
- [ ] History in the Making
- [ ] Guess Who?
- [ ] Play It Again!
- [ ] Guess Star.

-------------------------------------------------

### Feature 1: Guess once

Using alert and prompt, write a program that asks the user to guess a number and then tells them if they were correct, or if they should have guessed higher or lower.

*Main Function*

**Inputs:**

(Number) Guess

**Example Output:**

(String) “Higher”, if Guess is lower than the secret number

Or

(String) “Lower”, if Guess is higher than the secret number

Or

(String) “Correct!” , if Guess is equal to the secret number

-------------------------------------------------

### Feature 2: Guess again

If the guess is higher or lower, ask the user to guess again. Your program should keep doing this until the guess is the same as the secret number.
Check Your Work! Test out your code, make sure everything is working correctly. Also make sure you don’t see any errors in console.

Stuck? Try these exercises to get your brain going:

Before trying to solve a problem, do you understand what the problem is?

Write out what you are trying to accomplish in your own words

- Now, break it down into smaller steps.
- E.g. What would half done look like?

List out what things MIGHT work

Is this problem different from anything you’ve seen before?

- What makes it so different?
- What does that mean you need to research/google?

Is there anything familiar in the problem?

Super Stuck? If you are still stuck on how to do this, share what you have done above and you can ask for a hint, or hang on for the class solution.

Done early? Look for opportunities to refactor (we will cover refactoring later).
By far, the most important skill to start working on right now is making sure
others can read and interpret your code. If someone were to read your code,
would it be easy for them to read and understand without having you explain it?

Other things you can do:

Does your code seem repetitive? Use more functions

Name those functions appropriately.

If your functions are more than 5 lines or so, split it into smaller functions.

-------------------------------------------------

### Feature 3: How many tries?

Once the user guesses the correct answer, let’s add a feature that tells them how many guesses it took them until they made the correct guess.

*Main Function*

**Inputs:**

(Number) Guess

**Example Output:**

“

“

(String) “Correct! It only took you 5 guesses!” , if Guess is equal to the secret number

-------------------------------------------------

### Feature 4: History in the making

Let’s update the last feature so that instead of just the number of guesses, we let the user know all of their previous guesses before they get the right answer.

*Main Function*

**Inputs:**

(Number) Guess

**Example Output:**

“

“

(String) “Correct! Your previous guesses were 100, 30, 50, 55!” , if Guess is equal to the secret number

-------------------------------------------------

### Feature 5: Guess who?

Let’s add a feature that takes in the user’s name at the start of the game so we can make the messages more personalized.

**Example Output:**

(String) “Sorry Alice, Guess Higher”, if Guess is lower than the secret number

Or

(String) “Sorry Alice, Guess Lower”, if Guess is higher than the secret number

Or

(String) “That’s Correct Alice! Your previous guesses were 100, 30, 50, 55!” , if Guess is equal to the secret number

-------------------------------------------------

### Feature 6: Play again

Let’s add a feature that asks the user if they want to play again once they’ve made a correct guess.

**Inputs:**

(String) “Yes”, Run main game function

(String) “No”, do nothing

-------------------------------------------------

### Feature 7: Guess Star

Let’s add a feature that records the number of guesses for each unique name that is entered when the game is started. If someone with the same name played before, then when they get a correct answer, it tells them if they beat their previous attempt (less guesses is better).

**Example Output:**

(String) “That’s Correct Bob! And you beat your previous attempt by 3 fewer guesses!” , if Guess is equal to the secret number and “Bob” played before with more guesses.

(String) “That’s Correct Alice! You did better in your last game by 3 fewer guesses.” , if Guess is equal to the secret number and Alice played before with less guesses.

-------------------------------------------------

### Bonus - Feature 8: Scoreboard

Let’s add a feature that ALSO shows the user the top 5 players with the
least number of guesses, when the game is over. If there are less than 5
players, show all of them. You will have to make sure that when
a player is done playing, a new player is able to play the game and
enter their name.

**Example Output:**
(String) “Top 5 Players: Bernie, Alma, Charlie, Dave, Eve” , if Bernie, Alma, Charlie, Dave and Eve are the top 5 players with the least number of guesses.
(String) “Top 3 Players: Bernie, Alma, Charlie” , if Bernie, Alma and Charlie are the top 3 players with the least number of guesses.

-------------------------------------------------

### Bonus - Feature 9: The secret is out

Let’s add a feature that allows the user to set the secret number at
the start of the game. If they don’t set a number, then we will randomly
generate a number between 1 and 100.

-------------------------------------------------

### Bonus - Feature 10: There is a limit

Let’s add a feature that limits the number of guesses to 4. If the user
reaches the limit, then they lose the game and the secret number is revealed.

At the start of the game, ask the user if they want to play with a limit.
If they say yes, then set the limit to 4. If they say no, then there is no
limit. If they say yes, then the game ends when they reach the limit.
If they say no, then the game ends when they guess the correct number.

-------------------------------------------------

### Bonus - Feature 11: Winning streak

Let’s add a feature that keeps track of the number of games won in a row.

This mode only works if the user is playing in limit mode. If they are not
playing in limit mode, then this feature does not work.

Additionally when they win and play another round, it should automatically
make the next round in limit mode. If they win, then the next round is in
limit mode. If they lose, then the next round resets and
asks them if they want to play in limit mode.

When the game is over, it should tell them how many games they have won in a row.
If they have not won any games in a row, then it should say
“You have not won any games in a row yet.”

If they have won a game row, then for example it should say
“You have won 2 games in a row.” Followed by the all of the previous
ending messages.

-------------------------------------------------

### Bonus - Feature 12: Updated scoreboard

Let's update the score board to also include the number of games won in a row,
if any for each player.

**Example Output:**
(String) “Top 5 Players: Bernie (2), Alma (1), Charlie (0), Dave (0), Eve (0)” , if Bernie, Alma, Charlie, Dave and Eve are the top 5 players with the least number of guesses and the number in brackets is the number of games won in a row.
(String) “Top 3 Players: Bernie (2), Alma (1), Charlie (0)” , if Bernie, Alma and Charlie are the top 3 players with the least number of guesses and the number in parenthesis is the number of games won in a row.

-------------------------------------------------

### Bonus - Feature 13: Party Mode

Let’s add a feature that allows multiple players, where each player
enters their name at the start, and then they take turns guessing their
randomly generated number. Each player must guess their own
secret number within 4 or fewer guesses, or be eliminated from the game.
The game continues until there is only one player left, who is the winner.

If a player guesses the correct number, within the limit, they proceed to the
next round. If they do not guess within the limit, they lose, and only those
who guessed within the limit proceed to the next round.

The rounds continue until there is only one player left, who is the winner.

At the start of the game, ask how many players are playing, then
ask each player to enter their name. Then randomly generate a number for
each player.

Declare the Guessing Game champion at the end of the game.
**Example Output:**
(String) “Congratulations Alice! You are the Guessing Game champion!” , if Alice is the last player left.
(String) “Sorry Bob! You are eliminated from the game.” , if Bob is eliminated from the game.
(String) “Sorry Charlie! You are eliminated from the game.” , if Charlie is eliminated from the game.
(String) “Sorry Dave! You are eliminated from the game.” , if Dave is eliminated from the game.

For the winner, it should also include all of the previous ending messages.

-------------------------------------------------