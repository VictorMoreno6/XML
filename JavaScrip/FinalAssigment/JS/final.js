document.getElementById("button").addEventListener("click", startGame);

function startGame(){
    let height=document.getElementById("rows").value;
    let width=document.getElementById("col").value;
    let level= document.getElementById("level").value;
    document.getElementById("rows").disabled=true;
    document.getElementById("col").disabled=true;
    document.getElementById("level").disabled=true;
    document.getElementById("button").disabled=true;
    document.getElementById("crono").innerText="Seconds:";
    document.getElementById("score").innerText="Score:";
    document.getElementById("message").innerText="PLAYING...";
    drawField(width,height);
    generateSequence(width, height, level);
}

function drawField(width,height){
    let vgrid = document.getElementById("field");
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "black", "white", "gray", "pink", "brown", "beige", "teal", "navy", "maroon", "olive", "lime", "aqua", "fuchsia", "silver", "gold", "indigo", "turquoise", "plum", "magenta"];
    let C = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++, C++) {
            let newButton = document.createElement("button");
            /*<newButton id="i_j" class="buttonGrid" style="width:50px;height:50px>*/
            newButton.id = i + "_" + j;
            newButton.className="buttonGrid"
            newButton.style.width="50px"
            newButton.style.height="50px"
            newButton.addEventListener("click", check);
            newButton.style.backgroundColor=colors[C];
            vgrid.appendChild(newButton);
        }
        let linebreak = document.createElement("br");
        field.appendChild(linebreak);
    }
}

function check(e){
    let point = e.target.id.split("_");
    let x = point[0];
    let y = point [1];
    console.log("The button " + x + ", " + y + " has been clicked.");
    disableEventsField(e);
}

function disableEventsField() {
    let buttonField = document.getElementById("field");
    buttonField.disableEventsField=true;
}

function generateSequence(width, height, level){
    let number= level*5;
    let colum= Math.floor(Math.random() * (width - 0 + 1));
    let row= Math.floor(Math.random() * (height - 0 + 1));
}
