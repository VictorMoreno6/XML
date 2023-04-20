document.getElementById("submit").addEventListener("click", createField);

function createField(){
    let rows=document.getElementById("rows").value;
    let colums=document.getElementById("col").value;
    document.getElementById("rows").disabled=true;
    document.getElementById("col").disabled=true;
    document.getElementById("level").disabled=true;
    document.getElementById("submit").disabled=true;
    document.getElementById("seconds").innerText="Seconds:"
    document.getElementById("score").innerText="Score:"
    document.getElementById("message").innerText="PLAYING..."
    drawField(rows,colums);
}

function drawField(rows,colums){

}
