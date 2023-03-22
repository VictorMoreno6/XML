document.addEventListener("DOMContentLoaded", assignEvents);
            
function assignEvents(){
    //document.getElementById("bClickMe").addEventListener("click", showMessage);
    document.getElementById("tbFirst").addEventListener("change", changefunction);
}

function changefunction() {
   
    let name= document.getElementById("tbFirst").value;
    document.getElementById("tbSecond").value =  name ;
}
