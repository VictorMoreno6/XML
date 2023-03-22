document.addEventListener("DOMContentLoaded", assignEvents);
            
function assignEvents(){
    document.getElementById("bClickMe").addEventListener("click", showMessage);
    document.getElementById("tbNameofuser").addEventListener("change", changefunction);
}

function changefunction() {
    alert("Textbox changed")
    let name= name + document.getElementById("tbNameofuser").value;
}

function showMessage() {
    let name= document.getElementById("tbNameofuser").value;
    document.getElementById("Imessage").innerHTML = "Hellooo  " + name;

}