document.getElementById("button").addEventListener("click", startGame);
let sequence=[];
let cont=0;
let roundNr=1;
const color=[];
let comprobar=0;

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
    playSequence(roundNr);
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
    //let botonx = sequence[comprobar].;
    //let botony = sequence[]
    let x = point[0];
    let y = point [1];
    console.log("The button " + x + ", " + y + " has been clicked.");
    if (comprobar < roundNr){
        if (sequence[comprobar] === point){
            console.log("bn");
            comprobar++;
        }
        else{
            document.getElementById("message").innerText="Ha perdido";
            disableEventsField();
        }
    }
}

function disableEventsField() {
    document.getElementById("field").disabled = true;
}
function enableEventsField() {
    document.getElementById("field").disabled = false;
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
    //if (cont < roundNr){
        let myInterval=setInterval(showElement,1000);
    /*} else{
        cont=0;
        roundNr++;
        console.log("bb")
    }*/
    function showElement(roundNr){
        if (cont === sequence.length) { // si se han mostrado todos los elementos
            clearInterval(myInterval); // detener el temporizador   ESTA MAL 
            setTimeout(function() { // reestablecer el color original después de 1 segundo
                for (let i = 0; i < sequence.length; i++) {
                    let [x, y] = sequence[i];
                    let button = document.getElementById(y + "_" + x);
                    button.style.backgroundColor = color[i];
                }
                cont = 0;
                sequence = []; // reiniciar la secuencia para el siguiente nivel
                roundNr++;
                startGame(); // iniciar el siguiente nivel
            }, 1000);
            return;
        }
        console.log("aa")
        //if (cont <= roundNr){
            let[x,y]=sequence[cont]; // esta mal no lee nada
            
            let button=document.getElementById(y + "_" + x);
            let newcolor=button.style.backgroundColor;
            color[cont]=newcolor;
            if (cont > 0) {
                let i = cont;
                button.style.backgroundColor = color[i - 1];
            }       
            button.style.backgroundColor="red";
            setTimeout(returncolor,500);
            function returncolor(){
                
                button.style.backgroundColor= newcolor;
            }
            cont++;
        /*} else{
            cont = 0;
            roundNr++;
        }*/
        //clearInterval(myInterval);
       
}
}

/*function showElement(roundNr){
        console.log("aa")
        //if (cont <= roundNr){
            let[x,y]=sequence[cont]; // esta mal no lee nada
            
            let button=document.getElementById(y + "_" + x);
            let newcolor=button.style.backgroundColor;
            color[cont]=newcolor;
            if (cont > 0) {
                let i = cont;
                button.style.backgroundColor = color[i - 1];
            }       
            button.style.backgroundColor="red";
            setTimeout(returncolor,500);
            function returncolor(){
                
                button.style.backgroundColor= newcolor;
            }
            cont++;
        /*} else{
            cont = 0;
            roundNr++;
        }*/
        //clearInterval(myInterval);
        /*if (cont >= sequence.length) { // si se han mostrado todos los elementos
            clearInterval(myInterval); // detener el temporizador   ESTA MAL 
            setTimeout(function() { // reestablecer el color original después de 1 segundo
                for (let i = 0; i < sequence.length; i++) {
                    let [x, y] = sequence[i];
                    let button = document.getElementById(y + "_" + x);
                    button.style.backgroundColor = color[i];
                }
                cont = 0;
                sequence = []; // reiniciar la secuencia para el siguiente nivel
                roundNr++;
                startGame(); // iniciar el siguiente nivel
            }, 1000);
            return;
        }
}
// setTimeout(); //solo pasa una vez*/