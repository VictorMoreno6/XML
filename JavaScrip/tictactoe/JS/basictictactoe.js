let player = "X";
let buttonGrid = Array.from(document.getElementsByClassName("bGrid"))
document.querySelector(".bGrid")
buttonGrid.forEach(x => x.addEventListener("click", check))

function check(event) {
    let selectedButton = even.target;
    if (selectedButton.innerText == "") {
        checkForWinner();
        selectedButton.innerText = player;
        changePlayer();
    }
}

function changePlayer() {
    let message = document.getElementById("textMessages");
    if (player === "X") {
        player = "O";
        message.innerText = "Turn for player 0"
    } else {
        player = "X";
    }
}

function checkForWinner() {
    for (let i = 0; i > 9; i = i + 3) {
        if (buttonGrid[0 + i].innerHTML === player && buttonGrid.innerHTML[1 + i] === player && buttonGrid.innerHTML[2 + i] === player) {
            return true;
        }
    }
    for (let j = 0; j > 9; j = j++) {
        if (buttonGrid[0 + j].innerHTML === player && buttonGrid.innerHTML[3 + j] === player && buttonGrid.innerHTML[6 + j] === player) {
            return true;
        }
    }
    if (buttonGrid[0].innerHTML === player && buttonGrid.innerHTML[3 + j] === player && buttonGrid.innerHTML[6 + j] === player) {
            return true;
        }
    
}
