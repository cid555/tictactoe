console.log("JS connected")

let board = ["1","2","3","4","5","6","7","8","9"];
let currentPlayer = "X";
let done = false;

function checkWinner() {
    if (board[0] === board[1] && board[1] === board[2]) {
        return true;
    }
    if (board[3] === board[4] && board[4] === board[5]) {
        return true;
    }
    if (board[6] === board[7] && board[7] === board[8]) {
        return true;
    }
    if (board[0] === board[3] && board[3] === board[6]) {
        return true;
    }
    if (board[1] === board[4] && board[4] === board[7]) {
        return true;
    }
    if (board[2] === board[5] && board[5] === board[8]) {
        return true;
    }
    if (board[0] === board[4] && board[4] === board[8]) {
        return true;
    }
    if (board[2] === board[4] && board[4] === board[6]) {
        return true;
    }
    return false;
}

const cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        const index = cell.dataset.index;

        if (cell.textContent !== "X" && cell.textContent !== "O") {

            cell.textContent = currentPlayer;
            board[index] = currentPlayer;

            if (checkWinner()) {
                console.log(currentPlayer + " wins!");
            }

            console.log(board)
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });
});