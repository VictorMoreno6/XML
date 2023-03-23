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
    ev.preventDefault();
}