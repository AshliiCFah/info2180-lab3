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
