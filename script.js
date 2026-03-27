console.log("JS connected")

let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (cell.textContent !== "X" && cell.textContent !== "O") {
            cell.textContent = currentPlayer;

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });
});