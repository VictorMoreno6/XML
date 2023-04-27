document.getElementById("button").addEventListener("click", startGame);
let sequence=[];
let cont=0;
let roundNr=1;

function startGame(){
    //let sequence=[];
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
    
    playSequence(roundNr)
}

function drawField(width,height){
    let vgrid = document.getElementById("field");
    const colors = ["brown", "blue", "green", "yellow", "purple", "orange", "black", "white", "gray", "pink", "brown", "beige", "teal", "navy", "maroon", "olive", "lime", "aqua", "fuchsia", "silver", "gold", "indigo", "turquoise", "plum", "magenta"];
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
    for (n=0;n<number;n++) {
            let x= Math.floor(Math.random() * (width));
            let y= Math.floor(Math.random() * (height));
            sequence.push([x,y]);
    }
}

function playSequence(roundNr){
   
    const color=[];
    let myInterval= setInterval(showElement,1000, roundNr,color);
    
    
}

function showElement(roundNr, color){
        let[x,y]=sequence[cont];
        console.log("aa")
        let button=document.getElementById(y + "_" + x);
        color[cont]=button.style.backgroundColor;    
        button.style.backgroundColor="red";
        cont++;
        if(cont>0){
            let i=cont;
            button.style.backgroundColor=color[i-1];
        }
        
    

   

}