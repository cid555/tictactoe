console.log("JS connected")

function return_default_numbers() {
    return ["1","2","3","4","5","6","7","8","9"];
}

let playerX = "Player 1";
let playerO = "Player 2";
let board = return_default_numbers();
let currentPlayer = "X";
let done = false;

function checkWinner() {
        if (board[0] === board[1] && board[1] === board[2]) {
            return [0,1,2];
        }
        if (board[3] === board[4] && board[4] === board[5]) {
            return [3,4,5];
        }
        if (board[6] === board[7] && board[7] === board[8]) {
            return [6,7,8];
        }
        if (board[0] === board[3] && board[3] === board[6]) {
            return [0,3,6];
        }
        if (board[1] === board[4] && board[4] === board[7]) {
            return [1,4,7];
        }
        if (board[2] === board[5] && board[5] === board[8]) {
            return [2,5,8];
        }
        if (board[0] === board[4] && board[4] === board[8]) {
            return [0,4,8];
        }
        if (board[2] === board[4] && board[4] === board[6]) {
            return [2,4,6];
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

const playerXInput = document.getElementById("playerXInput");
const playerOInput = document.getElementById("playerOInput");
const startBtn = document.getElementById("startBtn");
const message = document.querySelector(".message");
message.textContent = "";

startBtn.addEventListener("click", function() {
    playerX = playerXInput.value || "Player 1";
    playerO = playerOInput.value || "Player 2";

    message.textContent = playerX + "'s turn (X)";
});

const cells = document.querySelectorAll(".cell");
cells.forEach(function(cell) {
    message.textContent = playerX + "'s turn (X)";
    cell.addEventListener("click", function() {
        if (done) {
            return;
        }
        const index = cell.dataset.index;

        if (board[index] !== "X" && board[index] !== "O") {
            cell.textContent = currentPlayer;
            board[index] = currentPlayer;

            let winningCells = checkWinner();

            if (winningCells) {
                message.textContent = (currentPlayer === "X" ? playerX : playerO) + " wins!";

                cells[winningCells[0]].classList.add("winner");
                cells[winningCells[1]].classList.add("winner");
                cells[winningCells[2]].classList.add("winner");
                //cells[winningCells[0]].style.backgroundColor = "yellow";
                //cells[winningCells[1]].style.backgroundColor = "yellow";
                //cells[winningCells[2]].style.backgroundColor = "yellow";

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
                message.textContent = playerO + "'s turn (O)";
            } else {
                currentPlayer = "X";
                message.textContent = playerX + "'s turn (X)";
            }
        }
    });
});

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
    board = return_default_numbers();
    currentPlayer = "X";
    done = false;
    message.textContent = playerX + "'s turn (X)";

    cells.forEach(function(cell) {
        cell.textContent = cell.dataset.index * 1 + 1;
        cell.classList.remove("winner");
    });

});
