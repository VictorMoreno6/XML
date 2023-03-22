document.addEventListener("DOMContentLoaded", assignEvents);
            
function assignEvents(){
    document.getElementById("img1").addEventListener("mouseover", changeimg1);
    document.getElementById("img1").addEventListener("mouseout", changeimg);
}

function changeimg() {
    document.getElementById("img1").src="img/Popeye.jpg";
}
function changeimg1() {
    document.getElementById("img1").src="img/Popeye2.png";    
}
