document.getElementById("button-cancel").addEventListener("click", resetForm);
document.getElementById("button-send").addEventListener("click", validate);

function resetForm(ev) {
    ev.preventDefault();
    let answer = confirm("Are you sure that you want to reset all the data?");
    if (answer) {
        document.getElementById("form-user").reset();
    }
}

function validate(ev) {
    let listErrors=[];
    ev.preventDefault();
    let first=document.getElementById("input-first");
    if(first.value.length < 2 || first.value.length > 15) {
    listErrors.push("The name must be between 2 to 15 characters long");}

    let surname=document.getElementById("input-sname");
    if(surname.value.length < 2 || surname.value.length > 15) {
        listErrors.push("The surname must be between 2 to 15 characters long");
    }

    let pss=document.getElementById("input-password");
    let cpss=document.getElementById("input-cpassword");
    if (pss.value.length < 8){
        listErrors.push("The password must be at least 8 chars");
    }
    if(pss.value !== cpss.value){
        listErrors.push("The passwords don't match");
    }

    let chk=document.getElementById("input-tos");
    if(!chk.checked){
        listErrors.push("You have to agree the terms of service");
    }

    let age=document.getElementById("input-age");

    if(age.selectedIndex===0){
        listErrors.push("Users under 18 can't registered");
    }
    let email=document.getElementById("input-email");

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        listErrors.push("Email not valid");
    }

    if(listErrors.length===0){
        document.getElementById("form-user").submit();
    }
    else{
        let tbM= document.getElementById("errorMessage");
        listErrors.forEach (err => {tbM.innerHTML += "<p>" + err +"</p>"})
        
    }
    clearerrorMessage();
}