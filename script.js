console.log("JS connected")

let currentPlayer = "X";

const button1 = document.getElementById("btn1");

button1.addEventListener("click", function() {
    if (button1.textContent === "1") {
        button1.textContent = currentPlayer;
    }
});