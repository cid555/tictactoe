console.log("JS connected")

let board = ["1","2","3","4","5","6","7","8","9"];
let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        const index = cell.dataset.index;

        if (cell.textContent !== "X" && cell.textContent !== "O") {

            cell.textContent = currentPlayer;
            board[index] = currentPlayer;
            console.log(board)
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });
});