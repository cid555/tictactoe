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
        return true ;
    }
    return false;
}

function checkTie() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== "X" && board[i] !== "O") {
            return false;
        }
    }
    return true;
}

const message = document.querySelector(".message");
message.textContent = "Player 1's turn (X)";
const cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (done) {
            return;
        }

        const index = cell.dataset.index;

        if (cell.textContent !== "X" && cell.textContent !== "O") {
            cell.textContent = currentPlayer;
            board[index] = currentPlayer;

            if (checkWinner()) {
                message.textContent = "Player " + (currentPlayer === "X" ? "1" : "2") + " wins!";
                done = true;
                return;
            }

            if (checkTie()) {
                message.textContent = "It's a tie!";
                done = true;
                return;
            }

            if (currentPlayer === "X") {
                currentPlayer = "O";
                message.textContent = "Player 2's turn (O)";
            } else {
                currentPlayer = "X";
                message.textContent = "Player 1's turn (X)";
            }
        }
    });
});
