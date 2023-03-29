document.getElementById("button-cancel").addEventListener("click", resetForm);
document.getElementById("button-cancel").addEventListener("click", validate);

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
    if(first.value.length<3 || first.value.length>8) {
        listErrors.push("The name must be between 3 to 8 characters long");
    }
    
    let chk=document.getElementById("input-alive");
    if(!chk.checked){
        listErrors.push("The person is not alive");
    }
    let age=document.getElementById("input-age");

    if(age.selectedIndex===0){
        listErrors.push("Please select an age");
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
        listErrors.forEach (err => {tbM.innerHTML +- "<p>" + err +"<p>"})
        
    }
}