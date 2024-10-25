document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#board > div").forEach(div => div.classList.add("square"));
});


let turn = "X";
document.querySelectorAll("#board > div").forEach(square => {
    square.addEventListener("click", () => {
        if (square.textContent === "") {
            square.textContent = turn;
            square.classList.add(turn);
            turn = turn === "X" ? "O" : "X";
        }
    });
});


document.querySelectorAll("#board > div").forEach(square => {
    square.addEventListener("mouseover", () => square.classList.add("hover"));
    square.addEventListener("mouseout", () => square.classList.remove("hover"));
});

function checkWinner() {
    const squares = Array.from(document.querySelectorAll("#board > div")).map(div => div.textContent);
    // Check rows, columns, diagonals
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    winPatterns.some(pattern => {
        if (squares[pattern[0]] && squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
            document.getElementById("status").textContent = `Congratulations! ${squares[pattern[0]]} is the Winner!`;
            document.getElementById("status").classList.add("you-won");
            return true;
        }
        return false;
    });
}
