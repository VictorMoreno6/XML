
document.getElementById("Itext").addEventListener("keyup", toUpper);
document.getElementById("Itext").addEventListener("focusout", validateLength);
document.getElementById("IEmail").addEventListener("focusout", validateEmail);
document.getElementById("button-cancel").addEventListener("click", resetForm);
document.getElementById("button-cancel").addEventListener("click", validate);


function toUpper() {
    var input = document.getElementById("Itext").value;
    document.getElementById("Itext").value=input.toUpperCase();
}
function validateLength() {
    let color=document.getElementById("Itext");
    if (color.value.length<2 || color.value.length>25){
        color.style.backgroundColor="red";
    } else if(color.value.length>=2 && color.value.length<=25){
        color.style.backgroundColor="white";
    }
}

function validateEmail() {
    let mail=document.getElementById("IEmail");
    if (mail.checkValidity() == false){
        mail.style.backgroundColor="red";
        document.getElementById("IEmail").innerHTML = "Check email";
    } else if(mail.checkValidity() == true){
        mail.style.backgroundColor="white";
    }
}

function resetForm(ev) {
    ev.preventDefault();
    let answer = confirm("Are you sure that you want to reset all the data?");
    if (answer) {
        document.getElementById("form-user").reset();
    }
}

function validate(ev) {
    ev.preventDefault();
}