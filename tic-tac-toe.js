document.addEventListener("DOMContentLoaded", () => {
    // Exercise 1 - Add "square" class to each div inside the board
    document.querySelectorAll("#board > div").forEach(div => div.classList.add("square"));

    // Initialize variables for turn and game state
    let turn = "X";
    const gameState = ["", "", "", "", "", "", "", "", ""]; // 3x3 grid initialized to empty strings

    // Exercise 2 - Add X or O to the square when clicked
    document.querySelectorAll("#board > div").forEach((square, index) => {
        square.addEventListener("click", () => {
            // Check if the square is already occupied
            if (square.textContent === "") {
                square.textContent = turn;
                square.classList.add(turn);
                gameState[index] = turn;
                checkWinner(gameState);

                // Switch turns
                turn = turn === "X" ? "O" : "X";
            }
        });

        // Exercise 3 - Hover effect (change style when hovering over a square)
        square.addEventListener("mouseover", () => {
            if (square.textContent === "") {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    // Exercise 4 - Check for the winner
    function checkWinner(state) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        // Check for a winning pattern
        winPatterns.some(pattern => {
            if (state[pattern[0]] && state[pattern[0]] === state[pattern[1]] && state[pattern[1]] === state[pattern[2]]) {
                document.getElementById("status").textContent = `Congratulations! ${state[pattern[0]]} is the Winner!`;
                document.getElementById("status").classList.add("you-won");
                return true;
            }
            return false;
        });
    }

    // Exercise 5 - Restart the game when the "New Game" button is clicked
    document.querySelector(".btn").addEventListener("click", () => {
        // Clear the board and reset game state
        document.querySelectorAll("#board > div").forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        // Reset the game state and status message
        gameState.fill("");
        document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");

        // Reset the turn to "X"
        turn = "X";
    });
});
