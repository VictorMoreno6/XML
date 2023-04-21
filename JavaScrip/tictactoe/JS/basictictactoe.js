let player = "X";
//let buttonGrid = Array.from(document.getElementsByClassName("bGrid"))
//buttonGrid.forEach(x => x.addEventListener("click", check))
document.getElementById("textMessages").addEventListener("click", createGrid);
//document.querySelector(".bGrid")

function createGrid() {
    let vgrid = document.getElementById("divBoard");
    for (let i = 0; i < 9; i++) {
        let newButton = document.createElement("button");
        newButton.className = "bBoard";
        newButton.id = i;
        newButton.addEventListener("click", check);
        vgrid.appendChild(newButton);
    }
}

function check(event) {
    let selectedButton = event.target;
    if (selectedButton.innerText == "") {
        selectedButton.innerText = player;
        if (!checkForWinner()) {
            changePlayer();
        } else {
            disableButtons();
            let message = document.getElementById("textMessages");
            message.innerText = "Player " + player + " wins, congratulations.";
        }
    }
}

function changePlayer() {
    if (player === "X") {
        player = "O";
        message.innerText = "Turn for player 0"
    } else {
        player = "X";
    }
    let message = document.getElementById("textMessages");
    message.innerText = "Turn for player " + player;
}

function checkForWinner() {
    let buttonGrid = Array.from(document.getElementsByClassName("bBoard"));
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
    if (buttonGrid[0].innerHTML === player && buttonGrid.innerHTML[4] === player && buttonGrid.innerHTML[8] === player ||
        buttonGrid[2].innerHTML === player && buttonGrid.innerHTML[4] === player && buttonGrid.innerHTML[6] === player) {
        return true;
    }
    return false;
}
function disableButtons() {
    let buttonGrid = Array.from(document.getElementsByClassName("bBoard"));
    buttonGrid.forEach(x => x.disabled=true);
}
