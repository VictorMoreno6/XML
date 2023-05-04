document.getElementById("button").addEventListener("click", startGame);
let sequence = [];
let roundNr = 1;
let timeInterval;
let comprobar = 0;
let score = 0;


function startGame() {
    let height = document.getElementById("rows").value;
    let width = document.getElementById("col").value;
    let level = document.getElementById("level").value;
    document.getElementById("rows").disabled = true;
    document.getElementById("col").disabled = true;
    document.getElementById("level").disabled = true;
    document.getElementById("button").disabled = true;
    document.getElementById("crono").innerText = "Seconds:";
    document.getElementById("score").innerText = "Score:";
    document.getElementById("message").innerText = "PLAYING...";
    drawField(width, height);
    generateSequence(width, height, level);
    let rhythm = 0;
    /*if(){

    } else if(){

    } else if(){

    }*/
    playSequence();
    timeInterval = setInterval(time, 1000);
    let crono = 0;
    function time() {
        document.getElementById("crono").innerText = "Seconds: " + crono;
        crono++;
    }
}

function drawField(width, height) {
    let vgrid = document.getElementById("field");
    const colors = ["brown", "blue", "green", "yellow", "purple", "orange", "black", "white", "gray", "pink", "brown", "beige", "teal", "navy", "maroon", "olive", "lime", "aqua", "fuchsia", "silver", "gold", "indigo", "turquoise", "plum", "magenta"];
    let C = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++, C++) {
            let newButton = document.createElement("button");
            newButton.id = i + "_" + j;
            newButton.className = "buttonGrid"
            newButton.style.width = "50px"
            newButton.style.height = "50px"
            newButton.addEventListener("click", check);
            newButton.style.backgroundColor = colors[C];
            vgrid.appendChild(newButton);
        }
        let linebreak = document.createElement("br");
        field.appendChild(linebreak);
    }
}

function check(e) {
    const color = e.target.style.backgroundColor;
    changeYellow(e, color);
    let point = e.target.id.split("_");
    let x = point[0];
    let y = point[1];
    console.log("The button " + x + ", " + y + " has been clicked.");
    let [xc, yc] = sequence[comprobar];
    console.log(xc + "," + yc)
    if (x == xc && y == yc) {
        comprobar++;
    } else {
        document.getElementById("message").innerText = "You lose";
        clearInterval(timeInterval);
    }
    if (roundNr === sequence.length && comprobar === sequence.length) {
        document.getElementById("message").innerText = "You won";
        clearInterval(timeInterval);
    } else if (comprobar === roundNr) {
        roundNr++;
        comprobar = 0;
        score++;
        document.getElementById("score").innerText = "Score: " + score;
        playSequence();
    }

}

function disableEventsField() {
    let buttons = document.getElementsByClassName('buttonGrid')
    for (i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', check);
    }
}
function enableEventsField() {
    let buttons = document.getElementsByClassName('buttonGrid')
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', check);
    }
}

function generateSequence(width, height, level) {
    let number = level * 5;
    for (n = 0; n < number; n++) {
        let x = Math.floor(Math.random() * (height));
        let y = Math.floor(Math.random() * (width));
        sequence.push([x, y]);
    }
}

function playSequence(rhythm) {
    disableEventsField();
    let cont = 0;
    let myInterval = setInterval(showElement, 1000);
    setTimeout(enableEventsField, 1000 * roundNr);

    function showElement() {
        if (cont === sequence.length) {
            clearInterval(myInterval);
        }
        console.log("aa")

        let [x, y] = sequence[cont];
        let button = document.getElementById(x + "_" + y);
        let newcolor = button.style.backgroundColor;
        button.style.backgroundColor = "red";
        setTimeout(returncolor, 500);
        function returncolor() {
            button.style.backgroundColor = newcolor;
        }
        cont++;
        if (cont === roundNr && cont < sequence.length) {
            cont = 0;
            //roundNr=roundNr + 1;
            console.log("bb");
            clearInterval(myInterval);
        }
    }
}

function changeYellow(e, color){
    e.target.style.backgroundColor = "yellow";
    setTimeout(function() {
        e.target.style.backgroundColor= color;
    },100);
}



// setTimeout(); //solo pasa una vez*/