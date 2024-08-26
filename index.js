let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector(".reset");
let winnerButton = document.querySelector("#winner");
let body = document.querySelector('body');
var player1 = prompt("Player 1 : ");

var player2 = prompt("Player 2 : ");

let turnO = true

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O"
            turnO = false
        }
        else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true;
        box.style.backgroundColor = "burlywood"

        checkWinner();
    })
})

winner = (winnerName) => {
    boxes.forEach(box => {
        box.disabled = true;
        box.classList.add("hide")
    })
    winnerButton.classList.remove("hide");
    if (winnerName === 'O') {
        winnerButton.innerText = `Hi ${player1} , you are the Winner !!!!!!!`;
    } else winnerButton.innerText = `Hi ${player2} , you are the Winner !!!!!!!`;
    body.style.backgroundColor = "#808080"
    body.style.color = "Black"
}

checkWinner = () => {
    for (let winPattern of winPatterns) {
        let pos1 = boxes[winPattern[0]].innerText
        let pos2 = boxes[winPattern[1]].innerText
        let pos3 = boxes[winPattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winner(pos1);
                console.log("Winner")
            }
        }

    }
}



