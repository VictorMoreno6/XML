document.getEElementById("tbNumber").addEvenListener("Keyup", validateNumber);
document.getEElementById("tbEmail").addEvenListener("Keyup", validateEmail);

function validateNumber() {
    var numb = document.getElementById("tbNumber");
    if (numb.checkValidity() == false) {
        document.getElementById("valMessage").innerHTML = numb.validationMessage;
    }
}

function valifateEmail() {
    var inpObj = document.getElementById("tbEmail");
    if (inpObj.checkValidity() == false) {
        document.getElementById("valMessage").innerHTML = inpObj.validationMessage;
    }
}