// Exercise 1 - Add "square" class to each div inside the board
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#board > div").forEach(div => div.classList.add("square"));
});

let turn = "X"; 

// Exercise 2 - Add X or O to the square when clicked
document.querySelectorAll("#board > div").forEach(square => {
    square.addEventListener("click", () => {
        if (square.textContent === "") { 
            square.textContent = turn;   
            square.classList.add(turn);  
            checkWinner();              
            turn = turn === "X" ? "O" : "X"; 
        }
    });
});

// Exercise 3 - Hover effect (change style when hovering over a square)
document.querySelectorAll("#board > div").forEach(square => {
    square.addEventListener("mouseover", () => square.classList.add("hover"));
    square.addEventListener("mouseout", () => square.classList.remove("hover"));
});

// Exercise 4 - Check for the winner
function checkWinner() {
    const squares = Array.from(document.querySelectorAll("#board > div")).map(div => div.textContent);
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    // Loop through each win pattern to see if there's a winner
    winPatterns.some(pattern => {
        if (squares[pattern[0]] && squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
            document.getElementById("status").textContent = `Congratulations! ${squares[pattern[0]]} is the Winner!`;
            document.getElementById("status").classList.add("you-won"); 
            return true; 
        }
        return false; 
    });
}

// Exercise 5 - Restart the game when the "New Game" button is clicked
document.querySelector(".btn").addEventListener("click", () => {
    // Reset the board
    document.querySelectorAll("#board > div").forEach(square => {
        square.textContent = "";           
        square.classList.remove("X", "O");
    });

    // Reset the status message and remove the "you-won" class
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");

    turn = "X"; 
});
